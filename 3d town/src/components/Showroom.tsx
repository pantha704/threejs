import { Text, Html } from '@react-three/drei'

export default function Showroom({ position, content }) {
  return (
    <group position={position}>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[10, 4, 6]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      <mesh position={[0, 4.5, 0]}>
        <cylinderGeometry args={[3, 3, 1, 32]} />
        <meshStandardMaterial color="#4682B4" />
      </mesh>
      <Text position={[0, 5, 3.1]} fontSize={0.7} color="white">
        Projects Showroom
      </Text>
      <Html position={[0, 3, 3.1]} transform occlude>
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <p className="text-sm">{content}</p>
        </div>
      </Html>
    </group>
  )
}