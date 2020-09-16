interface ConsoleFormattedStreamLevelStyle {
  trace: string
  debug: string
  info: string
  warn: string
  error: string
  fatal: string
}

interface ConsoleFormattedStreamStyle {
  levels: Partial<ConsoleFormattedStreamLevelStyle>
  def: string
  msg: string
  src: string
}

interface ConsoleFormattedStreamOptions {
  logByLevel?: boolean
  css?: Partial<ConsoleFormattedStreamStyle>
}

export class ConsoleFormattedStream {
  constructor(options?: ConsoleFormattedStreamOptions)

  write(record: any): void
}
