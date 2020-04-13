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