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
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  softShadows,
  MeshWobbleMaterial,
  Reflector,
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
import { Torus } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Room } from "../../models/Room";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { InstancedMesh } from "three";

extend({ UnrealBloomPass });

// <Canvas> sets up the scene and camera, and renders the scene every frames, eliminating the need for a traditional render loop
// <mesh> is equivalent the THREE.mesh(). Mesh is a basic scene object
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

const Sphere = ({ position, color, speed, args, mass, count }) => {
  const [ref, api] = useSphere(() => ({
    mass: mass,
    position: [0, 0, 0],
  }));
  return (
    <mesh ref={ref} position={[...position]}>
      <sphereGeometry />
      <MeshWobbleMaterial color={color} />
    </mesh>
  );
};

const InstancedSpheres = () => {
  const SPHERE_COUNT = 100;
  const positions = Array.from({ length: SPHERE_COUNT }, (_, index) => [
    0, 13, 0,
  ]);
  const rotations = Array.from({ length: SPHERE_COUNT }, (_, index) => [
    Math.random(),
    Math.random(),
    Math.random(),
  ]);
  const scales = Array.from({ length: SPHERE_COUNT }, (_, index) => [
    Math.random(),
    Math.random(),
    Math.random(),
  ]);

  return (
    <InstancedRigidBodies
      positions={positions}
      // rotations={rotations}
      // scales={scales}
      colliders="ball"
    >
      <instancedMesh args={[undefined, undefined, SPHERE_COUNT]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="white">
          <CuboidCollider args={[0.1, 0.2, 0.1]}></CuboidCollider>
        </meshBasicMaterial>
      </instancedMesh>
    </InstancedRigidBodies>
  );
};

const Box = ({ dimensions, ...props }) => {
  const [ref, api] = useBox(() => ({ mass: 5, ...props }));
  return (
    <mesh castShadow receiveShadow {...props}>
      <boxGeometry args={[...dimensions]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
};

const Cylinder = ({ dimensions, ...props }) => {
  return (
    <mesh castShadow receiveShadow {...props}>
      <cylinderGeometry args={[...dimensions]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const Obstacles = (props) => {
  return (
    <RigidBody type="fixed">
      <Box
        dimensions={[25, 0.5, 5]}
        position={[-10, 4, 1]}
        rotation={[0, 5, 4]}
      />
      <Box dimensions={[25, 0.5, 5]} position={[2, -4, 5]} />
      <Cylinder dimensions={[0.25, 0.25, 4]} />
      <Cylinder dimensions={[0.25, 0.25, 4]} />
      <Cylinder dimensions={[0.25, 0.25, 4]} />
      <Cylinder dimensions={[0.25, 0.25, 4]} />
    </RigidBody>
  );
};

const Plane = (props) => {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
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
        <Canvas
          ref={canvasRef}
          dpr={[1, 2]}
          camera={{ position: [-5, 5, 5], fov: 50 }}
        >
          <Suspense fallback={null}>
            <Physics>
              <Plane />
              <Box dimensions={[4, 4, 4]} position={[0, 0, 0]} />
            </Physics>
            <ambientLight />
            <spotLight
              angle={0.25}
              penumbra={1}
              position={[10, 10, 5]}
              castShadow
            />
            <OrbitControls autoRotate={false} enableZoom={true} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
