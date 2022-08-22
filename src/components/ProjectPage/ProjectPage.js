import { useState, useEffect } from "react";
import "./ProjectPage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactPlayer from "react-player";

const ProjectPage = ({ projectData, setActivePost }) => {
  console.log(projectData.video);
  return (
    <div className="project-page">
      <div className="arrow-back-icon" onClick={() => setActivePost([])}>
        <ArrowBackIcon />
      </div>
      <div className="header">
        <div className="header-left-panel header-panel">
          <h1>{projectData.name}</h1>
        </div>
        <div className="header-right-panel header-panel">
          <p>{projectData.summary}</p>
        </div>
      </div>
      <div className="vid-container">
        {projectData.video === "" ? (
          <div
            className="wallpaper-container"
            style={{
              backgroundImage: `url('${projectData.background}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        ) : (
          <video width="100%" height="100%" controls>
            <source src={projectData.video} type="video/webm" />
          </video>
        )}
      </div>
      <div className="body-container">
        <div className="description-container">
          <p>{projectData.description}</p>
        </div>
        <div className="link-container"></div>
      </div>
    </div>
  );
};

export default ProjectPage;
