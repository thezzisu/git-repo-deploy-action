import { exec } from '@actions/exec'

export function execute(cmd: string, cwd: string, args: string[] = []) {
  return exec(cmd, args, { cwd })
}

export async function executeWithStdio(cmd: string, cwd: string, args: string[] = []) {
  let stdout = ''
  let stderr = ''

  const code = await exec(cmd, args, {
    cwd,
    listeners: {
      stdout: (data: Buffer) => {
        stdout += data.toString()
      },
      stderr: (data: Buffer) => {
        stderr += data.toString()
      }
    }
  })

  return { code, stdout, stderr }
}
