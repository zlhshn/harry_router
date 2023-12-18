import React from "react";
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
      <div className="contact-bgImg-container">
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
  </nav>

        {/* <!-- CONTACT MAIN --> */}
        <main className="contact">
  <h2>Contact Me ...</h2>
  <div className="contact__list">
    <div className="contact__item">
      <i className="fas fa-envelope" /> Email
      <div className="text-secondary">wednesday@nevermoreacademy.edu</div>
    </div>
    <div className="contact__item">
      <i className="fas fa-mobile-alt" /> Phone
      <div className="text-secondary">+40 (571) 360-1234</div>
    </div>
    <div className="contact__item">
      <i className="fas fa-map-marker-alt" /> Address
      <div className="text-secondary">
        Strada Zamorei 1, Bușteni 105500, Romania
      </div>
    </div>
  </div>
</main>

        {/* <!-- CONTACT FOOTER --> */}
        {/* <footer class="middle">
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
    </>
  );
};

export default Contact;
