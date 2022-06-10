import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <div id="hero-container-left">
        <div>
          <h1 style={{ color: "white" }}>Let's Build Something Great</h1>
          <p style={{ color: "white" }}>I make cool things</p>
          <button>
            <a href="#about">Learn More</a>
          </button>
        </div>
      </div>
      <div id="hero-container-right">
        <div className="loader">
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 9 }}></span>
          <span style={{ "--i": 8 }}></span>
          <span style={{ "--i": 7 }}></span>
          <span style={{ "--i": 6 }}></span>
          <span style={{ "--i": 5 }}></span>
          <span style={{ "--i": 4 }}></span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 1 }}></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
