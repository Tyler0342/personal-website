import React from "react";
import photo from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={photo} alt="Tyler" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-me-header">About Me</h1>
          <p>
            Hello! I'm Tyler. I'm a Full-Stack Software Engineer who has a
            passion for learning. I love to solve problems and come up with
            creative solutions. Technologies I use are JavaScript, React.js, Next.js,
            Ruby on Rails, SQL, Tailwind, Material-UI, Redux, and Solidity. 
            My hobbies include playing the guitar and drums, hiking, and snowboarding. 
            Other interests include blockchain technologies and cooking. Before I can 
            begin development for your request, I require a project layout, so we both know what
            is expected. We will discuss all the details of what you require so
            that you can have the website that you envision and deserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
