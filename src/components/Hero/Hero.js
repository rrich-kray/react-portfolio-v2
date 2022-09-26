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
} from "@react-three/drei";
import { usePlane, useBox, useSphere } from "@react-three/cannon";
import {
  RigidBody,
  Physics,
  InstancedRigidBodies,
  CuboidCollider,
  BallCollider,
  MeshCollider,
  Debug,
} from "@react-three/rapier";
import { UnrealBloomPass } from "three-stdlib";
import { Box, Torus } from "@react-three/drei";
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

softShadows();

// const Sphere = ({ position, color, speed, args, mass, count }) => {
//   const [ref, api] = useSphere(() => ({
//     mass: mass,
//     position: [0, 0, 0],
//   }));
//   return (
//     <mesh ref={ref} position={[...position]}>
//       <sphereGeometry />
//       <MeshWobbleMaterial color={color} />
//     </mesh>
//   );
// };

const InstancedSpheres = () => {
  const SPHERE_COUNT = 1000;
  const positions = Array.from({ length: SPHERE_COUNT }, (_, index) => [
    index,
    Math.random(),
    Math.random(),
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
        <Canvas ref={canvasRef} camera={{ position: [-30, 0, -15], fov: 12 }}>
          <Suspense fallback={null}>
            {/* <color attach="background" args={["#202030"]} /> */}
            {/* <Scene position={[0, 0, 0]} rotate={[0, 0, 0]}></Scene> */}
            <Physics gravity={[0, 5, 0]} colliders="ball">
              <Debug color="red" sleepColor="blue" />
              <InstancedSpheres></InstancedSpheres>
              <RigidBody
                position={[0, 5, 0]}
                rotation={[0, 0, 0]}
                type="fixed"
                colliders="false"
              >
                <CuboidCollider restitution={0.1} args={[1000, 1, 1000]} />
              </RigidBody>
            </Physics>
            <Physics gravity={[0, -5, 0]}>
              <InstancedSpheres></InstancedSpheres>
              <RigidBody position={[0, -5, 0]} type="fixed" colliders="false">
                <CuboidCollider restitution={0.1} args={[1000, 1, 1000]} />
              </RigidBody>
            </Physics>
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
            <OrbitControls autoRotate={false} enableZoom={true} />
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
