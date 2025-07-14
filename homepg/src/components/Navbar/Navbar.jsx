import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Our Events</li>
        <li>Gallery</li>
        <li>About Us</li>
        <button>Join Us</button>
      </ul>
    </nav>
  )
}

export default Navbar