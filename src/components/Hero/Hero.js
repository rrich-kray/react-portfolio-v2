import React, { useRef, useState, Suspense, useEffect } from "react";
import "./Hero.css";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, softShadows, Stars } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import * as THREE from "three";
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

softShadows();

function Earth() {
  const ref = useRef();
  const earthTexture = new THREE.TextureLoader().load(earth);
  const earthBumpTexture = new THREE.TextureLoader().load(earthBump);
  const earthSpecTexture = new THREE.TextureLoader().load(earthSpec);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 25;
  });

  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      position={[0, -0.75, 4]}
      rotation={[0, 7, 0]}
    >
      <ambientLight intensity={2} />
      <sphereGeometry attach="geometry" args={[0.5, 128, 128]} />
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

const Hero = ({ changeActivePage }) => {
  const canvasRef = useRef();

  return (
    <div id="hero">
      {/* <div id="hero-container-left">
        <div>
          <h1 style={{ color: "black" }}>Let's Build Something Great</h1>
        </div>
      </div> */}
      <div id="hero-container-right">
        <div className="hero-cta-container">
          <div
            style={{
              zIndex: 999,
            }}
          >
            <h1>Let's Build Something Great</h1>
          </div>
          <a href="#projects">Learn More</a>
        </div>
        <Canvas ref={canvasRef} dpr={[1, 2]}>
          <Suspense fallback={null}>
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
      </div>
    </div>
  );
};

export default Hero;
