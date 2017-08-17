import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    this.setState({ name: this.state.name })
  }

  fetchVehicles() {
    fetch('https://swapi.co/api/vehicles/?format=json')
      .then(res => {
        return res.json()
      })
      .then(vehicles => {
        this.setState({ vehicles })
      })
  }

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    return (
      <div className="App container">
        <Header />
        {/*
            The App component needs the following:
             jumbotron section, form section, vehicle cards section.
             Form will  also need a header in which you will pass the state of the form upon submit.
             */}
      </div>
    )
  }
}

export default App
