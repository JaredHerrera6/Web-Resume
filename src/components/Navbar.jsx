//NavBar Component that will be used throught all pages of the Project
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaReact } from "react-icons/fa";
import { AiTwotoneProject, AiOutlineContacts } from "react-icons/ai";
import { FiInfo } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { GrContact } from "react-icons/gr";
function Navbar() {
  return (
    <div className="navbar">
      {/*Links on navbar to each section of the web page*/}
      <Link className="navbar-link" to="#home" smooth>
        <FaReact className="navbar-icon" />
        Jared Herrera
      </Link>
      <Link className="navbar-link" to="#projects" smooth>
        <AiTwotoneProject className="navbar-icon" />
        Projects
      </Link>
      <Link className="navbar-link" to="#about" smooth>
        <FiInfo className="navbar-icon" />
        About
      </Link>
      <Link className="navbar-link" to="#socials" smooth>
        <SlSocialLinkedin className="navbar-icon" />
        Socials
      </Link>
      <Link className="navbar-link" to="#contact" smooth>
        <AiOutlineContacts className="navbar-icon" />
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
