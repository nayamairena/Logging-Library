/**
 *
 * **Logging Library**
 *
 * Naya Mairena
 * Assignment 3
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
    logError: number;
    logWarn: number;
    logInfo: number;
    logDebug: number;

    enabled: boolean;

    constructor() {
        this.logError = 1;
        this.logWarn = 2;
        this.logInfo = 3;
        this.logDebug = 4;

        this.enabled = true;
    }

    consoleOutput(logNum: number, active: boolean, message: string): void {
        if (logNum === this.logError && active)
            console.error(message);
        if (logNum === this.logWarn && active)
            console.warn(message);
        if (logNum === this.logInfo && active)
            console.info(message);
        if (logNum === this.logDebug && active)
            console.debug(message);
    }

    consoleEnable(): void {
        this.enabled = true;
    }

    consoleDisable(): void {
        this.enabled = false;
    }
}