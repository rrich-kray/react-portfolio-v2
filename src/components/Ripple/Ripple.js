import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import circle from "./circle.png";
import * as THREE from "three";

function Points() {
  const pointTexture = useLoader(THREE.TextureLoader, circle); // texture to attach to each point

  const count = 100; // # of points on each axis
  const seperation = 3; // seperation between each point
  // [x1, y1, z1, x2, y2, z2, ...]
  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        // We want our grid to be symmetric about the origin. So we must offset x by half the total number of points
        let x = seperation * (xi - count / 2);
        let z = seperation * (zi - count / 2);
        let y = 0;
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, seperation]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        {/* BufferGeometry uses bufferAttributes to read and edit the data */}
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3} // each point will have an x, y and z position; therefore, the total number of points will be equal to positions / 3
          itemSize={3} // Specifies each item as having three data points from the positions array
        />
      </bufferGeometry>
      {/* These settings ensure that the transparent portions in the png file are not visible */}
      <pointsMaterial
        attach="material"
        map={pointTexture}
        color="white"
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
}

export default AnimationCanvas;
