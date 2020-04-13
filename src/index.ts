import { main } from './main'

main()
  .then(() => {
    console.log('Action finished')
  })
  .catch(e => {
    console.log(e.message)
  })
