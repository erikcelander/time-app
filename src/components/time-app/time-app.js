import '../timer-clock/timer-clock.js'
import '../time-form/time-form.js'
import '../time-list/time-list.js'



const template = document.createElement('template')
template.innerHTML = `
   <style>
    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
    }

    .box {

      width: 100vh;
      height: fit-content;
      background: #21295C;
      border-radius: 5%;
      color: white;
      display: flex;
      flex-direction: column;
    }

    .timer {
      flex-grow: 1;
      padding: 200px 0 200px 0;
    }

    .form {
      margin-left: 43vh;
      margin-top: 38vh;
      position: absolute;
    }

    .time-list {
      width: 100%;
      height: 100%;
      padding: 175px 0 175px 0;
    }

    .button-box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }

    .switch-btn {
      width: fit-content;
      height: 35px;
      font-size: 24px;
      text-align: center;
    }

    .hidden {
      display: none;
    }
    
  </style>

  <div class="container">
    <div class="box">
      <div class="button-box">
        <button class="switch-btn">View saved times</button>

      </div>

      <time-list class="time-list hidden"></time-list>
      <timer-clock class="timer"></timer-clock>
      <time-form class="form"></time-form>
    </div>
  </div>
`

customElements.define('time-app',

  class extends HTMLElement {
  
    #timerComponent
    #timerFormComponent
    #switchButton
    #timeListComponent


    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      

      this.#timerComponent = this.shadowRoot.querySelector('.timer')
      this.#timerFormComponent = this.shadowRoot.querySelector('.form')
      this.#switchButton = this.shadowRoot.querySelector('.switch-btn')
      this.#timeListComponent = this.shadowRoot.querySelector('.time-list')

      

      this.#timerComponent.addEventListener('saveBtnPressed', (e) => {
        this.#timerFormComponent.displayTimeForm(e.detail)
      })

      this.#timerComponent.addEventListener('resetBtnPressed', (e) => {
        this.#timerFormComponent.hideTimeForm()
      })

      this.#switchButton.addEventListener('click', (e) => {
        this.#timeListComponent.render()
        if (this.#timeListComponent.classList.contains('hidden')) {
          this.#switchButton.textContent = 'View timer'
          this.#timerComponent.classList.add('hidden')
          this.#timeListComponent.classList.remove('hidden')
          
        } else {
          this.#switchButton.textContent = 'View saved times'
          this.#timerComponent.classList.remove('hidden')
          this.#timeListComponent.classList.add('hidden')
        }
      })
    }
  }
)
