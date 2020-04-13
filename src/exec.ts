import { isDebug } from '@actions/core'
import { exec } from '@actions/exec'
import concat from 'concat-stream'

export function execute (cmd: string, cwd: string) {
  return new Promise<string>((resolve, reject) => {
    const stream = concat(buf => resolve(buf.toString().trim()))

    exec(cmd, [], {
      silent: !isDebug(),
      cwd,
      outStream: stream
    }).catch(reject)
  })
}
