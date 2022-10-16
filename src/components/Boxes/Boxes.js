import { useEffect } from "react";
import * as THREE from "three";
import ReactDOM from "react-dom";
import { useRef, useState, useLayoutEffect } from "react";
import { Instances, Instance } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { LayerMaterial, Depth } from "lamina";

function Box({ x, y, z, color, scale }) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.position.set(x, y, z);
  });
  return (
    <Instance ref={ref} color={color} scale={scale} position={[x, y, z]} />
  );
}

function Boxes() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  const layerRef = useRef();
  const positions = [];
  //   useFrame((state, delta) => {
  //     ref.current.rotation.x += delta;
  //   });

  for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 25; y++) {
      for (let z = 0; z < 25; z++) {
        positions.push([x, y, z]);
      }
    }
  }

  return (
    <Instances>
      <boxGeometry args={[0.75, 0.75, 0.75]} />
      <meshStandardMaterial />
      {positions.map((position) => {
        <Box
          position={[position[0], position[1], position[2]]}
          scale={1}
          color="red"
        />;
      })}
    </Instances>
  );
}

export default Boxes;
