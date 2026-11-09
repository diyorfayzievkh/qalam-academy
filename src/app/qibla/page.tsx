"use client";

import { useEffect, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { starPath } from "@/components/figures";
import { LocationPicker } from "@/components/location-picker";
import { compassWord, distanceToKaabaKm, qiblaBearing } from "@/lib/qibla";
import { useLocation } from "@/lib/use-location";

type OrientationEventWithCompass = DeviceOrientationEvent & { webkitCompassHeading?: number };
type OrientationCtor = typeof DeviceOrientationEvent & { requestPermission?: () => Promise<"granted" | "denied"> };

/** Live compass heading from the device (phones/tablets). null until enabled. */
function useCompass() {
  const [heading, setHeading] = useState<number | null>(null);
  const [state, setState] = useState<"off" | "on" | "unsupported" | "denied">("off");

  useEffect(() => {
    if (state !== "on") return;
    const onAbs = (e: DeviceOrientationEvent) => { if (e.absolute && e.alpha != null) setHeading((360 - e.alpha) % 360); };
    const onRel = (e: OrientationEventWithCompass) => { if (e.webkitCompassHeading != null) setHeading(e.webkitCompassHeading); };
    window.addEventListener("deviceorientationabsolute", onAbs as EventListener);
    window.addEventListener("deviceorientation", onRel as EventListener);
    return () => {
      window.removeEventListener("deviceorientationabsolute", onAbs as EventListener);
      window.removeEventListener("deviceorientation", onRel as EventListener);
    };
  }, [state]);

  async function enable() {
    if (typeof window === "undefined" || !("DeviceOrientationEvent" in window)) { setState("unsupported"); return; }
    const Ctor = DeviceOrientationEvent as OrientationCtor;
    if (typeof Ctor.requestPermission === "function") {
      try { setState((await Ctor.requestPermission()) === "granted" ? "on" : "denied"); } catch { setState("denied"); }
    } else setState("on");
  }
  return { heading, state, enable };
}

export default function QiblaPage() {
  const loc = useLocation();
  const bearing = qiblaBearing(loc.lat, loc.lng);
  const km = distanceToKaabaKm(loc.lat, loc.lng);
  const { heading, state, enable } = useCompass();
  // With a live compass the whole dial turns so "N" points to real north.
  const dialRotation = heading != null ? -heading : 0;
  const aligned = heading != null && Math.abs(((bearing - heading + 540) % 360) - 180) < 5;

  return (
    <>
      <PageHeader eyebrow="Qibla" title="Direction of the Kaʿbah"
        sub="The angle is measured clockwise from true north. Use the live compass on your phone, or turn to the angle shown." />
      <Page>
        <LocationPicker showMethod={false} />
        <section className="card grid items-center gap-5 md:grid-cols-2">
          <div className="mx-auto w-full max-w-[340px]">
            <svg viewBox="0 0 300 300" role="img" aria-label={`Compass showing the qibla at ${bearing.toFixed(0)} degrees`}>
              <g style={{ transform: `rotate(${dialRotation}deg)`, transformOrigin: "150px 150px", transition: "transform .25s ease-out" }}>
                <circle cx="150" cy="150" r="138" fill="rgb(var(--surface-2))" stroke={aligned ? "rgb(var(--ok))" : "rgb(var(--line))"} strokeWidth={aligned ? 5 : 2} />
                <path d={starPath(150, 150, 90, 72, 8)} fill="none" stroke="rgb(var(--gold-bright))" strokeOpacity={0.35} strokeWidth={1.2} />
                {Array.from({ length: 72 }, (_, k) => {
                  const a = (k * 5 * Math.PI) / 180;
                  const r1 = k % 18 === 0 ? 118 : k % 2 === 0 ? 124 : 127;
                  return <line key={k} x1={150 + r1 * Math.sin(a)} y1={150 - r1 * Math.cos(a)} x2={150 + 132 * Math.sin(a)} y2={150 - 132 * Math.cos(a)}
                    stroke="rgb(var(--ink-soft))" strokeWidth={k % 18 === 0 ? 2 : 1} />;
                })}
                {["N", "E", "S", "W"].map((t, k) => {
                  const a = (k * Math.PI) / 2;
                  return <text key={t} x={150 + 104 * Math.sin(a)} y={150 - 104 * Math.cos(a) + 6} textAnchor="middle"
                    className="font-display" fontSize={18} fontWeight={700} fill={t === "N" ? "rgb(var(--bad))" : "rgb(var(--ink))"}>{t}</text>;
                })}
                <g transform={`rotate(${bearing.toFixed(2)} 150 150)`}>
                  <line x1="150" y1="150" x2="150" y2="52" stroke="rgb(var(--emerald))" strokeWidth={5} strokeLinecap="round" />
                  <path d="M150 32 140 54h20z" fill="rgb(var(--emerald))" />
                  <g transform={`translate(150 22) rotate(${(-bearing).toFixed(2)})`}>
                    <rect x="-11" y="-11" width="22" height="22" rx="2" fill="rgb(var(--ink))" />
                    <rect x="-11" y="-5" width="22" height="3.5" fill="rgb(var(--gold-bright))" />
                  </g>
                </g>
              </g>
              {heading != null && <path d="M150 4l-7 12h14z" fill="rgb(var(--gold))" />}
              <circle cx="150" cy="150" r="8" fill="rgb(var(--gold-bright))" stroke="rgb(var(--surface))" strokeWidth={3} />
            </svg>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="eyebrow">{loc.name}</span>
            <div className="font-display text-5xl leading-none tabular-nums text-emerald">{bearing.toFixed(1)}°</div>
            <p>Turn <b>{bearing.toFixed(0)}°</b> clockwise from true north, roughly {compassWord(bearing)}.</p>
            <p className="tabular-nums text-fg-muted">Distance to the Kaʿbah: {Math.round(km).toLocaleString()} km</p>
            {state === "on" ? (
              <p className={`font-bold ${aligned ? "text-success" : "text-gold"}`} role="status">
                {heading == null ? "Move your phone in a figure-8 to calibrate…" : aligned ? "You are facing the qibla." : "Turn until the green arrow points to the gold marker at the top."}
              </p>
            ) : (
              <div className="flex flex-col gap-1.5">
                <button type="button" className="btn self-start" onClick={enable}>Use live compass</button>
                {state === "unsupported" && <p className="text-[0.9rem] text-fg-muted">This device has no compass. Use the steps below.</p>}
                {state === "denied" && <p className="text-[0.9rem] text-fg-muted">Compass access was declined. Use the steps below.</p>}
              </div>
            )}
            <ol className="flex list-decimal flex-col gap-1.5 pl-5 text-fg-muted">
              <li>Lay your phone flat, away from metal and magnets.</li>
              <li>Open your phone’s compass and face north (0°).</li>
              <li>Turn clockwise until the compass reads {bearing.toFixed(0)}°. You are now facing the qibla.</li>
            </ol>
            <p className="text-[0.85rem] text-fg-muted">Facing the general direction (within 45° either side) is valid in the Hanafi school when you cannot see the Kaʿbah.</p>
          </div>
        </section>
      </Page>
    </>
  );
}
