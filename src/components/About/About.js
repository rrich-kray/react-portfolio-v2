import React from "react";
import "./About.css";

const About = () => {
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
    <div id="about">
      <div id="skills-bar">
        {skills.map((skill) => (
          <div
            id="skill"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "200px",
            }}
          >
            {/* <span>{skill.name}</span> */}
            <img
              src={skill.logo}
              alt="skill-logo"
              style={{ maxHeight: "100%" }}
            ></img>
          </div>
        ))}
      </div>
      <div id="interior-container">
        <div id="about-container-left">
          <img src={require("../../assets/images/selfie.jpg")} alt="selfie" />
        </div>
        <div id="about-container-right">
          <div id="about-me-info-container">
            <h1 style={{ color: "White" }}>About Me</h1>
            <p style={{ color: "white" }}>
              My name is Ryan, and I am a recent graduate of the Case Western
              Reserve Full Stack Web Development Bootcamp. My career began in
              equity research, where I produced research for institutional
              investor clients. Here, I frequently used Python to build and
              organize large proprietary datasets that often served as the
              bedrock for differentiated, revenue-generating research. More
              importantly, it helped me realize my passion for software
              development and motivated my departure from the industry nearly a
              year ago. Since then, I have built dozens of projects leveraging
              technologies across the entire MERN stack, and I am driven forward
              by the prospect of developing unique solutions to unique problems.
            </p>
            <div id="gh-linkedin-container">
              <a href="https://github.com/rrich-kray/" alt="github-link">
                <img
                  src={require("./gh.svg").default}
                  alt="gh-icon"
                  style={{ height: "75px", padding: "10px;" }}
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/ryankray/"
                alt="linkedIn-link"
              >
                <img
                  src={require("./linkedin.svg").default}
                  alt="linkedIn-icon"
                  style={{ height: "75px", padding: "10px" }}
                ></img>
              </a>
              <a
                href="https://docs.google.com/document/d/1gzlYNrQPsWXRgWO9sgm8WkaF6DgDphDc/edit?usp=sharing&ouid=108149335393344460606&rtpof=true&sd=true"
                alt="linkedIn-link"
              >
                <img
                  src="https://www.svgrepo.com/show/262734/curriculum-vitae-resume.svg"
                  alt="resume-icon"
                  style={{ height: "75px", padding: "10px" }}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
