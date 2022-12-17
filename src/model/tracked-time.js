/**
 * The TrackedTime model.
 * 
 * @class TrackedTime
 * @property {string} title - The title of the tracked time.
 * @property {number} duration - The duration of the tracked time.
 * @property {Date} date - The date of the tracked time.
 */
export class TrackedTime {
  title
  duration
  date

  /**
   * Creates a new instance of the TrackedTime class.
   * 
   * @param {string} title - The title of the tracked time.
   * @param {number} duration - The duration of the tracked time.
   * @param {Date} date - The date of the tracked time.
   */
  constructor(title, duration, date) {
    this.title = title
    this.duration = duration
    this.date = date
  }
}