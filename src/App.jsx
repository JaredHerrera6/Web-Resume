import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import NotFound from "./sections/NotFound";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Socials from "./sections/Socials";
import { HashLink as Link } from "react-router-hash-link";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        {/*Navbar Container*/}
        <div className="navbar-container">
          {/*This is where we will enter our NaBar component*/}
          <Navbar />
        </div>
        {/*Main pages and body of the WebSite*/}
        <main>
          <div className="sections">
            <Home />
            <About />
            <Projects />
            <Socials />
            <Contact />
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
