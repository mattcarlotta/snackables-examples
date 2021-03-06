import { config } from "snackables";

process.env.MESSAGE = "hello";

config({ dir: "examples", paths: ".env.interpolate", debug: true });

console.log(
  `\x1b[32mprocess.env.PROCESS_MESSAGE: ${process.env.PROCESS_MESSAGE}\x1b[0m`
);
console.log(`\x1b[32mprocess.env.CURRENTDIR: ${process.env.CURRENTDIR}\x1b[0m`);
