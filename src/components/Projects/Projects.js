import React, { useEffect, useState } from "react";
import "./Projects.css";
import data from "./data";
import Tile from "../Tile/Tile";

const Projects = () => {
  const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const onScroll = (e) => {
  //     setOffset(e.deltaY);
  //   };

  //   window.addEventListener("wheel", onScroll);
  // });

  return (
    <div id="projects">
      <div id="projects-container-left">
        <h1>Projects</h1>
      </div>
      <div id="projects-container-right">
        {data.map((project) => (
          <Tile
            name={project.name}
            description={project.description}
            background={project.backgroundImage}
            gh={project.ghRepository}
            deploy={project.deploymentLink}
          />
        ))}
      </div>
    </div>
  );
};

// 090258

export default Projects;
