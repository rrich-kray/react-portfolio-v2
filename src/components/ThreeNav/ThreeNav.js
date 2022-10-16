import React, { useState, useEffect } from "react";
import "./ThreeNav.css";

function ThreeNav({ changeActivePage }) {
  return (
    <div className="three-nav">
      <div className="three-nav-links">
        <button
          className="three-nav-button"
          onClick={() => changeActivePage("home")}
        >
          Home
        </button>
        <button
          className="three-nav-button"
          onClick={() => changeActivePage("projects")}
        >
          Projects
        </button>
        <button
          className="three-nav-button"
          onClick={() => changeActivePage("about")}
        >
          About
        </button>
      </div>
    </div>
  );
}

export default ThreeNav;
