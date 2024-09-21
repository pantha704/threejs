import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import Road from "./Road";
import Forest from "./Forest";
import NPC from "./NPC";
import Car from "./Car";
import CelestialBody from "./CelestialBody";
import Showroom from "./Showroom";
import Museum from "./Museum";
import School from "./School";
import House from "./House";
import { Group } from "three";

export default function Village({ scrollY, showNPCs, showCars, time }: any) {
  const group = useRef<Group>(null);

  useFrame(() => {
    if (group.current) {
      group.current.position.z = scrollY * 0.1;
    }
  });

  const npcs = useMemo(() => {
    return Array(10)
      .fill(undefined)
      .map((_, i) => ({
        position: [Math.random() > 0.5 ? 3.5 : -3.5, 0, -i * 10 - 10],
        direction: [0, 0, Math.random() > 0.5 ? 1 : -1],
      }));
  }, []);

  const cars = useMemo(() => {
    return Array(5)
      .fill()
      .map((_, i) => ({
        position: [Math.random() > 0.5 ? 1.5 : -1.5, 0.5, -i * 20 - 10],
        direction: [0, 0, Math.random() > 0.5 ? 1 : -1],
      }));
  }, []);

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[200, 1000]} />
        <meshStandardMaterial color="#7cfc00" />
      </mesh>
      <Road />
      <Forest count={200} radius={100} />
      <House position={[-8, 0, -5]} color="#f0e68c" />
      <House position={[8, 0, -8]} color="#deb887" />
      <House position={[-9, 0, -12]} color="#d3d3d3" />
      <House position={[10, 0, -15]} color="#ffa07a" />
      <House position={[-10, 0, -18]} color="#20b2aa" />
      <House position={[9, 0, -30]} color="#f08080" />
      <House position={[-8, 0, -35]} color="#98fb98" />
      <Showroom
        position={[15, 0, -50]}
        content="Explore my latest web and mobile applications, showcasing innovative solutions and cutting-edge technologies."
      />
      <Museum
        position={[-15, 0, -100]}
        content="Discover my professional journey, skills, and experiences that have shaped my career in software development."
      />
      <School
        position={[15, 0, -150]}
        content="Learn about my academic achievements, certifications, and continuous learning journey in the tech world."
      />
      {showNPCs &&
        npcs.map((npc, index) => (
          <NPC key={index} position={npc.position} direction={npc.direction} />
        ))}
      {showCars &&
        cars.map((car, index) => (
          <Car key={index} position={car.position} direction={car.direction} />
        ))}
      <CelestialBody isSun={true} time={time} />
      <CelestialBody isSun={false} time={time} />
    </group>
  );
}
