import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from  "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./scss/main.scss"


function App() {
  return (
    <BrowserRouter>

    {/* <Navbar/> */}
    <Routes>

<Route  path= "/"  element= {<Home/>} />
<Route  path= "/about"  element= {<About/>} />
<Route  path= "/project"  element= {<Project/>} />
<Route  path= "/contact"  element= {<Contact/>} />
<Route  path= "*"  element= {<NotFound/>} />
    </Routes>

    <Footer/>
    </BrowserRouter>
  );
}

export default App;
