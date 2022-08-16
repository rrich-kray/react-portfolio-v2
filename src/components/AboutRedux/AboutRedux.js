import { useState, useEffect } from "react";
import "./AboutRedux.css";

const AboutRedux = () => {
  const skills = [
    { skill: "React", logo: "https://www.svgrepo.com/show/354259/react.svg" },
    { skill: "HTML5", logo: "https://www.svgrepo.com/show/61215/html5.svg" },
    {
      skill: "CSS3",
      logo: "https://www.svgrepo.com/show/303263/css3-logo.svg",
    },
    {
      skill: "JavaScript",
      logo: "https://www.svgrepo.com/show/353925/javascript.svg",
    },
    {
      skill: "GraphQL",
      logo: "https://www.svgrepo.com/show/353834/graphql.svg",
    },
    {
      skill: "Sequelize",
      logo: "https://www.svgrepo.com/show/354333/sequelize.svg",
    },
    {
      skill: "SQL",
      logo: "https://www.svgrepo.com/show/255832/sql.svg",
    },
    {
      skill: "MySQL",
      logo: "https://www.svgrepo.com/show/354099/mysql.svg",
    },
    {
      skill: "MongoDB",
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    // {
    //   skill: "Mongoose",
    //   logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    // },
    // {
    //   skill: "Node",
    //   logo: "https://www.svgrepo.com/show/355140/node.svg",
    // },
    {
      skill: "JQuery",
      logo: "https://www.svgrepo.com/show/303392/jquery-1-logo.svg",
    },
  ];

  return (
    <div className="about-redux">
      <div className="about-redux-left-panel">
        <h1>About</h1>
      </div>
      <div className="about-redux-right-panel">
        <div className="bio-container text-container">
          <h1 style={{ color: "White" }}>Bio</h1>
          <p style={{ color: "white" }}>
            My name is Ryan, and I am a recent graduate of the Case Western
            Reserve Full Stack Web Development Bootcamp. My career began in
            equity research, where I produced research for institutional
            investor clients. Here, I frequently used Python to build and
            organize large proprietary datasets that often served as the bedrock
            for differentiated, revenue-generating research. More importantly,
            it helped me realize my passion for software development and
            motivated my departure from the industry nearly a year ago. Since
            then, I have built dozens of projects leveraging technologies across
            the entire MERN stack, and I am driven forward by the prospect of
            developing unique solutions to unique problems.
          </p>
        </div>
        <div
          className="skills-container text-container"
          style={{ marginTop: "50px" }}
        >
          <h1>Skills</h1>
          <div className="skills-container">
            {skills.map((skill) => (
              <img src={skill.logo} />
            ))}
          </div>
        </div>
        <div
          className="linkedIn-container text-container"
          style={{ marginTop: "50px" }}
        >
          <h1>LinkedIn:</h1>
          <span>https://www.linkedin.com/in/ryankray/</span>
        </div>
        <div
          className="email-container text-container"
          style={{ marginTop: "50px" }}
        >
          <h1>Email</h1>
          <span>rrich.kray.93@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default AboutRedux;
