// Type definitions for browser-bunyan 1.5
// Project: https://github.com/philmander/browser-bunyan
// Definitions by: Paul Lockwood <https://github.com/PaulLockwood>
//                 Michael Strobel <https://github.com/kryops>
//                 Jiri Pokorny <https://github.com/Poky85>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { LogLevelName, LogLevelNum } from '@browser-bunyan/levels';

export {
    TRACE,
    DEBUG,
    INFO,
    WARN,
    ERROR,
    FATAL,
    resolveLevel,
    levelFromName,
    nameFromLevel,
} from '@browser-bunyan/levels';

type ErrSerializer = (
    err: Error,
) => {
    message: string;
    name: string;
    stack?: string;
    code?: number | string;
    signal?: number | string;
};

export const stdSerializers: {
    err: ErrSerializer;
};

interface Fields {
    [key: string]: any;
}

interface ExcludeFieldsMap {
    [key: string]: boolean;
}

export interface LogRecord {
    level: LogLevelNum;
    levelName: LogLevelName;
    msg: string;
    time: Date;
    src: string;
    v: number;
    [field: string]: any;
}

interface Stream {
    write(record: LogRecord): void;
}

interface StreamOptions {
    name?: string;
    level?: LogLevelName | LogLevelNum;
    raw?: boolean;
    stream: Stream;
    type?: 'raw' | 'stream';
}

type Serializer = (input: any) => any;

interface Serializers {
    [key: string]: Serializer;
}

// Child cannot set logger name
interface ChildLoggerOptions {
    level?: LogLevelName | LogLevelNum;
    stream?: StreamOptions;
    streams?: StreamOptions[];
    serializers?: Serializers;
    src?: boolean;
    [key: string]: any;
}

export interface LoggerOptions extends ChildLoggerOptions {
    name: string;
}

export class Logger {
    constructor(options: LoggerOptions);

    constructor(parent: Logger, _childOptions: ChildLoggerOptions, _childSimple?: boolean);

    protected _level: LogLevelNum;

    fields: Fields;

    haveNonRawStreams: boolean | undefined;

    streams: StreamOptions[];

    serializers: Serializers | null;

    src: boolean;

    protected _applySerializers(fields: Fields, excludeFields?: ExcludeFieldsMap): void;

    protected _emit(rec: LogRecord, noemit?: boolean): string;

    addSerializers(serializers: Serializers): void;

    addStream(options: StreamOptions, defaultLevel?: LogLevelName | LogLevelNum): void;

    child(options?: ChildLoggerOptions, simple?: boolean): Logger;

    // Returns the current log level (lowest level of all its streams).
    level(): LogLevelNum;

    // Set all streams to level
    level(value: LogLevelName | LogLevelNum): void;

    // Returns an array of the levels of each stream.
    levels(): LogLevelNum[];

    // Get level of stream at index
    levels(index: number): LogLevelNum;

    // Get level of stream with name
    levels(name: string): LogLevelNum;

    // Set level of stream at index
    levels(index: number, level: LogLevelName | LogLevelNum): void;

    // Set level of stream with name
    levels(name: string, level: LogLevelName | LogLevelNum): void;

    /**
     * Returns a boolean: is the `trace` level enabled?
     */
    trace(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    trace(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    trace(fields: Fields, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    trace(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `debug` level enabled?
     */
    debug(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    debug(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    debug(fields: Fields, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    debug(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `info` level enabled?
     */
    info(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    info(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    info(fields: Fields, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    info(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `warn` level enabled?
     */
    warn(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    warn(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    warn(fields: Fields, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    warn(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `error` level enabled?
     */
    error(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    error(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    error(fields: Fields, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    error(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `fatal` level enabled?
     */
    fatal(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    fatal(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    fatal(fields: Fields, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    fatal(format: any, ...params: any[]): void;
}

export function createLogger(options: LoggerOptions): Logger;

export function createLogger(parent: Logger, _childOptions?: ChildLoggerOptions, _childSimple?: boolean): Logger;

export function safeCycles(): (key: string, val: any) => any;

export { ConsoleFormattedStream } from '@browser-bunyan/console-formatted-stream';

export { ConsoleRawStream } from '@browser-bunyan/console-raw-stream';

export { ConsolePlainStream } from '@browser-bunyan/console-plain-stream';
