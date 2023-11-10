//This is the Projects Section
import React from "react";

const Projects = () => {
  return (
    <div className="projects-wrapper" id="projects">
      <div className="projects-top">
        <p className="projects-header">PROJECTS</p>
        <p className="projects-preview">
          Here you will find some of my personal projects that I have created to
          learn new technologies and also projects that I have created for
          clients
        </p>
      </div>
      <div className="projects-main">
        <div className="project">
          <div className="project-pic">
            <img src={require("../JPMPicture.png")} alt="JPM" />
          </div>
          <div className="project-description">
            <p className="project-header">Javis Property Maintenance </p>
            <p>
              I Created A webpage for a constructuion company in order for them
              to promote their business Online. This multiple page website
              describes the various services that this company has to offer to
              their clients both in text asnd with the help of visual images.
              This website also allows potential customers to contact the
              company for any questions or concerns.
            </p>
            <a href="https://www.javispm.org/">
              <button className="website-button">Visit</button>
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project-pic">
            <img src={require("../CTPick.png")} alt="JPM" />
          </div>
          <div className="project-description">
            <p className="project-header">Concrete Trucking </p>
            <p>
              I Created a webpage to simulate the management of a concrete
              Trucking company. This Website consists of managing the managers,
              drivers, customers, and the concrete orders. This wensite allows
              the manager to view all information aswell as assign drivers to
              the different orders. Drivers are allowed to change the order
              status of their assigned orders. Customers are able to create a
              new account and submit any new Orders aswell as view the details
              of their existing orders. This website was created using the pern
              stack (Postgres, Express.js, React.js, Node.js) and is hosted on
              Kinsta web hosting services.
            </p>
            <a href="https://trucking-deployed-client-46wd3.kinsta.app/">
              <button className="website-button">Visit</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
