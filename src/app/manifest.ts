import type { MetadataRoute } from "next";

// Installable on phones and tablets as a home-screen app.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Qalam Academy",
    short_name: "Qalam Academy",
    description: "Learn prayer, faith and good character.",
    start_url: "/",
    display: "standalone",
    background_color: "#F1F4EE",
    theme_color: "#0D4A3B",
  };
}
