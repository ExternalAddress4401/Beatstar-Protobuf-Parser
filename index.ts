import { promises as fs } from "fs";
import { ProtobufHandler } from "./lib/ProtobufHandler";
import { proto } from "./protos/FontFallbackConfig";

async function start() {
  const file = await fs.readFile("./cms/FontFallbackConfig.bytes");
  const handler = new ProtobufHandler(file);
  const w = handler.parseProto(proto);
  await fs.writeFile("a.txt", JSON.stringify(w, null, 2));
}

start();
