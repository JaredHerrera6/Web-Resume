//This is the Socials Section
import React from "react";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
const Socials = () => {
  return (
    <div className="socials-wrapper" id="socials">
      <div className="socials-top">
        <p className="socials-header">SOCIALS</p>
        <p className="socials-preview">
          Here you will find all of the links to my current and relavant social
          profiles
        </p>
      </div>
      <div className="socials-main">
        <p className="social">
          <a
            href="https://github.com/JaredHerrera6?tab=repositories"
            className="social"
          >
            <AiFillGithub className="socials-icon" />
            Github
          </a>
        </p>
        <p className="social">
          <a href="https://www.linkedin.com/in/jaredherrera6/">
            <AiOutlineLinkedin className="socials-icon" />
            LinkedIn
          </a>
        </p>
        <p className="social">
          <a href="mailto:herrerajared13@gmail.com">
            <AiOutlineMail className="socials-icon" />
            Email
          </a>
        </p>
      </div>
    </div>
  );
};

export default Socials;
