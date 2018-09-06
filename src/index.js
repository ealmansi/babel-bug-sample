var async = require('async')
var numbers = [1, 2, 3, 4, 5]
new Promise(resolve => {
  async.eachLimit(
    numbers,
    1,
    async number => {
      console.log('number', number)
    },
    resolve
  )
})
