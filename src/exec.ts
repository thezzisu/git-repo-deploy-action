import { exec } from '@actions/exec'

export function execute (cmd: string, cwd: string) {
  return exec(cmd, [], { cwd })
}
