import { Text, Html } from '@react-three/drei'

export default function Museum({ position, content }) {
  return (
    <group position={position}>
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[12, 6, 8]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      <mesh position={[0, 6.5, 0]}>
        <cylinderGeometry args={[4, 6, 2, 4]} />
        <meshStandardMaterial color="#D2691E" />
      </mesh>
      <Text position={[0, 7, 4.1]} fontSize={0.7} color="white">
        Resume Museum
      </Text>
      <Html position={[0, 4, 4.1]} transform occlude>
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-bold mb-2">Resume</h2>
          <p className="text-sm">{content}</p>
        </div>
      </Html>
    </group>
  )
}