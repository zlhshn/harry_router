import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./scss/main.scss";

function App() {
  const location = useLocation();

  const getpageStyle = () => {
    if (location.pathname === "/") {
      return "home-bgImg-container";
    } else if (location.pathname === "/about") {
      return "about-bgImg-container";
    } else if (location.pathname === "/project") {
      return "project-bgImg-container";
    } else if (location.pathname === "/contact") {
      return "contact-bgImg-container";
    }
  };

  return (
    
      <div className={getpageStyle()}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
 
  );
}

export default App;
