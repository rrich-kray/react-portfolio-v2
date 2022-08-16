import React from "react";
import "./Nav.css";

const Nav = () => {
  const sections = ["About", "Projects"];
  return (
    <nav id="nav">
      <div id="logo-container">
        <img
          src={require("../../assets/images/logo.svg").default}
          alt="logo"
        ></img>
      </div>
      <div id="link-container">
        {sections.map((section) => (
          <a
            href={
              section === "Home"
                ? `#hero`
                : `#${section[0].toLowerCase() + section.slice(1)}`
            }
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
