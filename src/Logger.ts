/**
 * **Logging Library**
 *
 * Naya Mairena
 *
 * Winter 2022
 *
 * Assignment 3
 *
 * CS410P: Code Revision and Review
 *
 * **Create a new instance of Logger class**
 *
 * This is done by calling the constructor of the Logger class.
 * ```
 * const log = new Logger();
 * ```
 *
 * **Enable or Disable Severity Level**
 *
 * Utilize the methods in the Logger class to enable or disable.
 * A number is used to correspond to the severity level:
 * 1. `console.error()`
 * 2. `console.warn()`
 * 3. `console.info()`
 * 4. `console.debug()`
 *
 * ```
 * //Enable console.error()
 * log.consoleEnable(1);
 * //Disable console.error()
 * log.consoleDisable(1);
 * ```
 *
 * **Send Message to The Console**
 *
 * Log message is created by utilizing the output method in the Logger Class.
 *
 * ```
 * const log = new Logger();
 * const message = "This is an error log";
 * log.consoleOutput(1, message);
 * ```
 * *Reference the Logger Class section for more details on how to use.*
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
     *   else if (logNum === 2 && this.logWarn === 1)
     *       console.warn(message);
     *   else if (logNum === 3 && this.logInfo === 1)
     *       console.info(message);
     *   else if (logNum === 4 && this.logDebug === 1)
     *       console.debug(message);
     * }
     * ```
     * @usage
     * ```
     * // Call to the consoleOutput method example.
     * const log = new Logger();
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

    /**
     * This **method** enables a severity level by setting equal to 1.
     * ```
     * //consoleEnable definition for Logger class.
     * consoleEnable(logNum: number): void {
     *   if (logNum === 1)
     *      this.logError = 1;
     *  else if (logNum === 2)
     *      this.logWarn = 1;
     *  else if (logNum === 3)
     *      this.logInfo = 1;
     *  else if (logNum === 4)
     *      this.logDebug = 1;
     * }
     * ```
     * @usage
     * ```
     * // Call to consoleEnable method example.
     * const log = new Logger();
     * log.consoleEnable(1);
     * ```
     * @param logNum
     * *logNum can only be a number from [1 - 4].*
     */
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

    /**
     * This **method** disables a severity level by setting equal to 0.
     * ```
     * //consoleDisable definition for Logger class.
     * consoleDisable(logNum: number): void {
     *   if (logNum === 1)
     *      this.logError = 0;
     *  else if (logNum === 2)
     *      this.logWarn = 0;
     *  else if (logNum === 3)
     *      this.logInfo = 0;
     *  else if (logNum === 4)
     *      this.logDebug = 0;
     * }
     * ```
     * @usage
     * ```
     * // Call to consoleDisable method example.
     * const log = new Logger();
     * log.consoleDisable(1);
     * ```
     * @param logNum
     * *logNum can only be a number from [1 - 4].*
     */
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