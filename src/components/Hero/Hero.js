import React, { useRef, useState, Suspense, useEffect } from "react";
import "./Hero.css";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
} from "@react-three/fiber";
import {
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  softShadows,
  MeshWobbleMaterial,
  Reflector,
  Stage,
  Backdrop,
  Instance,
  Instances,
  SpotLight,
  Torus,
  Stars,
} from "@react-three/drei";
import { usePlane, useBox, useSphere, Physics } from "@react-three/cannon";
import {
  RigidBody,
  InstancedRigidBodies,
  CuboidCollider,
  BallCollider,
  MeshCollider,
  Debug,
} from "@react-three/rapier";
import { UnrealBloomPass } from "three-stdlib";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Room } from "../../models/Room";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { InstancedMesh } from "three";
import { Headphones } from "../../models/Assortment/Headphones/Headphones";
import { LaptopWhite } from "../../models/Assortment/Laptop/Laptop";
import Laptop from "../../models/Laptop/Laptop";
// import Boxes from "../Boxes/Boxes";
import AnimationCanvas from "../Ripple/Ripple";
import InstancedBoxes from "../InstancedBoxes/InstancedBoxes";
import { Boxes } from "../Boxes/Boxes";
import * as THREE from "three";
import { color } from "@mui/system";
import earth from "./map.jpg";
import earthBump from "./earth_bump.jpg";
import earthSpec from "./earthspec.jpg";

extend({ UnrealBloomPass });

const colors = ["blue", "red", "green"];
const positions = [];

for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    for (let z = 0; z < 10; z++) {
      positions.push([x, y, z]);
    }
  }
}

const instanceProps = Array.from({ length: 1000 }, (r = 10, i) => ({
  random: [0, 0, 0],
  position: [positions[i][0], positions[i][1], positions[i][2]],
  rotation: [0, 0, 0],
  color: "blue",
}));

// <Canvas> sets up the scene and camera, and renders the scene every frames, eliminating the need for a traditional render loop
// <mesh> is equivalent the THREE.mesh(). Mesh is a basic scene object. These require geometries.
// Hooks allow you to tie or request specific information to your component
// ambientLight allows you to illuminate all objects in the scene equally
// Directional light: A light that is emitted in a specific direction
// Environment: This texture is set as the environment map for all physical materials in a scene
// mesh components have 13 onclick events
// Drei allows you to import effects rather than having to write them

// Ideas for hero three.js model;
// Room
// Simple house
// Snow globe
// Glowing spheres floating upward. Multicolored.
// Glowing spheres placed in a specific pattern.

softShadows();

function Earth() {
  const ref = useRef();
  const earthTexture = new THREE.TextureLoader().load(earth);
  const earthBumpTexture = new THREE.TextureLoader().load(earthBump);
  const earthSpecTexture = new THREE.TextureLoader().load(earthSpec);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 10;
  });

  return (
    <mesh castShadow receiveShadow ref={ref} position={[0, -3.75, 2.5]}>
      <ambientLight intensity={2} />
      <sphereGeometry attach="geometry" args={[4, 64, 64]} />
      <meshPhongMaterial
        map={earthTexture}
        bumpMap={earthBumpTexture}
        bumpScale={0.025}
        specularMap={earthSpecTexture}
        specular="grey"
        color="white"
      />
    </mesh>
  );
}

const Hero = () => {
  const canvasRef = useRef();

  return (
    <div id="hero">
      {/* <div id="hero-container-left">
        <div>
          <h1 style={{ color: "black" }}>Let's Build Something Great</h1>
        </div>
      </div> */}
      <div id="hero-container-right">
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "28.5%",
            height: "250px",
            width: "1000px",
            zIndex: 999,
          }}
        >
          <h1>Let's Build Something Great</h1>
        </div>

        <Canvas
          ref={canvasRef}
          dpr={[1, 2]}
          // camera={{ position: [0, 0, 0], fov: 50 }}
          // perspectiveCamera={{
          //   position: [0, 10, -2],
          //   fov: 125,
          //   near: 1,
          //   far: 1000,
          // }}
        >
          {/* <ambientLight intensity={0.5} /> */}
          {/* <directionalLight intensity={0.3} position={[5, 25, 20]} /> */}
          <Suspense fallback={null}>
            {/* <Stage
              environment="city"
              contactShadow
              intensity={1}
              position={[0, 0, 0]}
              adjustCamera={false}
              preset="rembrandt"
            > */}
            {/* </Stage> */}
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
            <Earth />
          </Suspense>
          <OrbitControls
            autoRotate={false}
            enableZoom={false}
            enableRotate={false}
          />
        </Canvas>

        {/* <AnimationCanvas /> */}
      </div>
    </div>
  );
};

export default Hero;
