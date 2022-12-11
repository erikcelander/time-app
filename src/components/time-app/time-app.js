import '../timer-clock/timer-clock.js'
import '../time-form/time-form.js'



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
      width: 700px;
      height: 600px;
      border: 1px solid black;
    }
    
  </style>

  <div class="container">
    <div class="box">
      <timer-clock class="timer"></timer-clock>
      <time-form class="form"></time-form>
    </div>
  </div>
`

customElements.define('time-app',

  class extends HTMLElement {
  
    #timerComponent
    #timerFormComponent


    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

   

      this.#timerComponent = this.shadowRoot.querySelector('.timer')
      this.#timerFormComponent = this.shadowRoot.querySelector('.form')

      this.#timerComponent.addEventListener('saveBtnPressed', (e) => {
        this.#timerFormComponent.saveTrackedTime(e.detail)
      })

      this.#timerFormComponent.addEventListener('savedTime', (e) => {
        const newTrackedTime = e.detail
        console.log(newTrackedTime)
      })



      



    }

    
  }
)
