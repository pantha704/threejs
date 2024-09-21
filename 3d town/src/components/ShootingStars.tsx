import { useState, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function ShootingStar({ onComplete }) {
  const ref = useRef()
  const [active, setActive] = useState(true)

  useFrame(() => {
    if (ref.current && active) {
      ref.current.position.x += 1
      ref.current.position.y -= 0.5

      if (ref.current.position.x > 100) {
        setActive(false)
        onComplete()
      }
    }
  })

  if (!active) return null

  return (
    <mesh ref={ref} position={[-100, 50, -50]}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color="#FFFFFF" />
    </mesh>
  )
}

export default function ShootingStars({ enabled }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    if (enabled) {
      const interval = setInterval(() => {
        if (Math.random() < 0.1) {  // 10% chance every second
          setStars(prev => [...prev, Date.now()])
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [enabled])

  return (
    <>
      {stars.map(id => (
        <ShootingStar key={id} onComplete={() => setStars(prev => prev.filter(starId => starId !== id))} />
      ))}
    </>
  )
}