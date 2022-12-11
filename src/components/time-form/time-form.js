import { TrackedTime } from '../../model/tracked-time.js'

const template = document.createElement('template')
template.innerHTML = `
   <style>
    .hidden {
      display: none;
    }
    
  </style>

  <div class="container hidden">
    <form >
      <div class="text"><p>Pick a title</p></div>
      <textarea rows="1" spellcheck="false"> </textarea>
      <input type="submit" value="Submit" class="submit">
    </form>
  </div>
`

customElements.define('time-form',

  class extends HTMLElement {

    #container
    #newTrackedTime
    #textarea
  
    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#container = this.shadowRoot.querySelector('.container')
      this.#textarea = this.shadowRoot.querySelector('textarea')
      this.#textarea.focus()

      this.shadowRoot.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()
        this.#submit()
      })

      this.#textarea.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
          this.#submit()
        }
      })

    }

    saveTrackedTime (time) {
      this.#container.classList.remove('hidden')

      this.#newTrackedTime = time
      console.log(this.#newTrackedTime)
    }

    #submit = () => {

      /*const cEvent = new CustomEvent('saveTime', {detail: this.#textarea.value})
      this.dispatchEvent(cEvent)*/ 

      /*this.#textarea.value
      this.dispatchEvent(new CustomEvent('formsubmit'))*/ 

      if (this.#textarea.value.length > 2) {

        const title = this.#textarea.value
        const date = new Date().toISOString().slice(0, 10)
        const savedTrackedTime = new TrackedTime(title, this.#newTrackedTime, date)
        this.dispatchEvent(new CustomEvent('savedTime', {detail: savedTrackedTime}))        
        
        /*let timeArray = window.localStorage.getItem('savedTrackedTimes')

        if(timeArray === null) {
          timeArray = []
          timeArray.push(this.#newTrackedTime)
          window.localStorage.setItem('savedTrackedTimes', JSON.stringify(timeArray))
        } else {
          timeArray = JSON.parse(timeArray)
          timeArray.push(this.#newTrackedTime)
          window.localStorage.removeItem('savedTreackedTimes')
          window.localStorage.setItem('savedTrackedTimes', JSON.stringify(timeArray))
        }

        console.log(timeArray)*/ 

      } else {
        alert('Your title needs to be 3 or more characters.')
      } 
    }


  }
)