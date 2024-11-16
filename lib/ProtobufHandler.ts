import { CMSField } from "../interfaces/CMSField";
import { pad } from "../utils/pad";

export class ProtobufHandler {
  #buffer: Buffer;
  #index: number = 0;
  fields: Record<number, Buffer[]> = {};

  constructor(buffer?: Buffer) {
    this.#buffer = buffer ?? Buffer.alloc(0);
  }
  parseField(proto: CMSField) {
    switch (proto.type) {
      case "varint":
        return this.readVarint();
      case "string":
        return this.#buffer.toString();
      case "string-repeat":
        const strs = [];
        while (this.hasMore()) {
          strs.push(this.readBlock().toString());
        }
        return strs;
      case "group":
        return this.startParsing(this, proto);
    }
  }
  parseProto(proto: Record<number, CMSField>) {
    this.preprocess();
    console.log(this.fields);

    const block: Record<string, any> = {};

    for (const key in this.fields) {
      const fields = this.fields[key];
      for (const field of fields) {
        const entry = proto[key];
        if (entry.type === "group") {
          if (!Array.isArray(block[entry.name]) && block[entry.name]) {
            block[entry.name] = [block[entry.name]];
          }
          if (Array.isArray(block[entry.name])) {
            block[entry.name].push(
              new ProtobufHandler(field).parseProto(entry.fields)
            );
          } else {
            block[entry.name] = new ProtobufHandler(field).parseProto(
              entry.fields
            );
          }
        } else {
          block[entry.name] = new ProtobufHandler(field).parseField(entry);
        }
      }
    }

    return block;
  }
  startParsing(handler: ProtobufHandler, proto: CMSField) {
    const block: Record<string, any> = {};
    handler.preprocess();

    if ("fields" in proto) {
      for (const key in proto.fields) {
        const entry = proto.fields[key];
        const handlers = handler.fields[key];
        if (handlers) {
          block[entry.name] = handlers.map((field) =>
            new ProtobufHandler(field).parseField(proto.fields[key])
          );
        }
      }
    } else {
      block[proto.name] = handler.parseField(proto);
    }

    return block;
  }
  preprocess() {
    while (this.#index < this.#buffer.length) {
      const key = this.readKey();
      if (key.wire === 2) {
        if (!this.fields[key.field]) {
          this.fields[key.field] = [];
        }
        this.fields[key.field].push(this.readBlock());
      }
    }
    this.#index = 0;
  }
  readKey() {
    const varint = this.readVarint();

    return {
      wire: varint & 0b00000111,
      field: varint >> 3,
    };
  }
  readByte() {
    return this.#buffer.readUInt8(this.#index++);
  }
  readVarint() {
    let bytes = [];
    while (true) {
      const byte = this.readByte();
      bytes.push(byte);
      if ((byte & 0x80) === 0) {
        break;
      }
    }
    bytes = bytes.map((byte) => byte & 0x7f).reverse();

    const varint = bytes.map((byte) => pad(byte.toString(2), 7, "0")).join("");
    return parseInt(varint, 2);
  }
  readBlock() {
    const length = this.readVarint();
    const block = this.#buffer.subarray(this.#index, this.#index + length);
    this.#index += length;
    return block;
  }
  hasMore() {
    return this.#index < this.#buffer.length;
  }
}
