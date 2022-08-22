import { useState, useEffect, useRef } from "react";
import "./Splash.css";

const Splash = () => {
  const text = useRef();
  // Simple page returning a text animation
  // Three parts: background (z-index: 0), Text (z-index: 1), cover (z-index: 2).
  // Text shifts vertically into view, out from behind covering, then shifts back.
  // Then rest of app renders

  const textAnimation = () => {
    let start = Date.now();
    let topVal = text.current.style.top;
    let timer = setInterval(() => {
      let timePassed = Date.now() - start;
      if (timePassed > 750) {
        clearInterval(timer);
      }

      // Animation goes here
      // Every 100 milliseconds, topVal will be decremented by 1
      topVal -= 0.5;
      text.current.style.top = topVal + "px";
    }, 1);
  };

  return (
    <div className="splash">
      <div className="cover"></div>
      <div className="text" ref={text}>
        Welcome to my portfolio page!
      </div>
    </div>
  );
};

export default Splash;
