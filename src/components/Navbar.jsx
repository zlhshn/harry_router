import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink to="/" className="nav__link " >
        Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/about" className="nav__link" >
        About
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/project" className="nav__link" >
        Film Series
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/contact" className="nav__link" >
        Contact
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar