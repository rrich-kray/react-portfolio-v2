import { useState, useEffect } from "react";
import "./ProjectPage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProjectPage = ({ projectData, setActivePost }) => {
  return (
    <div className="project-page">
      <div className="arrowe-back-icon" onClick={() => setActivePost({})}>
        <ArrowBackIcon />
      </div>
      <div className="header">
        <div className="header-left-panel header-panel"></div>
        <div className="header-right-panel header-panel"></div>
      </div>
      <div className="vid-container">
        <video></video>
      </div>
      <div className="body-container">
        <div className="description-container"></div>
        <div className="link-container"></div>
      </div>
    </div>
  );
};

export default ProjectPage;
