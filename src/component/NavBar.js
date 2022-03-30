import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
    <nav>
    <h2> logo</h2>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/contact">Contact</Link></li>
      </ul>
</nav>
 </div>
  )
}

export default NavBar