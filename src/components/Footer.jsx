import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="horizontal">
    <div className="social-icons">
      <Link to="https://twitter.com/?lang=en">
      <FaXTwitter  className="fab fa-github fa-2x"/>
      </Link>
      <Link to="https://www.facebook.com/">
      <FaFacebookF  className="fab fa-github fa-2x"/>
      </Link>
      <Link to="https://www.instagram.com/reel/CzPmYBPIY3c/">
      <FaInstagram  className="fab fa-github fa-2x"/>
      </Link>
      <Link to="https://github.com/">
        <FaGithub  className="fab fa-github fa-2x" />
      </Link>
    </div>
    <div className="copyright">© Copyright 2023</div>
  </footer>
  )
}

export default Footer