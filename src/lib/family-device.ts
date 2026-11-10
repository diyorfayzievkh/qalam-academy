// The family remembered on this device, so children only need to tap their
// name and type their PIN. Saved when a parent (or child) of the family signs
// in here. It holds the family code and children's first names, nothing else.

export type DeviceFamily = { code: string; name: string; children: string[] };
const KEY = "qalam-family";

export function readDeviceFamily(): DeviceFamily | null {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || "null");
    return v && typeof v.code === "string" && v.code ? { code: v.code, name: String(v.name || ""), children: Array.isArray(v.children) ? v.children.map(String) : [] } : null;
  } catch { return null; }
}

export function saveDeviceFamily(f: Partial<DeviceFamily>) {
  try {
    const cur = readDeviceFamily();
    const code = f.code || cur?.code; if (!code) return;
    const same = !cur || cur.code === code;
    const children = f.children ?? (same ? cur?.children ?? [] : []);
    localStorage.setItem(KEY, JSON.stringify({ code, name: f.name ?? (same ? cur?.name ?? "" : ""), children: [...new Set(children)].slice(0, 12) }));
  } catch {}
}

export function forgetDeviceFamily() { try { localStorage.removeItem(KEY); } catch {} }
