![snackablesLogo](https://github.com/mattcarlotta/snackables/blob/main/snackablesLogo.png?raw=true)

<p align="center">
  <a href="https://www.npmjs.com/package/snackables">
    <img src="https://img.shields.io/npm/v/snackables.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://github.com/mattcarlotta/snackables/actions?query=workflow%3A%22Publish+Workflow%22">
    <img src="https://img.shields.io/github/workflow/status/mattcarlotta/snackables/Publish%20Workflow?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://codecov.io/gh/mattcarlotta/snackables/branch/main">
    <img src="https://img.shields.io/codecov/c/github/mattcarlotta/snackables?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://github.com/mattcarlotta/snackables/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/snackables.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://www.npmjs.com/package/snackables">
    <img src="https://img.shields.io/npm/dm/snackables?style=for-the-badge&labelColor=000000">
  </a>
</p>

Heavily inspired by [dotenv](https://github.com/motdotla/dotenv) and [dotenv-expand](https://github.com/motdotla/dotenv-expand), [snackables](https://github.com/mattcarlotta/snackables) is a simple to use [zero-dependency](https://bundlephobia.com/result?p=snackables@) package module that automatically loads environment variables from a predefined `ENV_LOAD` variable. When it comes to `.env` file naming, snackables is unopinionated, so you can name them anything you'd like or you can follow the [The Twelve-Factor App](https://12factor.net/config) methodology.

## Installation

```bash
git clone git@github.com:mattcarlotta/snackables-examples.git
cd snackables-examples
yarn (or npm i)
```

Run examples by using one of the commands below:

| `yarn <command>`        | Description                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| `ex:arrpaths`           | Runs example for using `config`'s `paths` as an array.           |
| `ex:assign`             | Runs example for using `assign` with `parse`.                    |
| `ex:basic`              | Runs example for basic usage.                                    |
| `ex:config`             | Runs example for using `config`.                                 |
| `ex:commandline`        | Runs example for command line substitutions.                     |
| `ex:esm`                | Runs esm example.                                                |
| `ex:interpolate`        | Runs example for interpolate Envs.                               |
| `ex:load`               | Runs example using `load` and `config`.                          |
| `ex:loadconfig`         | Runs example preloading using `LOAD_CONFIG`.                     |
| `ex:parse`              | Runs example using `parse`.                                      |
| `ex:paths`              | Runs example using `config`'s `paths` argument                   |
| `ex:preload`            | Runs example preloading Envs.                                    |
| `ex:preloadcustompaths` | Runs example preloading Envs from custom paths using `ENV_LOAD`. |
| `ex:preloaddir`         | Runs example preloading using `ENV_DIR`.                         |
| `ex:override`           | Runs example overrides Envs in `process.env`.                    |
| `ex:strpaths`           | Runs example using string paths.                                 |
