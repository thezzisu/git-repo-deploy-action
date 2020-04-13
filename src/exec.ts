import { exec } from '@actions/exec'
import { spawn } from 'child_process'

export function execute (cmd: string, cwd: string) {
  return exec(cmd, [], { cwd })
}

export function execAsync (cmd: string, cwd: string) {
  return new Promise<number>((resolve, reject) => {
    const cp = spawn(cmd, { cwd, stdio: 'inherit' })
    cp.on('exit', (code, signal) => {
      if (code) return resolve(code)
      reject(new Error('Process killed by ' + signal))
    })
    cp.on('error', (err) => reject(err))
  })
}
