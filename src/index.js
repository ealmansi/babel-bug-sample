var async = require('async');
var util = require('util')
var mapLimit = util.promisify(async.mapLimit)
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
;(async () => {
  const res = await mapLimit(numbers, 3, async function(number) {
      return number
  })
  console.log('res', res)
})()
