/**
 *
 * **Logging Library**
 *
 * Naya Mairena
 *
 * Assignment 3
 *
 * CS410P: Code Revision and Review
 *
 * @module
 */

/* This is a dummy definition just so that this file has at
 * least one export, which is required for the test suite to
 * run. Delete this once you've defined at least one export of
 * your own in this file.
 */
export class Logger {
    protected logError: number;
    protected logWarn: number;
    protected logInfo: number;
    protected logDebug: number;

    constructor() {
        this.logError = 1;
        this.logWarn = 1;
        this.logInfo = 1;
        this.logDebug = 1;
    }

    consoleOutput(logNum: number, message: string): void {
        if (logNum < 1 || logNum > 4)
            console.error("Console type does not exist. Use a number 1 - 4.");
        else if (logNum === 1 && this.logError === 1)
            console.error(message);
        else if (logNum === 2 && this.logWarn === 1)
            console.warn(message);
        else if (logNum === 3 && this.logInfo === 1)
            console.info(message);
        else if (logNum === 4 && this.logDebug === 1)
            console.debug(message);
    }

    consoleEnable(logNum: number): void {
        if (logNum === 1)
            this.logError = 1;
        else if (logNum === 2)
            this.logWarn = 1;
        else if (logNum === 3)
            this.logInfo = 1;
        else if (logNum === 4)
            this.logDebug = 1;
    }

    consoleDisable(logNum: number): void {
        if (logNum === 1)
            this.logError = 0;
        else if (logNum === 2)
            this.logWarn = 0;
        else if (logNum === 3)
            this.logInfo = 0;
        else if (logNum === 4)
            this.logDebug = 0;
    }
}