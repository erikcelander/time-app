import '../timer-clock/timer-clock.js'
import '../time-form/time-form.js'
import '../time-list/time-list.js'

/**
 * The HTML template for the main component of the app.
 */
const template = document.createElement('template')
template.innerHTML = `
   <style>
    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 60px;
    }

    .box {

      width: 100vh;
      height: fit-content;
      background: #21295C;
      border-radius: 25px;
      color: white;
      display: flex;
      flex-direction: column;
    }

    .timer {
      flex-grow: 1;
      padding: 75px 0 130px 0;
    }

    .form {
      margin-left: 43vh;
      margin-top: 36vh;
      position: absolute;
    }

    .time-list {
      width: 100%;
      height: 100%;
      padding: 75px 0 130px 0;
    }

    .button-box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }

    .switch-btn {
      width: 195px;
      height: 35px;
      font-size: 24px;
      text-align: center;
    }

    .hidden {
      display: none;
    }

    button {
      cursor: pointer;
    }
    
  </style>

  <div class="container">
    <div class="box">
      <div class="button-box">
        <button class="switch-btn">View times</button>

      </div>

      <time-list class="time-list hidden"></time-list>
      <timer-clock class="timer"></timer-clock>
      <time-form class="form"></time-form>
    </div>
  </div>
`
/**
 * The main component of the app.
 */
customElements.define('time-app',
  class extends HTMLElement {
  
    #timerComponent
    #timerFormComponent
    #switchButton
    #timeListComponent


    /**
     * Creates an instance of the main component of the app.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))


      this.#timerComponent = this.shadowRoot.querySelector('.timer')
      this.#timerFormComponent = this.shadowRoot.querySelector('.form')
      this.#switchButton = this.shadowRoot.querySelector('.switch-btn')
      this.#timeListComponent = this.shadowRoot.querySelector('.time-list')

      this.#timerComponent.addEventListener('saveBtnPressed', (e) => {
        const time = e.detail
        this.#timerFormComponent.displayTimeForm(time)
      })

      this.#timerComponent.addEventListener('resetBtnPressed', () => {
        this.#timerFormComponent.hideTimeForm()
      })

      this.#switchButton.addEventListener('click', () => {
        if (this.#timeListComponent.classList.contains('hidden')) {
          this.displayTimeList()
        } else {
          this.displayTimer()
        }
      })

      this.#timeListComponent.addEventListener('cleared', () => {
        this.#timerFormComponent.clearSavedTimesArray()
      })
    }

    /**
     * Displays the time list and hides the timer component.
     */
    displayTimeList() {
      this.#timeListComponent.render()
      this.#switchButton.textContent = 'View timer'
      this.#timerComponent.classList.add('hidden')
      this.#timeListComponent.classList.remove('hidden')
      this.#timerFormComponent.hideTimeForm()
    }

    /**
     * Displays the timer and hides the time list component.
     */
    displayTimer()  {
      this.#switchButton.textContent = 'View times'
      this.#timerComponent.classList.remove('hidden')
      this.#timeListComponent.classList.add('hidden')
    }
  }
)
