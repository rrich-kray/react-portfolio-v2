import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useIntersect,
  Image,
  ScrollControls,
  Scroll,
  Html,
  Text,
} from "@react-three/drei";
import projects from "../Projects/data";
import * as THREE from "three";

// THREE.MathUtils.damp allows you to smoothly interpolate a number from x to y in a spring-like manner using the dt to maintain framerate

function Project({ url, scale, text, title, ...props }) {
  const ref = useRef();
  const visible = useRef(false);
  const { height } = useThree((state) => state.viewport);
  // Smoothly move from the current y position of the ref to a new value based on the visible ref
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
  });
  return (
    <group {...props}>
      <Image ref={ref} scale={scale} url={url} />
      <Text>{title}</Text>
      <Text>{text}</Text>
    </group>
  );
}

function Projects() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      {projects.map((project) => (
        <Project
          url={project.backgroundImage}
          scale={1}
          text={project.info.description}
          title={project.name}
        />
      ))}
    </Scroll>
  );
}

function ThreeProjects() {
  return (
    <div className="three-projects">
      <color attach="background" args={["#f0f0f0"]} />
      <ScrollControls pages={projects.length}>
        <Projects />
      </ScrollControls>
    </div>
  );
}

export default ThreeProjects;
