// Type definitions for @browser-bunyan/levels 1.5
// Project: https://github.com/philmander/browser-bunyan#readme
// Definitions by: Jiri Pokorny <https://github.com/Poky85>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const TRACE: number;
export const DEBUG: number;
export const INFO: number;
export const WARN: number;
export const ERROR: number;
export const FATAL: number;

export type LogLevelName = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
export type LogLevelNum = number;

export type levelFromName = {
    [level in LogLevelName]: number;
};

export interface nameFromLevel {
    [level: number]: LogLevelName;
}

export function resolveLevel(nameOrNum: LogLevelName | LogLevelNum): LogLevelNum;
