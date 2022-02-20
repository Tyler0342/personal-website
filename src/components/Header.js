import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <canvas></canvas>
        <h1>My Services</h1>
        <Typed
          className="typed-text"
          strings={[
            "Custom Web Design",
            "JavaScript",
            "React.js",
            "React Native",
            "Ruby on Rails",
            "SQL",
            "SQLite",
            "PostGreSQL",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
