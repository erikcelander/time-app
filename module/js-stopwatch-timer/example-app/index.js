import Timer from '../src/timer.js'

const timer = new Timer()


// Starts timer
timer.start()

// Logs current time every second
let interval = setInterval(() => {
  timer.log()
}, 1000)


// After 5 seconds, lap and log it
setTimeout(() => {
  console.log('lap: ' + timer.lap().seconds + 's')


  // After total 10 seconds has passed, reset timer and start countdown from 10 seconds
  setTimeout(() => {
    timer.reset()
    clearInterval(interval)
    console.log('timer reset')
    console.log('start countdown from 10')
    interval = setInterval(() => {
      timer.log()
    }, 1000)
    timer.countdown(10)

    setTimeout(() => {
      clearInterval(interval)
      timer.stop()
    }, 10020)

  }, 5010)
}, 5010)

