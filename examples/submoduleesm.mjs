import assign from "snackables/esm/assign";
import parse from "snackables/esm/parse";

const extracted = parse(Buffer.from("SUBMODULE=true"));

assign(extracted);

console.log(
  `\x1b[32mASSIGN parsed from process.env: ${extracted["SUBMODULE"]}\x1b[0m`
);
console.log(`\x1b[32mprocess.env.SUBMODULE: ${process.env.SUBMODULE}\x1b[0m`);
