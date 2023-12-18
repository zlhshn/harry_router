import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Project = () => {
const navigate = useNavigate()

  return (
    <>
    <div className="project-bgImg-container">
      {/* <!-- PROJECT NAV --> */}
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link nav__link--active">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About Me
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/project" className="nav__link">
              My Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div class="projects__bio-image">
        <h1>My Projects</h1>
      </div>
      </div>

      {/* <!-- PROJECT MAIN --> */}
      <main className="projects">
        <div className="projects__items">
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-1.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-2.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-3.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-4.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-5.jpg" alt="My Project" />
          </div>
          <div className="projects__item" onClick={()=>navigate()}>
            <img src="./img/project-6.jpg" alt="My Project" />
          </div>
        </div>
      </main>

      {/* <!-- PROJECT FOOTER --> */}
      {/* <footer class="vertical">
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
    </>
  );
};

export default Project;
