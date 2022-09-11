import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

export const Sphere = (props) => {
  const mesh = useRef();
  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[15, 14, 15]}></sphereGeometry>
    </mesh>
  );
};
