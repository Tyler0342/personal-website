import React from "react";
import photo from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={photo} alt="Tyler" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-me-header">About Me</h1>
          <p>
            Hello! I am Tyler. I am a recent Flatiron Bootcamp Grad. I'm a
            Full-Stack Software Engineer. Technologies I use are JavaScript,
            React.js, React Native, Ruby on Rails, and SQL. Before I can begin
            development, I require a project layout, so I know what you expect
            and we can stay on the same page. Before I create anything for you,
            we will discuss all the details of what you require.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
