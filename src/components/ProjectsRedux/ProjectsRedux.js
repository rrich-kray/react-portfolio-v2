import React, { useEffect, useState } from "react";
import "./ProjectsRedux.css";
import projectData from "../Projects/data";
import iconMappings from "../Projects/iconsMappings.js";

const ProjectTile = ({ project }) => {
  return (
    <div
      className="project-tile"
      style={{
        backgroundImage: `url('${project.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

const ProjectInfo = ({ project, index }) => {
  return (
    <div className="project-info">
      <span className="row-number">{index}</span>
      <h1 style={{ color: "white", marginLeft: "30px" }}>{project.name}</h1>
      <p style={{ color: "white", marginLeft: "30px" }}>{project.summary}</p>
    </div>
  );
};

const ProjectsRedux = () => {
  return (
    <div className="projects-redux">
      <div className="projects-page-header">
        <h1>Projects</h1>
      </div>
      {projectData.map((project, i) => (
        <div className="project-row">
          <div className="project-row-left project-row-panel">
            {i % 2 === 0 ? (
              <ProjectTile project={project} />
            ) : (
              <ProjectInfo project={project} index={i} />
            )}
          </div>
          <div className="project-row-right project-row-panel">
            {i % 2 === 0 ? (
              <ProjectInfo project={project} index={i} />
            ) : (
              <ProjectTile project={project} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsRedux;
