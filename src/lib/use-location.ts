"use client";

import { useEffect, useState } from "react";
import { CITIES, METHODS } from "@/content/places";
import { useProgress } from "@/components/progress";

/** The selected location and calculation method, resolved from preferences. */
export function useLocation() {
  const { prefs } = useProgress();
  const method = METHODS.find((m) => m.key === prefs.methodKey) ?? METHODS[0];
  if (prefs.cityKey === "custom" && prefs.custom) {
    return { name: "My location", ...prefs.custom, method };
  }
  const c = CITIES.find((x) => x.key === prefs.cityKey) ?? CITIES[0];
  return { name: c.name, lat: c.lat, lng: c.lng, tz: c.tz, method };
}

/** Current time, only after mount (avoids hydration mismatches), refreshed on an interval. */
export function useNow(intervalMs = 30000) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}
