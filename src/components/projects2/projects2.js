import React, { useState, useEffect } from "react";
import projects from "../Projects/data";
import styles from "./styles.module.scss";

function Projects2(props) {
  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <div
          className={styles.project}
          style={{
            backgroundImage: project.backgroundImage,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      ))}
    </div>
  );
}

export default Projects2;
