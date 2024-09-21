import { useMemo } from 'react'
import Tree from './Tree'
import Flower from './Flower'

export default function Forest({ count = 200, radius = 50 }) {
  const trees = useMemo(() => {
    return Array(count).fill().map(() => {
      const r = Math.sqrt(Math.random()) * radius
      const theta = Math.random() * 2 * Math.PI
      const x = r * Math.cos(theta)
      const z = r * Math.sin(theta)
      if (Math.abs(x) < 4) {
        return null
      }
      return {
        position: [x, 0, z],
        scale: 0.5 + Math.random() * 0.5,
        type: ['normal', 'cherry', 'maple', 'pine'][Math.floor(Math.random() * 4)]
      }
    }).filter(Boolean)
  }, [count, radius])

  const flowers = useMemo(() => {
    return Array(1000).fill().map(() => {
      const r = Math.sqrt(Math.random()) * radius
      const theta = Math.random() * 2 * Math.PI
      const x = r * Math.cos(theta)
      const z = r * Math.sin(theta)
      if (Math.abs(x) < 4) {
        return null
      }
      return {
        position: [x, 0, z],
        color: ['#FF69B4', '#FF6347', '#FFD700', '#9370DB', '#00CED1'][Math.floor(Math.random() * 5)]
      }
    }).filter(Boolean)
  }, [radius])

  return (
    <group>
      {trees.map((tree, index) => (
        <Tree key={index} position={tree.position} scale={tree.scale} type={tree.type} />
      ))}
      {flowers.map((flower, index) => (
        <Flower key={index} position={flower.position} color={flower.color} />
      ))}
    </group>
  )
}