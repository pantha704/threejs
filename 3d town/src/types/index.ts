export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Direction {
  x: number;
  y: number;
  z: number;
}

export type TreeType = "normal" | "cherry" | "maple" | "pine";

export interface VillageProps {
  scrollY: number;
  showNPCs: boolean;
  showCars: boolean;
  time: number;
}

// Add more shared types and interfaces as needed
