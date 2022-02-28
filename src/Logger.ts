/**
 * **Logging Library**
 *
 * Naya Mairena
 *
 * Assignment 3 - CS410P: Code Revision and Review
 * 
 * There are four levels of severity:
 * 
 * `console.error()`
 * 
 * `console.warn()`
 * 
 * `console.info()`
 * 
 * `console.debug()`
 *
 *
 *
 *
 * @module
 */

/**
 * The Logger class allows for specified console logs
 * to display messages to the console by using variables of class type Logger.
 *
 *- The four levels of severity held in **properties**
 * and are protected to only allow manipulation by class **methods**:
 *      - `logDebug`
 *      - `logError`
 *      - `logInfo`
 *      - `logWarn`
 *
 * - The **properties** are of data type `number`
 * and are initialized to 1 by the `constructor()` to automatically be enabled.
 *
 * - Severity level is enabled with **method**
 * `consoleEnable()` by setting it equal to 1.
 *
 * - Severity level is disabled with **method**
 * `consoleDisable()` by setting it equal to 0.
 *
 * - Severity level is used depending
 * on the number sent into **method** `consoleOutput()`:
 *      - 1: `console.error()`
 *      - 2: `console.warn()`
 *      - 3: `console.info()`
 *      - 4: `console.debug()`
 *
 */
export class Logger {
    /**
     * Protected property logError to keep track if enabled or disabled.
     * ```
     * // logError definition for Logger class.
     * protected logError: number;
     * ```
     */
    protected logError: number;
    /**
     * Protected property logWarn to keep track if enabled or disabled.
     * ```
     * // logWarn definition for Logger class.
     * protected logWarn: number;
     * ```
     */
    protected logWarn: number;
    /**
     * Protected property logInfo to keep track if enabled or disabled.
     * ```
     * // logInfo definition for Logger class.
     * protected logInfo: number;
     * ```
     */
    protected logInfo: number;
    /**
     * Protected property logDebug to keep track if enabled or disabled.
     * ```
     * // logDebug definition for Logger class.
     * protected logDebug: number;
     * ```
     */
    protected logDebug: number;

    /**
     * Logger class constructor to initialize **properties** to 1.
     * ```
     * // Constructor definition for Logger class.
     * constructor() {
     *   this.logError = 1;
     *   this.logWarn = 1;
     *   this.logInfo = 1;
     *   this.logDebug = 1;
     * }
     * ```
     * @usage
     * ```
     * // Create new instance of Logger class type.
     * const log = new Logger();
     * ```
     */
    constructor() {
        this.logError = 1;
        this.logWarn = 1;
        this.logInfo = 1;
        this.logDebug = 1;
    }

    /**
    * This **method** allows for a severity level 
    * to send a message to the console.
    * Also checks if it is enabled or disabled.
    *
    * ```
    * // consoleOutput definition for Logger class.
    * consoleOutput(logNum: number, message: string): void {
    *   if (logNum < 1 || logNum > 4)
    *      console.error("Console type does not exist. Use a number 1 - 4.");
    *   else if (logNum === 1 && this.logError === 1)
    *       console.error(message);
    *  else if (logNum === 2 && this.logWarn === 1)
    *     console.warn(message);
    *  else if (logNum === 3 && this.logInfo === 1)
    *      console.info(message);
    *  else if (logNum === 4 && this.logDebug === 1)
    *    console.debug(message);
    }
    * }
    * ```
    * @usage
    * ```
    * // Call the consoleOutput method example.
    * log.consoleOutput(1, message);
    * ```
    * @param logNum
    * *logNum can only be a number from [1 - 4].*
    * @param message
    */
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