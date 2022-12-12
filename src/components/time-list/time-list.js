const template = document.createElement('template')
template.innerHTML = `
   <style>
    .container {

    }

    .box {


    }

    /* Set the width of the table */
table {
  width: 75%;
}

/* Set the background color of the table header */
thead {
  background-color: #333;
}

/* Set the text color of the table header */
thead th {
  color: #f1f1f1;
}

/* Set the background color of the table cells */
td {
  background-color: #f1f1f1;
}

td, th {
  color: #333;
  text-align: center;
  border: 1px solid #333;
  padding: 10px;
}




    
  </style>

  <div class="container">
    <div class="box">
      <table class="table">
        <thead>
          <th>Title</th>
          <th>Time</th>
          <th>Date</th>
        </thead>


      </table>

    </div>
  </div>
`

customElements.define('time-list',

  class extends HTMLElement {
  
    #table
    #times
   

    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

   
      this.#times = JSON.parse(window.localStorage.getItem('savedTrackedTimes'))
      this.#table = this.shadowRoot.querySelector('.table')
      
      this.#render()


    }

    #render () {

   

      if (this.#times !== null) {
        /*this.#times.forEach(time => {
          const timeContainer = document.createElement('div')

          const timeElement = document.createElement('div')
          timeContainer.appendChild(timeElement)
          if (time.duration.minutes === 0) {
            timeElement.textContent = `Title: ${time.title}, time: ${time.duration.seconds}s, date: ${time.date}`
          } else if (time.duration.hours === 0 && time.duration.minutes !== 0) {
            timeElement.textContent = `Title: ${time.title}, time: ${time.duration.minutes}m ${time.duration.seconds}s, date: ${time.date}`
          } else {
            timeElement.textContent = `Title: ${time.title}, time: ${time.duration.hours}h ${time.duration.minutes}m ${time.duration.seconds}s, date: ${time.date}`
          }
          this.#timesList.appendChild(timeContainer)
        })*/
        this.#times.forEach(time => {
          // Create a table row element
          const timeRow = document.createElement('tr')
        
          // Create a table cell element for the title
          const titleCell = document.createElement('td')
          titleCell.textContent = time.title
        
          // Create a table cell element for the duration
          const durationCell = document.createElement('td')
          if (time.duration.minutes === 0) {
            durationCell.textContent = `${time.duration.seconds}s`
          } else if (time.duration.hours === 0 && time.duration.minutes !== 0) {
            durationCell.textContent = `${time.duration.minutes}m ${time.duration.seconds}s`
          } else {
            durationCell.textContent = `${time.duration.hours}h ${time.duration.minutes}m ${time.duration.seconds}s`
          }
        
          // Create a table cell element for the date
          const dateCell = document.createElement('td')
          dateCell.textContent = time.date
        
          // Append the table cells to the table row
          timeRow.appendChild(titleCell)
          timeRow.appendChild(durationCell)
          timeRow.appendChild(dateCell)
        
          // Append the table row to the table body
          this.#table.appendChild(timeRow)
        })
      }
    }
  }
)
