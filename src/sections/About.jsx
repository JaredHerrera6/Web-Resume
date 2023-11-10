//This is the About Section
import React from "react";

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="about-top">
        <p className="about-header">ABOUT ME</p>
        <p className="about-preview">
          {" "}
          Here you will find more information about my current Skills, Education
          ,Technologies used, and what I do in terms of programming and Web
          Development
        </p>
      </div>
      <div className="about-main">
        <div className="about-text">
          <p className="about-text-header">Find out About me!</p>
          <div className="about-description">
            <p>
              I am a Full Stack Web Developer building Web Applications to bring
              help simplify various complex tasks and help solf existing issues.
              I invite you to check out some of my work that I have included in
              the Projects section of this Webpage.
            </p>
            <p>
              Apart From Learning different technologies from various web
              Sources, I also learned various technologies and concepts from
              obtaining a Bachelor of Science degree in Computer Science at
              Towson University Located in Towson, Maryland, USA. Here I Learned
              Various industry level practices and technologies.
            </p>
            <p>
              I am currently open to Job Opprtunites where I can make an impact,
              contribute, learn, and grow as a Web software Developer. Please
              Feel Free to Contact me in the Contact section of this webpage if
              my skills and experience meet the requirment of a job opening or
              opportunity. Thank You!
            </p>
          </div>
        </div>
        <div className="skills">
          <p className="skills-header">My Skills!</p>
          <div className="skills-text">
            <div className="skills-skill">JavaScript</div>
            <div className="skills-skill">React.Js</div>
            <div className="skills-skill">Express.Js</div>
            <div className="skills-skill">Node.Js</div>
            <div className="skills-skill">API/JSON</div>
            <div className="skills-skill">HTML5</div>
            <div className="skills-skill">CSS3</div>
            <div className="skills-skill">BootStrap4</div>
            <div className="skills-skill">GIT</div>
            <div className="skills-skill">SQL</div>
            <div className="skills-skill">PostgreSQL</div>
            <div className="skills-skill">MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
