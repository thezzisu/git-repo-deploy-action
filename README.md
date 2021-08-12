# Deploy to Arbitrary Git Repo

## Examples

See [this action](./.github/workflows/latest.yml). This action is just being deployed using itself.

### Using ssh

Use actions like [webfactory/ssh-agent](https://github.com/webfactory/ssh-agent)
to setup ssh agent. There's no need to reconfigure git-repo-deploy-action as
it'll use the default ssh push.

## Full options

```
src:
  description: 'The source directory to deploy. Relative to current project root. If not specified, `dist` will be used.'
  required: false
dst:
  description: 'The destination directory. Relative to destination git repo root. If not specified, will directly deploy to repo root.'
  required: false
branch:
  description: 'The target branch of the dest git repo.'
  required: false
repo:
  description: 'The full url of the dest git repo. HTTPS repos should include credentials. SSH repos should have extra setup.'
  required: true
single:
  description: 'Set true to override existed commits.'
  required: false
name:
  description: 'Git config name. Default: Github Actions'
  required: false
email:
  description: 'Git config email. Default: noreply@actions.github.com'
  required: false
```
