import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="horizontal">
    <div className="social-icons">
      <a href="#">
      <FaXTwitter  className="fab fa-github fa-2x"/>
      </a>
      <a href="#">
      <FaFacebookF  className="fab fa-github fa-2x"/>
      </a>
      <a href="#">
      <FaInstagram  className="fab fa-github fa-2x"/>
      </a>
      <a href="#">
        <FaGithub  className="fab fa-github fa-2x" />
      </a>
    </div>
    <div className="copyright">© Copyright 2023</div>
  </footer>
  )
}

export default Footer