# Logging Library

This is a project template for a simple library to log messages to the browser console. When complete, the library will support the following features:

  - At any time, client code may create a new *logger*, which provides access to a *logging function*.
  - Each call to a logging function includes a message along with a *severity level*, which indicates whether the message is an *error* message, a *warning* message, an *informational* mesage, or a *debugging* message. These are the only possible severity levels.
  - At any time, a logger object may be configured to either *display* or *ignore* messages associated with a given severity level. Each severity level is configured independently: for example, it is valid to have a logger configured to ignore *error* messages, display *warning* messages, ignore *informational* messages, and display *debug* messages. By default, all severity levels are displayed.

This project is already set up with a build system and test framework, but you will be writing **all** of the library code from scratch.

In our next (and final) assignment in this course, another student will *use* and *review* your library from this assignment. Your grade will **not** be affected by another student's review of your code, but you should still try to write good readable code for the reviewer's sake!

## Assignment goals

The high-level goal of this assignment is to practice the skills of *library design* and *library documentation*.

These are much different skills than the skill of *implementing* a program that has already been designed for you. In general, good *design* and good *documentation* require good **planning** and good **communication**.

As in previous assignments, your *code* must be your own individual work, but you are strongly encouraged to discuss your library *design* and *documentation* with other students!

## Assignment requirements

All of your library code must be written in the `src/Logger.ts` file. You may not edit any file except `src/Logger.ts` and `src/Logger.test.ts`.

When client code calls a logging function, your code should use the severity level to determine how to print the log message (if the logger is not currently configured to ignore that severity level):
  - An *error* message should be printed with `console.error`.
  - A *warning* message should be printed with `console.warn`.
  - An *informational* message should be printed with `console.info`.
  - A *debugging* message should be printed with `console.debug`.

Each of these `console` methods prints to the browser developer console, which can be opened from the "developer tools" in any modern browser.

Your code is required to compile without ESLint warnings. (Imagine that this library is part of a larger codebase that you do not personally have full control over.)

Apart from the ESLint requirement, your code is **not** required to follow any particular structure, implementation, or naming convention, as long as your library meaningfully provides the required features. For example, you may choose whether your "logger" is implemented as a `class` or with some other structure. TypeScript will give you a lot of room to experiment here!

You must use the `export` keyword to publicly export each class, function, or variable that is intended to be part of the public interface of your library. Definitions that are **not** intended to be part of the public interface should **not** be `export`ed. See the code from assignments 1 and 2 for examples.

You must write a TypeDoc *module documentation comment* to provide a summary of the use of your library. This will be your "readme" text: it will be the first thing a client sees when they open up the documentation for your library. This documentation comment should include an introduction to the features of your library and some example code to show the user how to use the library. See the top of `src/Logger.ts` for a sample module documentation comment that you can edit.

To document a public class, function, or variable, you must use a TypeDoc *documentation comment*. You are **not** required to write a documentation comment for every public definition in your code, but no **other** forms of documentation will be accepted: all of the documentation that you write must be in the form of TypeDoc documentation comments. See the code from assignment 1 and review the lecture on library documentation for examples.

You are still **not** required to write automated tests, but it still **is** a very good idea! There is an example test in `src/Logger.test.ts` to show you how to test a function's console output. If you have tested your code thoroughly in Jest, you can be confident that your library will work as expected when a client uses it in their own code.

## Grading

You will be graded on whether your code meets the above requirements and whether your documentation is sufficient for a user who is unfamiliar with your library code. You will lose points for ESLint warnings, but other than that code style will not be graded. Still, please try to use good style - it'll make for a better exercise that way!

## Setup

If you're working on Windows, run these Git commands in a terminal before you start working on this project:

```
git config --global core.autocrlf input
```

Run through the assignment 1 setup instructions, but for this `logging-library` repository instead of the assignment 1 `calculator` repository.

To submit your work, push your code to your `logging-library` fork on GitLab.

## Example usage

Here is an example sequence of pseudo-code steps to illustrate how client code will be interacting with your library.

1. Create a new logger and store it in a variable named `log1`.
2. Use `log1` to call a logging function with the message `"test1"` at an *informational* severity level. In response, the library code calls `console.info` with `"test1"` as the message.
3. Configure `log1` to ignore the *informational* severity level.
4. Use `log1` to call a logging function with the message `"test2"` at an *informational* severity level. The library does not produce any console output in response, because this severity level is currently ignored by `log1`.
5. Use `log1` to call a logging function with the message `"test3"` at a *warning* severity level. In response, the library code calls `console.warn` with the message `"test3"`.
6. Create a new logger and store it in a variable named `log2`.
7. Use `log2` to call a logging function with the message `"test4"` at an *informational* severity level. In response, the library calls `console.info` with `"test4"` as the message.
8. Use `log1` to call a logging function with the message `"test5"` at an *informational* severity level. The library does not produce any console output in response, because this severity level is currently ignored by `log1`.
9. Configure `log1` to display the *informational* severity level.
10. Use `log1` to call a logging function with the message `"test6"` at an *informational* severity level. In response, the library calls `console.info` with `"test6"` as the message.
