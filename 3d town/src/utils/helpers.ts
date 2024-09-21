export function calculateSunPosition(time: number): [number, number, number] {
  return [
    Math.sin((time / 24) * Math.PI * 2) * 100,
    Math.cos((time / 24) * Math.PI * 2) * 100,
    100,
  ];
}

export function formatTime(time: number): string {
  const hours = Math.floor(time);
  const minutes = Math.floor((time % 1) * 60);
  return `${hours}:${minutes.toString().padStart(2, "0")}`;
}

// Add more utility functions as needed
