module.exports = function ({ global }) {
  global.count = global.count + 1
  console.log(global.motor1.startCount)
  console.log(`Main task has completed ${global.count} times.`)
}
