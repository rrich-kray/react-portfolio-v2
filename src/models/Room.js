import * as THREE from "three";
import { useGLTF, Sparkles } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { LayerMaterial, Depth, Fresnel } from "lamina";
import { useControls } from "leva";

export const Room = (props) => {
  const [isCubeExpanded, setIsCubeExpanded] = useState(false);
  const OFFSET = 0.08;

  const state = useThree();
  console.log(state);

  const expandCube = () => {
    const [s1, s2, s3, s4, s5, s6] =
      state.scene.children[0].children[0].children;
    let start = Date.now();
    let timer = setInterval(() => {
      let timePassed = Date.now() - start;
      if (timePassed >= 1500) {
        clearInterval(timer);
        return;
      }
      if (!isCubeExpanded) {
        s1.position.y += OFFSET;
        s2.position.x -= OFFSET;
        s3.position.x += OFFSET;
        s4.position.z -= OFFSET;
        s5.position.z += OFFSET;
        // s6.position.x -= OFFSET;
        setIsCubeExpanded(true);
      }
    }, 20);
    timer();
  };

  return (
    <group
      {...props}
      dispose={null}
      // position={[0, 0, 0]}
      rotate={[0, 0, 0]}
      scale-x={0.5}
      scale-y={0.5}
      scale-z={0.5}
      onClick={() => expandCube()}
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

const Side = ({
  position,
  rotation,
  isCubeExpanded,
  setIsCubeExpanded,
  s1,
}) => {
  const { gradient } = useControls({
    gradient: { value: 0.4, min: 0, max: 1 },
  });
  const ref = useRef();
  const state = useFrame((state) => {
    // allows you to run a block of code every frame
    const originArgs = [
      Math.cos(state.clock.elapsedTime / 2),
      Math.sin(state.clock.elapsedTime / 2),
      Math.cos(state.clock.elapsedTime / 2),
    ];
    ref.current.layers[0].origin.set(...originArgs);
    ref.current.layers[1].origin.set(...originArgs);
    ref.current.layers[2].origin.set(...originArgs);
    ref.current.layers[3].origin.set(...originArgs);
    // ref.current.layers[4].origin.set(...originArgs);
  });

  return (
    <mesh
      castShadow
      receiveShadow
      position={[position[0], position[1], position[2]]}
      rotation={[rotation[0], rotation[1], rotation[2]]}
    >
      <LayerMaterial ref={ref}>
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
          colorA="blue"
          colorB="#f7b955"
          alpha={1}
          mode="add"
          near={2 * gradient}
          far={2}
          origin={[0, 1, 1]}
        />
        <Depth
          colorA="green"
          colorB="#f7b955"
          alpha={1}
          mode="add"
          near={3 * gradient}
          far={3}
          origin={[0, 1, -1]}
        />
        <Depth
          colorA="white"
          colorB="red"
          alpha={1}
          mode="overlay"
          near={1.5 * gradient}
          far={1.5}
          origin={[-1, -1, -1]}
        />
        <Fresnel mode="add" color="black" intensity={2} power={3} bias={0.1} />
        {/* <Fresnel color={"#fe0000"} mode={"screen"} /> */}
      </LayerMaterial>
      <boxGeometry args={[4, 0.25, 4]} />
    </mesh>
  );
};
