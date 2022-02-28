import "jest-extended";
import { Logger } from "./Logger";

test("Test 1: Error console", () => {
    const infoLogOutput1: string[] = [];
    const log1 = new Logger();
    const message1 = "This is the Error Console.";

    jest.spyOn(global.console, "error").mockImplementation((msg: string) => {
        infoLogOutput1.push(msg);
    });

    log1.consoleOutput(1, message1);

    expect(infoLogOutput1).toStrictEqual([ message1 ]);
});

test("Test 2: Warning console", () => {
    const infoLogOutput2: string[] = [];
    const log2 = new Logger();
    const message2 = "This is the Warning Console.";

    jest.spyOn(global.console, "warn").mockImplementation((msg: string) => {
        infoLogOutput2.push(msg);
    });

    log2.consoleOutput(2, message2);

    expect(infoLogOutput2).toStrictEqual([ message2 ]);
});

test("Test 3: Info console", () => {
    const infoLogOutput3: string[] = [];
    const log3 = new Logger();
    const message3 = "This is the Info Console.";

    jest.spyOn(global.console, "info").mockImplementation((msg: string) => {
        infoLogOutput3.push(msg);
    });

    log3.consoleOutput(3, message3);

    expect(infoLogOutput3).toStrictEqual([ message3 ]);
});

test("Test 4: Debug console", () => {
    const infoLogOutput4: string[] = [];
    const log4 = new Logger();
    const message4 = "This is the Debug Console.";

    jest.spyOn(global.console, "debug").mockImplementation((msg: string) => {
        infoLogOutput4.push(msg);
    });

    log4.consoleOutput(4, message4);

    expect(infoLogOutput4).toStrictEqual([ message4 ]);
});

test("Test 5: Disable Error Console", () => {
    const infoLogOutput5: string[] = [];
    const log5 = new Logger();
    const message5 = "This is the Error Console.";

    jest.spyOn(global.console, "error").mockImplementation((msg: string) => {
        infoLogOutput5.push(msg);
    });

    log5.consoleOutput(1, message5);
    log5.consoleDisable(1);
    log5.consoleOutput(1, message5);

    expect(infoLogOutput5).toStrictEqual([ message5 ]);
});

test("Test 6: Disable Warn Console", () => {
    const infoLogOutput6: string[] = [];
    const log6 = new Logger();
    const message6 = "This is the Warn Console.";

    jest.spyOn(global.console, "warn").mockImplementation((msg: string) => {
        infoLogOutput6.push(msg);
    });

    log6.consoleOutput(2, message6);
    log6.consoleDisable(2);
    log6.consoleOutput(2, message6);

    expect(infoLogOutput6).toStrictEqual([ message6 ]);
});

test("Test 7: Disable Info Console", () => {
    const infoLogOutput7: string[] = [];
    const log7 = new Logger();
    const message7 = "This is the Info Console.";

    jest.spyOn(global.console, "info").mockImplementation((msg: string) => {
        infoLogOutput7.push(msg);
    });

    log7.consoleOutput(3, message7);
    log7.consoleDisable(3);
    log7.consoleOutput(3, message7);

    expect(infoLogOutput7).toStrictEqual([ message7 ]);
});

test("Test 8: Disable Debug Console", () => {
    const infoLogOutput8: string[] = [];
    const log8 = new Logger();
    const message8 = "This is the Debug Console.";

    jest.spyOn(global.console, "debug").mockImplementation((msg: string) => {
        infoLogOutput8.push(msg);
    });

    log8.consoleOutput(4, message8);
    log8.consoleDisable(4);
    log8.consoleOutput(4, message8);

    expect(infoLogOutput8).toStrictEqual([ message8 ]);
});

test("Test 9: Display Error Console, try for Warn Console w/o mock", () => {
    const infoLogOutput9: string[] = [];
    const log9 = new Logger();
    const message9 = "This is the Error Console.";

    jest.spyOn(global.console, "error").mockImplementation((msg: string) => {
        infoLogOutput9.push(msg);
    });

    log9.consoleOutput(1, message9);
    log9.consoleOutput(1, message9);
    log9.consoleOutput(2, message9);

    expect(infoLogOutput9).toStrictEqual([ message9, message9 ]);
});

test("Test 10: Disable and Enable Error Console", () => {
    const infoLogOutput10: string[] = [];
    const log10 = new Logger();
    const message10 = "This is the Error Console.";

    jest.spyOn(global.console, "error").mockImplementation((msg: string) => {
        infoLogOutput10.push(msg);
    });

    log10.consoleDisable(1);
    log10.consoleOutput(1, message10);
    log10.consoleEnable(1);
    log10.consoleOutput(1, message10);

    expect(infoLogOutput10).toStrictEqual([ message10 ]);
});

test("Test 11: Disable and Enable Warn Console", () => {
    const infoLogOutput11: string[] = [];
    const log11 = new Logger();
    const message11 = "This is the Warn Console.";

    jest.spyOn(global.console, "warn").mockImplementation((msg: string) => {
        infoLogOutput11.push(msg);
    });

    log11.consoleDisable(2);
    log11.consoleOutput(2, message11);
    log11.consoleEnable(2);
    log11.consoleOutput(2, message11);

    expect(infoLogOutput11).toStrictEqual([ message11 ]);
});

test("Test 12: Disable and Enable Info Console", () => {
    const infoLogOutput12: string[] = [];
    const log12 = new Logger();
    const message12 = "This is the Info Console.";

    jest.spyOn(global.console, "info").mockImplementation((msg: string) => {
        infoLogOutput12.push(msg);
    });

    log12.consoleDisable(3);
    log12.consoleOutput(3, message12);
    log12.consoleEnable(3);
    log12.consoleOutput(3, message12);

    expect(infoLogOutput12).toStrictEqual([ message12 ]);
});

test("Test 13: Disable and Enable Debug Console", () => {
    const infoLogOutput13: string[] = [];
    const log13 = new Logger();
    const message13 = "This is the Debug Console.";

    jest.spyOn(global.console, "debug").mockImplementation((msg: string) => {
        infoLogOutput13.push(msg);
    });

    log13.consoleDisable(4);
    log13.consoleOutput(4, message13);
    log13.consoleEnable(4);
    log13.consoleOutput(4, message13);

    expect(infoLogOutput13).toStrictEqual([ message13 ]);
});