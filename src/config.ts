import { getInput } from '@actions/core'

export interface IActionConfig {
  src: string
  dst: string
  branch: string
  repo: string
  singleCommit: boolean
  workspace: string
  name: string
  email: string
}

export function getConfig (): IActionConfig {
  const config = {
    src: getInput('SRC') || 'dist',
    dst: getInput('DST') || '',
    branch: getInput('BRANCH') || 'master',
    repo: getInput('REPO'),
    singleCommit: getInput('SINGLE_INPUT') === 'true',
    workspace: process.env.GITHUB_WORKSPACE || '',
    name: getInput('NAME') || 'Github Actions',
    email: getInput('EMAIL') || 'noreply@actions.github.com'
  }
  if (!config.src.endsWith('/')) config.src += '/'
  if (config.dst)config.dst = '/' + config.dst
  return config
}
