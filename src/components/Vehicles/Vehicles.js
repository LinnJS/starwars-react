import React, { Component } from 'react'
import './Vehicles.css'

class Vehicles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
      .then(res => res.json())
      .then(({ results }) => {
        this.setState({ vehicles: results })
      })
  }

  render() {
    let vehicles = this.state.vehicles.map(vehicle => {
      return (
        <div className="col-sm-4">
          <div className="card">
            <h4 className="card-title">Vehicle: {vehicle.name}</h4>
            <h5 className="card-subtitle text-muted">Model: {vehicle.model}</h5>
            <ul className="list-group list-group-flush">
              <div className="specsContainer">
                <li className="list-group-item details">
                  <h5 className="card-subtitle">Specs</h5>
                </li>
                <li className="list-group-item details">Manufacturer: {vehicle.manufacturer}</li>
                <li className="list-group-item details">Class: {vehicle.vehicle_class}</li>
                <li className="list-group-item details">Passengers: {vehicle.passengers}</li>
                <li className="list-group-item details">Crew: {vehicle.crew}</li>
                <li className="list-group-item details">Length: {vehicle.length}</li>
                <li className="list-group-item details">Max Speed: {vehicle.max_atmosphering_speed}</li>
                <li className="list-group-item details">Cargo Capacity: {vehicle.cargo_capacity}</li>
              </div>
            </ul>
          </div>
        </div>
      )
    })
    return <div className="cardContainer">{vehicles}</div>
  }
}

export default Vehicles
