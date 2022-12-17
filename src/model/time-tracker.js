import Timer from '../../node_modules/js-stopwatch-timer/src/timer.js'

/**
 * The time tracker model.
 * 
 * @class TimeTracker
 * @property {Timer} #timer - The timer.
 */
export class TimeTracker {

  #timer

  /**
   * Creates a new instance of the TimeTracker class.
   */
  constructor() {
    this.#timer = new Timer()
  }

  /**
   * Starts the timer.
   */
  startTimer() {
    this.#timer.start()
  }

  /**
   * Returns the current time.
   * 
   * @returns {number} - The current time.
   */
  getCurrentTime() {
    const time = this.#timer.lap()
    return time
  }

  /**
   * Stops the timer.
   */
  stopTimer() {
    this.#timer.stop()
  }

  /**
   * Resets the timer.
   */
  resetTimer() {
    this.#timer.reset()
  }
}