import { assign, parse } from "snackables/esm/index.mjs";

const extracted = parse(Buffer.from("ASSIGN=true"));

assign(extracted);

console.log(
  `\x1b[32mASSIGN parsed from process.env: ${extracted["ASSIGN"]}\x1b[0m`
);
console.log(`\x1b[32mprocess.env.ASSIGN: ${process.env.ASSIGN}\x1b[0m`);
