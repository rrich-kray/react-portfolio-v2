import { useState, useEffect } from "react";
import "./ProjectPage.css";

const ProjectPage = ({ projectData }) => {
  return (
    <div className="project-page">
      <div className="header"></div>
      <div className="vid-container">
        <video></video>
      </div>
      <div className="body-container"></div>
    </div>
  );
};

export default ProjectPage;
