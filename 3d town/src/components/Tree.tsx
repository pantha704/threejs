export default function Tree({ position, scale = 1, type = 'normal' }) {
  const treeColors = {
    normal: { trunk: "#4a2700", leaves: "#228b22" },
    cherry: { trunk: "#3d2616", leaves: "#ffc0cb" },
    maple: { trunk: "#3a2410", leaves: "#ff4500" },
    pine: { trunk: "#3b2f2f", leaves: "#2f4f4f" }
  }

  const { trunk, leaves } = treeColors[type]

  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 2]} />
        <meshStandardMaterial color={trunk} />
      </mesh>
      {type === 'pine' ? (
        <group>
          {[0, 0.5, 1, 1.5].map((y, i) => (
            <mesh key={i} position={[0, 2 + y, 0]}>
              <coneGeometry args={[1 - y * 0.2, 1, 8]} />
              <meshStandardMaterial color={leaves} />
            </mesh>
          ))}
        </group>
      ) : (
        <mesh position={[0, 2.5, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color={leaves} />
        </mesh>
      )}
    </group>
  )
}