import * as THREE from "three";
import ReactDOM from "react-dom";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { LayerMaterial, Depth } from "lamina";
// import niceColors from "nice-color-palettes";

// Three.js uses matrices to encode 3D transformations - translations (position), rotations, and scaling.
// Every instance of Object3D has a matrix which stores the object's position, rotation and scale.
// A THREE.InstancedMesh stores all of the 4x4 transformation matrices of all the instances inside of
// a single flat float32Array, which gets initialized to all zeros. You need to give each instance its
// own identity matrix

const count = 4096;
const o = new THREE.Object3D();

function InstancedBoxes({ ...props }) {
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  const layerRef = useRef();
  //   useFrame((state, delta) => {
  //     ref.current.rotation.x += delta;
  //   });
  useEffect(() => {
    camera.add(ref.current);

    return () => {
      camera.remove(ref.current);
    };
  }, [camera, ref.current]);
  useFrame((state, delta) => {
    let i = 0;
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 16; y++) {
        for (let z = 0; z < 16; z++) {
          const id = i++;
          o.position.set(x, y, z);
          o.updateMatrix();
          ref.current.setMatrixAt(id, o.matrix);
          //   o.rotation.x += delta / 5;
          //   o.rotation.y += delta / 5;
          //   o.rotation.z += delta / 5;
        }
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;

    // ref.current.rotation.z += delta;
  }, []);
  return (
    <instancedMesh
      ref={ref}
      args={[null, null, count]}
      onPointerMove={() => setHovered(true)}
      castShadow
      receiveShadow
    >
      <boxBufferGeometry args={[0.85, 0.85, 0.85]} />
      <meshStandardMaterial color="rgb(100, 100, 100)" roughness={0} />
    </instancedMesh>
  );
}

export default InstancedBoxes;
