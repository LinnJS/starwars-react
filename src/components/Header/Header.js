import React, {Component} from 'react'
import './Header.css'
import logo from '../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <img src={logo} alt="Star Wars"/>
        <h2>Vehicle Encyclopedia</h2>
      </div>
    )
  }
}

export default Header
