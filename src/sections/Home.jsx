//This is the section that will take the user to the top of the page.
import React from "react";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-header">
        <div className="header-picture">
          <img src={require("../profilePic.jpg")} alt="Profile" />
        </div>
        <div classname="header-words">
          <h1 className="tech-developer">
            <div style={{ color: "white" }}>Hello,I'm Jared Herrera</div>
            React.js <div style={{ color: "white" }}>Web Developer</div>
          </h1>
          <p className="my-description">
            Web Developer from Maryland, USA who is passionate about Building
            Interactive Website to solve problems and bring ideas to life. Open
            to work and looking to make an impact in the Software Field
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
