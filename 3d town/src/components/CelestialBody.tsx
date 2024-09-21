import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export default function CelestialBody({
  isSun,
  time,
}: {
  isSun: boolean;
  time: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      const angle = (time / 24 + (isSun ? 0 : 0.5)) * Math.PI * 2;
      ref.current.position.x = Math.sin(angle) * 50;
      ref.current.position.y = Math.cos(angle) * 50;
    }
  });

  return (
    <mesh ref={ref as any} position={[0, 20, -50]}>
      <sphereGeometry args={[isSun ? 5 : 3, 32, 32]} />
      <meshStandardMaterial
        color={isSun ? "#FFD700" : "#FFFFFF"}
        emissive={isSun ? "#FFD700" : "#FFFFFF"}
        emissiveIntensity={isSun ? 1 : 0.2}
      />
    </mesh>
  );
}
