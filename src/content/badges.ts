// The Path of Light: one badge per 1,000 points, up to 10.

export const POINTS_PER_BADGE = 1000;
export const BADGES = [
  {
    "name": "Seed",
    "meaning": "The journey begins",
    "points": 1000
  },
  {
    "name": "Sprout",
    "meaning": "Roots of faith",
    "points": 2000
  },
  {
    "name": "Candle",
    "meaning": "First light of knowledge",
    "points": 3000
  },
  {
    "name": "Lamp",
    "meaning": "Light that guides",
    "points": 4000
  },
  {
    "name": "Lantern",
    "meaning": "Light carried to others",
    "points": 5000
  },
  {
    "name": "Star",
    "meaning": "Steady guidance",
    "points": 6000
  },
  {
    "name": "Crescent",
    "meaning": "Growing fullness",
    "points": 7000
  },
  {
    "name": "Full Moon",
    "meaning": "Reflected light",
    "points": 8000
  },
  {
    "name": "Dawn",
    "meaning": "A new horizon",
    "points": 9000
  },
  {
    "name": "Nur",
    "meaning": "Light upon light",
    "points": 10000
  }
] as const;

export function badgeLevel(points: number) {
  return Math.min(BADGES.length, Math.floor(points / POINTS_PER_BADGE));
}
