/**
 * The HTML template for the time-list component.
 */
const template = document.createElement('template')
template.innerHTML = `
   <style>
 
    .box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

    }

    table {
      width: 75%;
    }

    thead {
      background-color: #333;
    }


    thead th {
      color: #f1f1f1;
    }

    td {
      background-color: #f1f1f1;
    }

    td, th {
      color: #333;
      text-align: center;
      border: 1px solid #333;
      padding: 10px;
    }

    .span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .clear-btn {
      width: 75%;
      height: 50px;
      background-color: #333;
      color: #f1f1f1;
      border: none;
      border-radius: 10px;
      font-size: 24px;
      margin-top: 20px;
      cursor: pointer;
    }

    .clear-btn:hover {
      background-color: #f1f1f1;
      color: #333;
      
    }

    .hidden {
      display: none;
    }

  </style>

<span class="span">
  <div class="box">
    <div class="no-times hidden">
      No saved times
    </div>
    <table class="table">
      <thead>
        <th>Title</th>
        <th>Time</th>
        <th>Date</th>
      </thead>


    </table>
  </div>
  <button class="clear-btn">Clear</button>
</span>
`
/**
 * The time-list component.
 */
customElements.define('time-list',
  class extends HTMLElement {
  
    #table
    #times
    #thead
    #clear
    #noTimes

    /**
     * Creates an instance of the time-list component.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

   
      this.#times = []
      this.#table = this.shadowRoot.querySelector('.table')
      this.#thead = this.shadowRoot.querySelector('thead')
      this.#clear = this.shadowRoot.querySelector('.clear-btn')
      this.#noTimes = this.shadowRoot.querySelector('.no-times')

      this.#clear.addEventListener('click', () => {
        window.localStorage.removeItem('savedTrackedTimes')

        this.render()
      })
      
      this.render()
    }

    /**
     * Renders the time-list component with the currently available data.
     */
    render () {

      while (this.#thead.nextElementSibling) {
        this.#thead.nextElementSibling.remove()
      }

      this.#times = JSON.parse(window.localStorage.getItem('savedTrackedTimes'))
  
      if (this.#times !== null) {
        this.#table.classList.remove('hidden')
        this.#clear.classList.remove('hidden')
        this.#noTimes.classList.add('hidden')

        this.#times.forEach(time => {
          const cells = this.createTableCellsWithData(time)
          const timeRow = this.createTimeRow(cells)
          this.#table.appendChild(timeRow)
        })

      } else {
        this.#table.classList.add('hidden')
        this.#clear.classList.add('hidden')
        this.#noTimes.classList.remove('hidden')
      }
    }

    /**
     * Creates an array of table cells for a given time.
     * 
     * @param {Object} time - The time to create cells for.
     * @returns - An array of table cells.
     */
    createTableCellsWithData (time) {
      const titleCell = document.createElement('td')
      titleCell.textContent = time.title
      
      const durationCell = document.createElement('td')
      if (time.duration.minutes === 0) {
        durationCell.textContent = `${time.duration.seconds}s`
      } else if (time.duration.hours === 0 && time.duration.minutes !== 0) {
        durationCell.textContent = `${time.duration.minutes}m ${time.duration.seconds}s`
      } else {
        durationCell.textContent = `${time.duration.hours}h ${time.duration.minutes}m ${time.duration.seconds}s`
      }

      const dateCell = document.createElement('td')
      dateCell.textContent = time.date

      return [titleCell, durationCell, dateCell]
    }


    /**
     * Creates a row with the given cells.
     * 
     * @param {Array.<HTMLTableCellElement>} cells - The cells to add to the row.
     * @returns - The created row with the added data cells.
     */
    createTimeRow(cells) {
      const timeRow = document.createElement('tr')

      cells.forEach(cell => {
        timeRow.appendChild(cell)
      })
  
      return timeRow
    }
  }
)
