export default function Flower({ position, color }: any) {
  return (
    <group position={position}>
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.005, 0.005, 0.1, 8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
}
