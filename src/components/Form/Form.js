import React, { Component, protoTypes } from "react";
import "./Form.css";

import rebel from "../assets/rebel.png";
import empire from "../assets/empire.png";
import force from "../assets/force.png";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="jumbotron icon">
        <img src={rebel} alt="Rebel Icon" />
        <h2>May the Force be with you</h2>
        <img src={empire} alt="Rebel Icon" />
      </div>
    );
  }
}

export default Form;
