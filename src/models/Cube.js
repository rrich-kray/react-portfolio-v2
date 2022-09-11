import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

// useFrame hook allows you to execute code on every rendered frame

export const Cube = (props) => {
  const mesh = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  useFrame((state, delta) => {
    mesh.current.rotation.y += rotationSpeed;
    mesh.current.rotation.x += rotationSpeed;
  });
  // Create a state for each user action you want to perform on your model
  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={() =>
        setRotationSpeed((rotationSpeed) => (rotationSpeed += 0.01))
      }
    >
      <ambientLight intensity={0.5} />
      <directionalLight color="orange" position={[0, 0, 5]} />
      <boxGeometry args={[2, 2, 2]} />
    </mesh>
  );
};
