import { useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Car({ position, direction }) {
  const [localPosition, setLocalPosition] = useState(position)
  
  useFrame((state, delta) => {
    setLocalPosition(prev => [
      prev[0],
      prev[1],
      (prev[2] + direction[2] * delta * 2 + 500) % 500 - 250
    ])
  })

  return (
    <group position={localPosition}>
      <mesh>
        <boxGeometry args={[1, 0.5, 2]} />
        <meshStandardMaterial color="#4682B4" />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.4, 1]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
    </group>
  )
}