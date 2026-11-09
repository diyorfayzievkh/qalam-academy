// ---- Security headers (same approach as Digital Workspace) ----
// No script-src: the theme init script is inline.
const CSP_BASE = "base-uri 'self'; form-action 'self'; object-src 'none'; frame-ancestors 'self'";

const securityHeaders = [
  {
    source: "/:path*",
    headers: [
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Content-Security-Policy", value: CSP_BASE },
      // Geolocation and compass are used by Prayer Times and Qibla on our own pages only.
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), accelerometer=(self), gyroscope=(self), magnetometer=(self)" },
    ],
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return securityHeaders;
  },
};

export default nextConfig;
