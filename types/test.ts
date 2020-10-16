/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import * as snackable from "snackable";

const { config, parse }: snackable.SnackableEnv = {
  config: snackable.config,
  parse: snackable.parse
};

const env = config();
const dbUrl: string | null =
  env.error || !env.parsed ? null : env.parsed["BASIC"];

config({
  path: ".env-example",
  encoding: "utf8",
  debug: true
});

const parsed = parse("NODE_ENV=production\nDB_HOST=a.b.c");
const dbHost: string = parsed["DB_HOST"];

const parsedFromBuffer = parse(Buffer.from("JUSTICE=league\n"));
const justice: string = parsedFromBuffer["JUSTICE"];

/* eslint-enable @typescript-eslint/no-unused-vars */
