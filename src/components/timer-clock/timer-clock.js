import { TimeTracker } from '../../model/time-tracker.js'

const template = document.createElement('template')
template.innerHTML = `
   <style>
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .box {
      width: 700px;
      height: 600px;
      border: 1px solid black;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .timer {
      font-size: 42px;
      font-weight: 500;
    }

    .btn-grp {
      display: grid;
      grid-template-columns: repeat(2, minmax(100px, 2fr));
      grid-template-rows: repeat(2, minmax(50px, 2fr));
      gap: 5px;
    }

    button {
      cursor: pointer;
    }
    
  </style>

  <div class="container">
    <div class="timer">
      0
    </div>
    <div class="btn-grp">
      <button class="time-btn start">start</button>
      <button class="time-btn stop" disabled="true">stop</button>
      <button class="time-btn reset" disabled="true">reset</button>
      <button class="time-btn save" disabled="true">save</button>
    </div>
  </div>
`

customElements.define('timer-clock',

  class extends HTMLElement {
  
    #timeTracker
    #currentTimeDiv
    #startButton
    #stopButton
    #resetButton
    #saveButton

    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#startButton = this.shadowRoot.querySelector('.start')
      this.#stopButton = this.shadowRoot.querySelector('.stop')
      this.#resetButton = this.shadowRoot.querySelector('.reset')
      this.#saveButton = this.shadowRoot.querySelector('.save')
      this.#currentTimeDiv = this.shadowRoot.querySelector('.timer')
      this.#timeTracker = new TimeTracker()

      this.#startButton.addEventListener('click', () => {
        this.#timeTracker.startTimer()
          setInterval(() => {
            const currentTime = this.#timeTracker.getCurrentTime()
            if (currentTime.minutes === 0) {
              this.#currentTimeDiv.textContent = `${currentTime.seconds}`
            } else if (currentTime.minutes > 0 && currentTime.hours < 1) {
              this.#currentTimeDiv.textContent = `${currentTime.minutes}m ${currentTime.seconds}s`
            } else if (currentTime.hours > 0) {
              this.#currentTimeDiv.textContent = `${currentTime.hours}h ${currentTime.minutes}m ${currentTime.seconds}s`
            }
          }, 100)
        
        this.#startButton.setAttribute('disabled', true)
        this.#stopButton.removeAttribute('disabled')
        this.#resetButton.removeAttribute('disabled')
        this.#saveButton.setAttribute('disabled', true)
      })

      this.#stopButton.addEventListener('click', () => {
        this.#timeTracker.stopTimer()
        this.#startButton.removeAttribute('disabled')
        this.#stopButton.setAttribute('disabled', true)
        this.#saveButton.removeAttribute('disabled')
      })

      this.#resetButton.addEventListener('click', () => {
        this.#timeTracker.resetTimer()
        this.#startButton.removeAttribute('disabled')
        this.#stopButton.setAttribute('disabled', true)
        this.#resetButton.setAttribute('disabled', true)
        this.#saveButton.setAttribute('disabled', true)
        this.dispatchEvent(new CustomEvent('resetBtnPressed'))

      })

  

      this.#saveButton.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('saveBtnPressed', {detail: this.#timeTracker.getCurrentTime()}))
      })



    }
  }
)
