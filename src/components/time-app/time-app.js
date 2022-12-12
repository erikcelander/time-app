import '../timer-clock/timer-clock.js'
import '../time-form/time-form.js'
import '../time-list/time-list.js'



const template = document.createElement('template')
template.innerHTML = `
   <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
    }

    .box {

      width: 100vh;
      height: 60vh;
      background: #21295C;
      border-radius: 5%;
      color: white;
      display: flex;
      flex-direction: column;
    }

    .timer {
      flex-grow: 1;
    }

    .form {
      margin-left: 43vh;
      margin-top: 38vh;
      position: absolute;
    }
    
  </style>

  <div class="container">
    <div class="box">
      <time-list></time-list>
    </div>
  </div>
`
/*
     <timer-clock class="timer"></timer-clock>
      <time-form class="form"></time-form>
*/
customElements.define('time-app',

  class extends HTMLElement {
  
    #timerComponent
    #timerFormComponent


    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

   

      this.#timerComponent = this.shadowRoot.querySelector('.timer')
      this.#timerFormComponent = this.shadowRoot.querySelector('.form')
      /*

      this.#timerComponent.addEventListener('saveBtnPressed', (e) => {
        this.#timerFormComponent.displayTimeForm(e.detail)
      })

      this.#timerComponent.addEventListener('resetBtnPressed', (e) => {
        this.#timerFormComponent.hideTimeForm()
      })
*/
      



    }
  }
)
