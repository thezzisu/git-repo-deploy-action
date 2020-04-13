const cp = require('child_process')
const fs = require('fs')

cp.execSync('yarn ncc -m build src/index.ts', { stdio: 'inherit' })
fs.copyFileSync('action.yml', 'dist/action.yml')
fs.copyFileSync('README.md', 'dist/README.md')
fs.copyFileSync('LICENSE', 'dist/LICENSE')
