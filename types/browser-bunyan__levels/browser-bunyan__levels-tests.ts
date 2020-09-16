import {
    TRACE,
    DEBUG,
    INFO,
    WARN,
    ERROR,
    FATAL,
    resolveLevel,
} from '@browser-bunyan/levels';

resolveLevel('trace'); // $ExpectType number
resolveLevel('debug');
resolveLevel('info');
resolveLevel('warn');
resolveLevel('error');
resolveLevel('fatal');

resolveLevel(TRACE);
resolveLevel(DEBUG);
resolveLevel(INFO);
resolveLevel(WARN);
resolveLevel(ERROR);
resolveLevel(FATAL);
