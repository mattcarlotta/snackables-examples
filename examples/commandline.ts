import { parse } from "snackables";

// using a bash script for complex commandline queries
const result = parse(Buffer.from("USER_SYS=$(bash ./examples/os.sh)"));
console.log(`\x1b[32mparsed result: ${JSON.stringify(result, null, 2)}\x1b[0m`);

// Envs loaded from 'env.command' when the package is loaded
console.log(`\x1b[32mprocess.env.DATE: ${process.env.DATE}\x1b[0m`);
console.log(`\x1b[32mprocess.env.WHOAMI: ${process.env.WHOAMI}\x1b[0m`);
console.log(
  `\x1b[32mprocess.env.LOGGEDIN_USER: ${process.env.LOGGEDIN_USER}\x1b[0m`
);
