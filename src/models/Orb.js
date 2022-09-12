import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

// Use GLTFLoader to load models
// Use Environment to load environments. Use with Suspense from React
// OrbitControls allow you to click and drag
// transformControls

export const Orb = (props) => {
  const mesh = useRef();
  return (
    <mesh {...props} ref={mesh} scale={0.05}>
      <ambientLight intensity={0.5} />
      <directionalLight color="orange" position={[0, 0, 5]} />
      <sphereGeometry args={[15, 64, 21]} />
      <meshPhongMaterial color="hotpink" />
    </mesh>
  );
};
