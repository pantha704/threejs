import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function RandomlyGlowingStars({ count = 1000 }) {
  const starsRef = useRef()
  const [glowIntensities, setGlowIntensities] = useState(Array(count).fill(0))

  useEffect(() => {
    setGlowIntensities(Array(count).fill().map(() => Math.random()))
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    setGlowIntensities(prev => prev.map((intensity, i) => {
      // Use a sine wave to create a slow, smooth glow effect
      return 0.5 + Math.sin(time * 0.1 + i * 1000) * 0.5
    }))
  })

  return (
    <group ref={starsRef}>
      {Array(count).fill().map((_, i) => (
        <mesh key={i} position={[
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        ]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color={new THREE.Color(1, 1, 1).multiplyScalar(0.5 + glowIntensities[i] * 0.5)} />
        </mesh>
      ))}
    </group>
  )
}