import type { Metadata, Viewport } from "next";
// Fonts are self-hosted (as in Digital Workspace): no visitor IP goes to Google.
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/reem-kufi/500.css";
import "@fontsource/reem-kufi/600.css";
import "@fontsource/reem-kufi/700.css";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/700.css";
import "@fontsource/literata/400.css";
import "@fontsource/literata/600.css";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { ProgressProvider } from "@/components/progress";
import { AccountProvider } from "@/components/account";
import { LangProvider } from "@/components/lang";
import { KidsProvider } from "@/components/kids";
import { ProfileProvider } from "@/components/profile";
import { themeInitScript } from "@/components/theme";
import { PushSync } from "@/lib/push-client";

export const metadata: Metadata = {
  title: "Qalam Academy — learn prayer, faith and good character",
  description: "A gamified way for families to learn Islam: step-by-step Hanafi prayer guide, prayer times, qibla, quizzes and badges.",
  applicationName: "Qalam Academy",
  appleWebApp: { capable: true, title: "Qalam Academy", statusBarStyle: "black-translucent" },
  icons: { icon: "/icon-192.png", apple: "/apple-touch-icon.png" },
};

// viewport-fit=cover lets the tab bar sit above the iPhone home indicator.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0D4A3B" },
    { media: "(prefers-color-scheme: dark)", color: "#0B3329" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ProgressProvider>
          <AccountProvider>
          <ProfileProvider>
            <LangProvider>
              <KidsProvider>
                <AppShell>{children}</AppShell>
                <PushSync />
              </KidsProvider>
            </LangProvider>
          </ProfileProvider>
          </AccountProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
