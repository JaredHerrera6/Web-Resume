//This is the Footer Component used throughout all pages of the Project
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  AiTwotoneHome,
  AiTwotoneProject,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import { FcAbout, FcDocument } from "react-icons/fc";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footContainer">
        <div className="info-row">
          <div className="col">
            <ul className="list-unstyled">
              <li className="footer-header">UseFul Links</li>
              <li>
                <Link to="#home" className="footer-link" smooth>
                  <AiTwotoneHome className="footer-icon" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="#projects" className="footer-link" smooth>
                  <AiTwotoneProject className="footer-icon" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#about" className="footer-link" smooth>
                  <FcAbout className="footer-icon" />
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li className="footer-header">Socials</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jaredherrera6/"
                  className="footer-link"
                >
                  <AiOutlineLinkedin className="footer-icon" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:herrerajared13@gmail.com"
                  className="footer-link"
                >
                  <AiOutlineMail className="footer-icon" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JaredHerrera6?tab=repositories"
                  className="footer-link"
                >
                  <AiFillGithub className="footer-icon" />
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li className="footer-header">Info</li>
              <li>
                <Link className="footer-link">
                  <FcDocument className="footer-icon" />
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()}&nbsp; Jared Herrera | All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
