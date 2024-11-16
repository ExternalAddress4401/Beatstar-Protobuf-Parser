import { promises as fs } from "fs";
import { ProtobufHandler } from "./lib/ProtobufHandler";
import { proto } from "./protos/LangConfig";

async function start() {
  const file = await fs.readFile("./cms/LangConfig.bytes");
  const handler = new ProtobufHandler(file);
  const w = handler.parseProto(proto);
  await fs.writeFile("a.txt", JSON.stringify(w, null, 2));
}

start();
