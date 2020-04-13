import { exec } from '@actions/exec'
import { spawn } from 'child_process'

export function execute (cmd: string, cwd: string) {
  return exec(cmd, [], { cwd })
}

export function execAsync (cmd: string, args: string[], cwd: string) {
  return new Promise<number>((resolve, reject) => {
    const cp = spawn(cmd, args, { cwd, stdio: 'inherit' })
    cp.on('exit', (code, signal) => {
      if (typeof code === 'number') return resolve(code)
      reject(new Error('Process killed by ' + signal))
    })
    cp.on('error', (err) => reject(err))
  })
}
