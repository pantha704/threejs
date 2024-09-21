export default function ZebraCrossing({ position }) {
  return (
    <group position={position}>
      {[...Array(5)].map((_, index) => (
        <mesh key={index} position={[0, 0, index * 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[6, 0.4]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
      ))}
    </group>
  )
}