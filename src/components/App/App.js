import React, {Component} from 'react'
import './App.css'

  // PROPS AND STATE
  // Set props and state below.
  // Set state for vehicles (empty array), value (empty string), pilot (empty) string.
  class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)

  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once data fetched, set the state of vehicles to the fetched data.
  // In response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // Will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
  })
  return (
    <div className="App">
      {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Form will also need a header in which you will pass the state of the form upon submit.
         */}
    </div>
  )
}
}

export default App;
