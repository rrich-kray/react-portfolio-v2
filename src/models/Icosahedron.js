import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { GTLFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  BufferAttribute,
  IcosahedronGeometry,
  PolyhedronGeometry,
} from "three";

export const Icosahedron = (props) => {
  return (
    <mesh>
      <IcosahedronGeometry />
      <ambientLight intensity={0.5} />
      <directionalLight color="orange" position={[0, 0, 5]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};
