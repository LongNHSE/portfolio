import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import Tracker from "@/components/main/TrackerGoogle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Showcasing my projects and skills",
  icons: {
    icon: "/favicon.ico", // ✅ This will be applied automatically
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      <SpeedInsights />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased background-gradient`}
      >
        {/* <Tracker /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
