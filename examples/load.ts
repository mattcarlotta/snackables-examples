import { config, load } from "snackables";

const configArgs = load("test", "examples");

config(configArgs);

console.log(`\x1b[32mprocess.env.CONFIG: ${process.env.CONFIG}\x1b[0m`);