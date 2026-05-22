import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const googleSans = localFont({
  src: "./fonts/google-sans-flex.ttf",
  variable: "--font-google-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imagine-mcp.vyro.ai"),
  title: {
    default: "Imagine MCP. Creative tools for any agent.",
    template: "%s | Imagine MCP",
  },
  description:
    "An MCP server for ImagineArt. Six creative endpoints (text-to-image, video, music, upscaler, background remover, balance) for Claude, Cursor, Cline, Hermes, OpenClaw, and any MCP-compatible client.",
  applicationName: "Imagine MCP",
  authors: [{ name: "Vyro AI" }],
  keywords: [
    "MCP",
    "Model Context Protocol",
    "ImagineArt",
    "Claude",
    "Cursor",
    "AI agents",
    "text-to-image",
    "text-to-video",
  ],
  openGraph: {
    type: "website",
    siteName: "Imagine MCP",
    title: "Imagine MCP. Creative tools for any agent.",
    description:
      "An MCP server for ImagineArt. Six creative endpoints for Claude, Cursor, and any MCP-compatible client.",
    images: [{ url: "/imagine-logo.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imagine MCP. Creative tools for any agent.",
    description:
      "An MCP server for ImagineArt. Six creative endpoints for any MCP-compatible client.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/imagine-logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${googleSans.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://cdn-imagine.vyro.ai"
          crossOrigin=""
        />
      </head>
      <body className="font-sans text-content-primary">
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {children}
      </body>
    </html>
  );
}
