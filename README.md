# Deploy to Arbitrary Git Repo

## Examples
```yaml
name: Build and Deploy

on:
  push:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Add Node.js
      uses: actions/setup-node@v1
      with:
        node-version: 12.x
    - run: npm i -g yarn
    - run: yarn
    - run: yarn build
    - uses: zhangzisu/git-repo-deploy-action@v0
      with:
        repo: ${{ secrets.REPO_WITH_TOKEN }}
```
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
