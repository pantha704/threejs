import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { CapsuleGeometry } from "three";

export default function NPC({ position, direction }: any) {
  const [localPosition, setLocalPosition] = useState(position);
  const [currentDirection, setCurrentDirection] = useState(direction);
  const [isCrossing, setIsCrossing] = useState(false);

  useFrame((state, delta) => {
    let newPosition = [...localPosition];
    if (isCrossing) {
      newPosition[0] += currentDirection[0] * delta * 0.5;
      if (Math.abs(newPosition[0]) > 3) {
        setIsCrossing(false);
        setCurrentDirection([0, 0, Math.sign(currentDirection[2])]);
      }
    } else {
      newPosition[2] += currentDirection[2] * delta * 0.5;
      if (Math.abs((newPosition[2] + 25) % 50) < 0.1 && Math.random() < 0.5) {
        setIsCrossing(true);
        setCurrentDirection([Math.sign(newPosition[0]) * -1, 0, 0]);
      }
    }
    setLocalPosition(newPosition);
  });

  return (
    <mesh position={localPosition}>
      <primitive object={new CapsuleGeometry(0.2, 0.5, 1, 8)} />
      <meshStandardMaterial color="#FF69B4" />
    </mesh>
  );
}
