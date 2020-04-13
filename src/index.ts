import * as core from '@actions/core'
import { main } from './main'

main()
  .then(() => {
    core.info('Action finished')
  })
  .catch(e => {
    core.setFailed(e.message)
  })
