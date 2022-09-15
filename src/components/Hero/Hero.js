import React, { useRef, useState, Suspense } from "react";
import "./Hero.css";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
} from "@react-three/fiber";
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
  RandomizedLight,
  AccumulativeShadows,
  useGLTF,
} from "@react-three/drei";
import {
  Physics,
  RigidBody,
  CuboidCollider,
  InstancedRigidBodies,
} from "@react-three/rapier";
import { UnrealBloomPass } from "three-stdlib";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Room } from "../../models/Room";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

extend({ UnrealBloomPass });

// <Canvas> sets up the scene and camera, and renders the scene every frames, eliminating the need for a traditional render loop
// <mesh> is equivalent the THREE.mesh(). Mesh is a basic scene object
// Hooks allow you to tie or request specific information to your component
// ambientLight allows you to illuminate all objects in the scene equally
// Directional light: A light that is emitted in a specific direction
// Environment: This texture is set as the environment map for all physical materials in a scene
// mesh components have 13 onclick events

// Ideas for hero three.js model;
// Room
// Simple house
// Snow globe

const Laptop = (props) => {
  const fbx = useLoader(FBXLoader, "/completeLaptop.fbx");
  return <primitive object={fbx} />;
};

const Scene = (props) => {
  return (
    <group {...props} dispose={null}>
      <Room position={[0, 0, -1]} />
    </group>
  );
};

const Hero = () => {
  const canvasRef = useRef();

  return (
    <div id="hero">
      {/* <div id="hero-container-left">
        <div>
          <h1 style={{ color: "white" }}>Let's Build Something Great</h1>
        </div>
      </div> */}
      <div id="hero-container-right">
        {/* <div className="hero-text-container">
          <h1>Let's build something great</h1>
        </div> */}
        <Canvas ref={canvasRef} camera={{ position: [0, 2, 4], fov: 100 }}>
          <Suspense fallback={null}>
            {/* <color attach="background" args={["#202030"]} /> */}
            {/* <Scene position={[0, 0, 0]} rotate={[0, 0, 0]}></Scene> */}
            <mesh castShadow position={[0, -1, 0]}>
              <sphereGeometry args={[0.5, 70, 70]} />
            </mesh>
            <Laptop />
            <AccumulativeShadows
              temporal
              frames={100}
              color="black"
              colorblend={5}
              toneMapped={true}
              alphaTest={1}
              opacity={0.5}
              scale={10}
              position={[0, 0, 0]}
            >
              <RandomizedLight
                amount={10}
                radius={4}
                ambient={0.5}
                intensity={1}
                position={[1, 1, 1]}
              />
            </AccumulativeShadows>
            <ambientLight args={[0xff0000]} intensity={0.1} />
            <directionalLight
              castShadow
              shadow-mapSize={[1024, 1024]}
              color="red"
              instensity={0.5}
              position={[0, -5, 5]}
            >
              <orthographicCamera attach="shadow-camera" args={[0, 0, 0, 0]} />
            </directionalLight>
            <OrbitControls autoRotate={false} enableZoom={false} />
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
