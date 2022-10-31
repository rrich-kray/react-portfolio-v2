import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import url from "../compressed.glb";

export const Headphones = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF(url);
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 8;
  });
  return (
    <mesh
      ref={ref}
      material={materials.M_Headphone}
      geometry={nodes.Headphones.geometry}
      {...props}
    />
  );
};
