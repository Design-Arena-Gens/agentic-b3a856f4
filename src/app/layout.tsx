import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulse Digital ? Growth-focused Marketing Agency",
  description:
    "We help SaaS and eCommerce brands acquire, convert, and retain customers through paid media, SEO, and CRO.",
  openGraph: {
    title: "Pulse Digital ? Growth-focused Marketing Agency",
    description:
      "We help SaaS and eCommerce brands acquire, convert, and retain customers through paid media, SEO, and CRO.",
    url: "https://agentic-b3a856f4.vercel.app",
    siteName: "Pulse Digital",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pulse Digital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse Digital ? Growth-focused Marketing Agency",
    description:
      "We help SaaS and eCommerce brands acquire, convert, and retain customers.",
    images: ["/og.png"],
  },
  metadataBase:
    typeof window === "undefined"
      ? new URL("https://agentic-b3a856f4.vercel.app")
      : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
