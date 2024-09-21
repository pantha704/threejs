import { Text, Html } from '@react-three/drei'

export default function School({ position, content }) {
  return (
    <group position={position}>
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[14, 6, 10]} />
        <meshStandardMaterial color="#8FBC8F" />
      </mesh>
      <mesh position={[0, 6.5, 0]}>
        <coneGeometry args={[5, 3, 4]} />
        <meshStandardMaterial color="#2E8B57" />
      </mesh>
      <Text position={[0, 8, 5.1]} fontSize={0.7} color="white">
        Education Center
      </Text>
      <Html position={[0, 4, 5.1]} transform occlude>
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <p className="text-sm">{content}</p>
        </div>
      </Html>
    </group>
  )
}