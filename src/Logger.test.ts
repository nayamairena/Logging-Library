import "jest-extended";
import { } from "./Logger";

/* This function is used in the test below to demonstrate how to
 * write tests that check for correct console output. When you
 * start writing your own tests, delete this function and the
 * example test that uses it.
 */
function exampleFunctionUsingConsole(): void {
    console.info("test1");
    console.info("test2");
}

test("example to show how to test console output", () => {
    // Create an array to store the console output.
    const infoLogOutput: string[] = [];

    /* Configure Jest to replace every console.info call in the
     * duration of this test with a function that pushes a message
     * onto the end of logOutput. To test console.error,
     * console.warn, or console.debug, just replace the "info"
     * string with the appropriate method name.
     */
    jest.spyOn(global.console, "info").mockImplementation((msg: string) => {
        infoLogOutput.push(msg);
    });

    // Call a function that uses console.info.
    exampleFunctionUsingConsole();

    // Check that the log output is what we expected; use
    // .toStrictEqual instead of .toBe when comparing arrays.
    expect(infoLogOutput).toStrictEqual([ "test1", "test2" ]);
});