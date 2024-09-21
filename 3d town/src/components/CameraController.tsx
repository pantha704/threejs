import { useState, useEffect, useCallback } from "react";
import { useThree, useFrame } from "@react-three/fiber";

export default function CameraController() {
  const { camera } = useThree();
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [isAltPressed, setIsAltPressed] = useState(false);
  const mouseSensitivity = 0.002;

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isAltPressed) {
        setYaw((prevYaw) => prevYaw - event.movementX * mouseSensitivity);
        setPitch((prevPitch) =>
          Math.max(
            -Math.PI / 2,
            Math.min(
              Math.PI / 2,
              prevPitch - event.movementY * mouseSensitivity
            )
          )
        );
      }
    },
    [isAltPressed]
  );

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Alt") {
      setIsAltPressed(true);
    }
  }, []);

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.key === "Alt") {
      setIsAltPressed(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleMouseMove, handleKeyDown, handleKeyUp]);

  useFrame(() => {
    camera.rotation.order = "YXZ";
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
  });

  return null;
}
