import * as THREE from "three";
import { useGLTF, Sparkles } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { LayerMaterial, Depth, Fresnel } from "lamina";
import { useControls } from "leva";

export const Room = ({ props }) => {
  const [isCubeExpanded, setIsCubeExpanded] = useState(false);
  const s1 = useRef();
  const s2 = useRef();
  const s3 = useRef();
  const s4 = useRef();
  const s5 = useRef();
  const s6 = useRef();

  const expandCube = () => {
    setIsCubeExpanded((isCubeExpanded) => !isCubeExpanded);
    if (isCubeExpanded) {
      s1.current.position.z += 2;
      s2.current.position.z -= 2;
      s3.current.position.z += 2;
      s4.current.position.z -= 2;
      s5.current.position.z += 2;
      s6.current.position.z -= 2;
    } else {
      s1.current.position.z -= 2;
      s2.current.position.z += 2;
      s3.current.position.z -= 2;
      s4.current.position.z += 2;
      s5.current.position.z -= 2;
      s6.current.position.z += 2;
    }
  };

  return (
    <group
      {...props}
      dispose={null}
      position={[0, -1, 0]}
      rotate={[0, 0, 0]}
      scale-x={0.5}
      scale-y={0.5}
      scale-z={0.5}
      // onClick={() => expandCube()}
    >
      <Side position={[0, 4, 0]} rotation={[0, 0, 0]} />
      <Side position={[-2, 2, 0]} rotation={[0, 0, 4.7]} />
      <Side rotation={[0, 0, 4.7]} position={[2, 2, 0]} />
      <Side rotation={[0, 4.7, 4.7]} position={[0, 2, -2]} />
      <Side rotation={[0, 4.7, 4.7]} position={[0, 2, 2]} />
      <Side rotation={[0, 0, 0]} position={[0, 0, 0]} />
    </group>
  );
};

const Side = ({ position, rotation }) => {
  const { gradient } = useControls({
    gradient: { value: 0.7, min: 0, max: 1 },
  });
  const ref = useRef();
  return (
    <mesh
      castShadow
      receiveShadow
      position={[position[0], position[1], position[2]]}
      rotation={[rotation[0], rotation[1], rotation[2]]}
    >
      <LayerMaterial>
        <Depth
          colorA="#ff0080"
          colorB="black"
          alpha={1}
          mode="normal"
          near={0.5 * gradient}
          far={0.5}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA="#ff0080"
          colorB="#f7b955"
          alpha={1}
          mode="add"
          near={2 * gradient}
          far={0.5}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA="#ff0080"
          colorB="green"
          alpha={1}
          mode="multiply"
          near={3 * gradient}
          far={3}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA="white"
          colorB="red"
          alpha={1}
          mode="multiply"
          near={1 * gradient}
          far={1}
          origin={[0, 0, 0]}
        />
        <Fresnel
          mode="add"
          color="white"
          intensity={0.5}
          power={1.5}
          bias={0.05}
        />
      </LayerMaterial>
      <boxGeometry args={[4, 0.25, 4]} />
    </mesh>
  );
};
