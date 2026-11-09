// Great-circle bearing and distance to the Ka'bah.

const KAABA = { lat: 21.4225, lng: 39.8262 };
const d2r = (d: number) => (d * Math.PI) / 180;
const r2d = (r: number) => (r * 180) / Math.PI;

/** Degrees clockwise from true north. */
export function qiblaBearing(lat: number, lng: number) {
  const p1 = d2r(lat);
  const p2 = d2r(KAABA.lat);
  const dl = d2r(KAABA.lng - lng);
  const b = r2d(Math.atan2(Math.sin(dl), Math.cos(p1) * Math.tan(p2) - Math.sin(p1) * Math.cos(dl)));
  return (b + 360) % 360;
}

export function distanceToKaabaKm(lat: number, lng: number) {
  const R = 6371;
  const p1 = d2r(lat);
  const p2 = d2r(KAABA.lat);
  const a = Math.sin((p2 - p1) / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(d2r(KAABA.lng - lng) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export function compassWord(deg: number) {
  return ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"][Math.round(deg / 45) % 8];
}
