"use client";

import { useState } from "react";
import { CITIES, METHODS } from "@/content/places";
import { Icon } from "./icons";
import { useProgress } from "./progress";

export function LocationPicker({ showMethod = true }: { showMethod?: boolean }) {
  const { prefs, setPrefs } = useProgress();
  const [status, setStatus] = useState<string | null>(null);

  function useMyLocation() {
    if (!("geolocation" in navigator)) { setStatus("This browser can't share its location. Pick a city instead."); return; }
    setStatus("Finding your location…");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPrefs({
          cityKey: "custom",
          custom: { lat: +pos.coords.latitude.toFixed(4), lng: +pos.coords.longitude.toFixed(4), tz: Intl.DateTimeFormat().resolvedOptions().timeZone },
        });
        setStatus(null);
      },
      () => setStatus("Location access was blocked. Allow it in your browser settings, or pick a city."),
      { timeout: 10000, maximumAge: 3600e3 },
    );
  }

  return (
    <section className="card flex flex-col gap-3.5">
      <div className="flex flex-wrap items-end gap-3">
        <label className="field" htmlFor="city">City
          <select id="city" className="input" value={prefs.cityKey}
            onChange={(e) => setPrefs({ cityKey: e.target.value })}>
            {prefs.custom && <option value="custom">My location ({prefs.custom.lat}, {prefs.custom.lng})</option>}
            {CITIES.map((c) => <option key={c.key} value={c.key}>{c.name}</option>)}
          </select>
        </label>
        {showMethod && (
          <label className="field" htmlFor="method">Fajr and Isha method
            <select id="method" className="input" value={prefs.methodKey}
              onChange={(e) => setPrefs({ methodKey: e.target.value })}>
              {METHODS.map((m) => <option key={m.key} value={m.key}>{m.name}</option>)}
            </select>
          </label>
        )}
        <button type="button" className="btn btn-ghost" onClick={useMyLocation}><Icon name="pin" size={18} />Use my location</button>
      </div>
      {status && <p className="text-[0.9rem] text-fg-muted" role="status">{status}</p>}
    </section>
  );
}
