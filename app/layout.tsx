import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PIXELFORGEE — Luxury Visual Design Studio",
  description:
    "Crafting cinematic, high-end visual experiences. Luxury poster design, video editing, and brand identity by Muhammad Mudassir.",
  generator: "v0.app",
  keywords: [
    "PIXELFORGEE",
    "luxury design studio",
    "graphic design Kashmir",
    "video editing",
    "cinematic visuals",
    "brand identity",
    "poster design",
    "Muhammad Mudassir",
  ],
  authors: [{ name: "Muhammad Mudassir" }],
  openGraph: {
    title: "PIXELFORGEE — Luxury Visual Design Studio",
    description: "Where ideas are transformed into cinematic, high-end visuals that command attention.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
