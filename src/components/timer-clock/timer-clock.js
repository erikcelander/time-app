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
    }

    .timer {
      font-size: 36px;
      font-weight: 500;
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
      <button class="time-btn save">save</button>
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
            this.#currentTimeDiv.textContent = `${this.#timeTracker.getCurrentTime().seconds}`
          }, 1000)
        
        this.#startButton.setAttribute('disabled', true)
        this.#stopButton.removeAttribute('disabled')
        this.#resetButton.removeAttribute('disabled')

      })

      this.#stopButton.addEventListener('click', () => {
        this.#timeTracker.stopTimer()
        this.#startButton.removeAttribute('disabled')
        this.#stopButton.setAttribute('disabled', true)
      })

      this.#resetButton.addEventListener('click', () => {
        this.#timeTracker.resetTimer()
        this.#startButton.removeAttribute('disabled')
        this.#stopButton.setAttribute('disabled', true)
        this.#resetButton.setAttribute('disabled', true)
      })

      
      /*this.#saveButton.addEventListener('click', () => {
        const currentTime = this.#timer.lap()

        console.log(currentTime.seconds)
        localStorage.setItem('time', currentTime.seconds)
      })*/

      this.#saveButton.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('saveBtnPressed', {detail: this.#timeTracker.getCurrentTime()}))
      })



    }
  }
)
