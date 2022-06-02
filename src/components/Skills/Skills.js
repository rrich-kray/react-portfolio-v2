import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { skill: "React", logo: "https://www.svgrepo.com/show/354259/react.svg" },
    { skill: "HTML5", logo: "https://www.svgrepo.com/show/349402/html5.svg" },
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
    <div id="skills">
      <div id="skills-inner-container">
        {skills.map((skill) => (
          <div
            id="skill"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <span>{skill.name}</span>
            <img
              src={skill.logo}
              alt="skill-logo"
              style={{ maxHeight: "100%" }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
