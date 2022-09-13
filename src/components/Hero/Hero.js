import React, { useRef, useState, Suspense } from "react";
import "./Hero.css";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Icosahedron,
  OrbitControls,
  TransformControls,
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image,
  useFBO,
  PerspectiveCamera,
  Lightformer,
  Effects,
  BakeShadows,
} from "@react-three/drei";
import {
  Physics,
  RigidBody,
  CuboidCollider,
  InstancedRigidBodies,
} from "@react-three/rapier";
import { UnrealBloomPass } from "three-stdlib";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Cube } from "../../models/Cube";
import { Sphere } from "../../models/Sphere";
import { Polyhedron } from "../../models/Icosahedron";
import { Orb } from "../../models/Orb";
import { Room } from "../../models/Room";

extend({ UnrealBloomPass });

// <Canvas> sets up the scene and camera, and renders the scene every frames, eliminating the need for a traditional render loop
// <mesh> is equivalent the THREE.mesh(). Mesh is a basic scene object
// Hooks allow you to tie or request specific information to your component

// Ideas for hero three.js model;
// Room
// Simple house
// Snow globe

const spheres = ({ ...props }) => {};

const Scene = (props) => {
  return (
    <group {...props} dispose={null}>
      {/* <RigidBody type="fixed"> */}
      <Room />
      {/* </RigidBody> */}
    </group>
  );
};

const Hero = () => {
  const canvasRef = useRef();

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
        {/* <div className="hero-text-container">
          <h1>Let's build something great</h1>
        </div> */}
        <Canvas ref={canvasRef} camera={{ position: [0, 2, 5] }}>
          <Suspense fallback={null}>
            {/* <color attach="background" args={["#202030"]} /> */}
            <fog attach="fog" args={["#202030", 10, 25]} />
            <Physics>
              <Scene position={[0, 0, 0]} rotate={[0, 0, 0]}></Scene>
            </Physics>
            <ambientLight args={[0xff0000]} intensity={0.1} />
            <directionalLight
              castShadow
              shadow-mapSize={[1024, 1024]}
              color="red"
              instensity={0.5}
              position={[0, 0, 5]}
            >
              <orthographicCamera
                attach="shadow-camera"
                args={[-10, 10, 10, -10]}
              />
            </directionalLight>
            <OrbitControls autoRotate={true} />
            {/* <Environment resolution={32}>
              <Lightformer position={[10, 10, 10]} scale={10} intensity={4} />
            </Environment> */}
            {/* <Effects>
              <unrealBloomPass strength={0.1} radius={0.5} />
            </Effects> */}
            {/* <TransformControls /> */}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
