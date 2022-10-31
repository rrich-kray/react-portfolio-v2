const Sphere = ({ position, color, speed, args, mass, count }) => {
  const [ref, api] = useSphere(() => ({
    mass: mass,
    position: [0, 0, 0],
  }));
  return (
    <mesh ref={ref} position={[...position]}>
      <sphereGeometry />
      <MeshWobbleMaterial color={color} />
    </mesh>
  );
};

const InstancedSpheres = () => {
  const SPHERE_COUNT = 100;
  const positions = Array.from({ length: SPHERE_COUNT }, (_, index) => [
    0, 13, 0,
  ]);
  const rotations = Array.from({ length: SPHERE_COUNT }, (_, index) => [
    Math.random(),
    Math.random(),
    Math.random(),
  ]);
  const scales = Array.from({ length: SPHERE_COUNT }, (_, index) => [
    Math.random(),
    Math.random(),
    Math.random(),
  ]);

  return (
    <InstancedRigidBodies
      positions={positions}
      // rotations={rotations}
      // scales={scales}
      colliders="ball"
    >
      <instancedMesh args={[undefined, undefined, SPHERE_COUNT]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="white">
          <CuboidCollider args={[0.1, 0.2, 0.1]}></CuboidCollider>
        </meshBasicMaterial>
      </instancedMesh>
    </InstancedRigidBodies>
  );
};
