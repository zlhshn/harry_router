import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home-bgImg-container">
    {/* <!-- HOME NAV --> */}
{/* 
    <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/" className="nav__link nav__link--active" >
        Home
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/about" className="nav__link" >
        About Me
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/project" className="nav__link" >
        My Projects
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/contact" className="nav__link" >
        Contact
        </Link>
      </li>
    </ul>
  </nav> */}

    {/* <!-- HOME MAIN --> */}
    <main className="home">
  <h2>Hi! My Name Is</h2>
  <h1 className="home__name">
    Wednesday <span className="home__name--last">Addams</span>
  </h1>
  <h2>Full Stack Web Developer</h2>
</main>

    {/* <!-- HOME FOOTER --> */}
    {/* <footer class="horizontal">
      <div class="social-icons">
        <a href="#">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>
      <div class="copyright">&copy; Copyright 2023</div>
    </footer> */}

  </div>
  )
}

export default Home