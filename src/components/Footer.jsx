import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {


  const location = useLocation();

  const getFooterStyles = () => {
    if (location.pathname === "/") {
      return "horizontal";
    } else if (location.pathname === "/about") {
      return "vertical";
    } else if (location.pathname === "/project") {
      return "vertical";
    } else if (location.pathname === "/contact") {
      return "middle";
    } 
  };


  return (
    <footer  className={getFooterStyles()}>
    <div className="social-icons">
      <Link to="https://twitter.com/?lang=en" rel="noreferrer" target="_blank">
      <FaXTwitter  className="fab fa-github fa-2x"/>
      </Link>
      <Link to="https://www.facebook.com/" rel="noreferrer" target="_blank">
      <FaFacebookF  className="fab fa-github fa-2x"/>
      </Link>
      <Link to="https://www.instagram.com/reel/CzPmYBPIY3c/" rel="noreferrer" target="_blank">
      <FaInstagram  className="fab fa-github fa-2x"/>
      </Link>
      <Link to="https://github.com/" rel="noreferrer" target="_blank">
        <FaGithub  className="fab fa-github fa-2x" />
      </Link>
    </div>
    <div className="copyright">© Copyright 2023</div>
  </footer>
  )
}

export default Footer