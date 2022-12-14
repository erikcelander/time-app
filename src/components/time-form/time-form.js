import { TrackedTime } from '../../model/tracked-time.js'

const template = document.createElement('template')
template.innerHTML = `
   <style>
    .hidden {
      display: none;
    }
    
    textarea {
      resize: none;
      width: 70%;
    }
    textarea:focus {
      outline: none;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }

    .input-div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    input {
      width: 25%;
      border-radius:5px;
      border: none;
      height: 22px;
      background: #3083DC;
      color: white;
    }

  </style>

  <div class="container hidden">
    <form >
      <div class="text"><p>Pick a title</p></div>
      <div class="input-div">
        <textarea rows="1" spellcheck="false"> </textarea>
        <input type="submit" value="Submit" class="submit">
      </div>
    </form>
  </div>
`

customElements.define('time-form',

  class extends HTMLElement {

    #container
    #newTrackedTime
    #textarea
    #savedTimes
  
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


      if (window.localStorage.getItem('savedTrackedTimes') === null) {
        this.#savedTimes = []
      } else {
        this.#savedTimes = JSON.parse(window.localStorage.getItem('savedTrackedTimes'))
      }
    }

    displayTimeForm (time) {
      this.#container.classList.remove('hidden')
      this.#newTrackedTime = time
    }

    hideTimeForm() {
      this.#container.classList.add('hidden')
    }

    #submit = () => {

      if (this.#textarea.value.length > 2) {

        const title = this.#textarea.value
        const date = new Date().toISOString().slice(0, 10)
        const trackedTime = new TrackedTime(title, this.#newTrackedTime, date)    

        this.#savedTimes.push(trackedTime)
        window.localStorage.setItem('savedTrackedTimes', JSON.stringify(this.#savedTimes))
        this.#container.classList.add('hidden')
        this.#textarea.value = ''

      } else {
        alert('Your title needs to be at least 3 characters.')
      } 
    }
  }
)