"use client";

import { useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import Village from "./Village";
import CameraController from "./CameraController";
import SettingsMenu from "./SettingsMenu";
import TimeIcon from "./TimeIcon";
import RandomlyGlowingStars from "./RandomlyGlowingStars";
import ShootingStars from "./ShootingStars";

export default function PortfolioVillage() {
  const [scrollY, setScrollY] = useState(0);
  const [showNPCs, setShowNPCs] = useState(true);
  const [showCars, setShowCars] = useState(true);
  const [time, setTime] = useState(12); // Start at noon
  const [showShootingStars, setShowShootingStars] = useState(false);
  const [isAltPressed, setIsAltPressed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  const isNight = time >= 18 || time < 6;

  return (
    <div
      className="w-full h-screen bg-gray-900"
      style={{ cursor: isAltPressed ? "none" : "default" }}
    >
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={isNight ? 0.1 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isNight ? 0.2 : 0.8} />
        {isNight ? (
          <>
            <RandomlyGlowingStars />
            <Stars count={5000} depth={50} fade speed={0.5} />
            <ShootingStars enabled={showShootingStars} />
          </>
        ) : (
          <Sky
            sunPosition={[
              Math.sin((time / 24) * Math.PI * 2) * 100,
              Math.cos((time / 24) * Math.PI * 2) * 100,
              100,
            ]}
          />
        )}
        <Village
          scrollY={scrollY}
          showNPCs={showNPCs}
          showCars={showCars}
          time={time}
        />
        <CameraController />
      </Canvas>
      <div className="fixed top-4 left-4 text-white text-2xl font-bold">
        Welcome to My 3D Portfolio Village
      </div>
      <div className="fixed top-4 right-4 text-white text-xl flex items-center space-x-2">
        <TimeIcon time={time} />
        <span>
          {Math.floor(time)}:
          {Math.floor((time % 1) * 60)
            .toString()
            .padStart(2, "0")}
        </span>
      </div>
      <SettingsMenu
        showNPCs={showNPCs}
        setShowNPCs={setShowNPCs}
        showCars={showCars}
        setShowCars={setShowCars}
        time={time}
        setTime={setTime}
        showShootingStars={showShootingStars}
        setShowShootingStars={setShowShootingStars}
      />
    </div>
  );
}
