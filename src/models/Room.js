import * as THREE from "three";
import { useGLTF, Sparkles } from "@react-three/drei";

export const Room = ({ props }) => {
  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        position={[1, 2, 3]}
        rotation={[1.6, 0.1, 3]}
      >
        <boxGeometry args={[4, 0.25, 4]} />
      </mesh>
      <mesh castShadow receiveShadow rotation={[0, 0, 0]}>
        <boxGeometry args={[4, 0.25, 4]} />
      </mesh>
    </group>
  );
};
