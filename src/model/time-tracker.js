import Timer from '../../module/js-stopwatch-timer/src/timer.js'

export class TimeTracker {
  timer

  constructor() {
    this.timer = new Timer()
  }

  startTimer() {
    this.timer.start()
  }

  getCurrentTime() {
    const time = this.timer.lap()
    return time
  }

  stopTimer() {
    this.timer.stop()
  }

  resetTimer() {
    this.timer.reset()
  }
}