// @ts-nocheck

jest.spyOn(global.console, "log").mockImplementation(() => {});
jest.spyOn(global.console, "warn").mockImplementation(() => {});

describe("Register", () => {
  afterAll(() => {
    jest.resetModules();
  });

  it("registers ENVs when the package is imported or registered in the CLI", () => {
    expect(process.env.MESSAGE).toBeUndefined();
    expect(process.env.TESTING).toBeUndefined();
    process.env.ENV_LOAD = "base,test,invalid";
    process.env.ENV_DEBUG = "true";

    require("../src");

    expect(global.console.log.mock.calls[0][0]).toContain(
      "[craftenv] Extracted 'env.base' environment variables"
    );

    expect(global.console.log.mock.calls[1][0]).toContain(
      "[craftenv] Extracted 'env.test' environment variables"
    );

    expect(global.console.warn.mock.calls[0][0]).toContain(
      "[craftenv] Unable to extract 'env.invalid' because the file was not found"
    );

    expect(global.console.log.mock.calls[2][0]).toContain(
      '[craftenv] Assigned {"MESSAGE":"hello","TESTING":"true"} to process.env'
    );

    expect(process.env.MESSAGE).toEqual("hello");
    expect(process.env.TESTING).toEqual("true");
  });
});