export default function House({ position, color = "#e0e0e0", roofColor = "#8b4513" }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.8, 0.8, 4]} />
        <meshStandardMaterial color={roofColor} />
      </mesh>
      <mesh position={[0.3, 0.5, 0.501]}>
        <boxGeometry args={[0.3, 0.3, 0.01]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
    </group>
  )
}