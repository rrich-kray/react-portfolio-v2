import * as THREE from "three";
import { useGLTF, Sparkles } from "@react-three/drei";

export const Room = ({ props }) => {
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} rotate={[0, 0, 1]}>
      <mesh
        castShadow
        receiveShadow
        position={[0, 1.875, 2.13]}
        rotation={[1.565, 0, 3.15]}
      >
        <boxGeometry args={[4, 0.25, 4]} />
      </mesh>
      <mesh castShadow receiveShadow rotation={[0, 0, 0]}>
        <boxGeometry args={[4, 0.25, 4]} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        rotation={[1.58, 0, 4.7]}
        position={[1.9, 1.86, 0]}
      >
        <boxGeometry args={[4, 0.25, 4]} />
      </mesh>
    </group>
  );
};
