import React, { useRef, useState } from "react";
import "./Hero.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Cube } from "../../models/Cube";
import { Sphere } from "../../models/Sphere";

// <Canvas> sets up the scene and camera, and renders the scene every frames, eliminating the need for a traditional render loop
// <mesh> is equivalent the THREE.mesh(). Mesh is a basic scene object
// Hooks allow you to tie or request specific information to your component

// Ideas for hero three.js model;
// Maleable shape on click?
// Shape in which mesh displays different project for each side?
// On click, rotation changes speed?

const Hero = () => {
  return (
    <div id="hero">
      <div id="hero-container-left">
        <div>
          <h1 style={{ color: "white" }}>Let's Build Something Great</h1>
          {/* <button>
            <a href="#about">Learn More</a>
          </button> */}
        </div>
      </div>
      <div id="hero-container-right">
        <Canvas>
          <Cube />
          <ambientLight args={[0xff0000]} intensity={0.1} />
          <directionalLight color="red" instensity={0.5} position={[0, 0, 5]} />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
