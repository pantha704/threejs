import ZebraCrossing from './ZebraCrossing'

export default function Road() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[6, 1000]} />
        <meshStandardMaterial color="#808080" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[0.1, 1000]} />
        <meshStandardMaterial color="#FFFF00" />
      </mesh>
      <ZebraCrossing position={[0, 0.02, -25]} />
      <ZebraCrossing position={[0, 0.02, -75]} />
    </group>
  )
}