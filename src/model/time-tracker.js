import Timer from '../../module/js-stopwatch-timer/src/timer.js'
import { TrackedTime } from './tracked-time.js'

export class TimeTracker {
  timer
  savedTrackedTimes

  constructor() {
    this.timer = new Timer()
    this.savedTrackedTimes = []
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

  saveTrackedTime(title, duration, date) {
    const trackedTime = new TrackedTime(title, duration, date)
    this.savedTrackedTimes.push(trackedTime)
  }

  getSavedTrackedTimes() {
    return this.savedTrackedTimes
  }
}