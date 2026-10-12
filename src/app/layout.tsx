import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Zitzke Mining Solutions | Mining Fire Protection",
    template: "%s | Zitzke Mining Solutions",
  },
  description:
    "Zitzke Mining Solutions provides fire detection, fire suppression, monitoring and safety services for surface and underground mining operations in South Africa.",
  keywords: [
    "Zitzke Mining Solutions",
    "mining fire protection",
    "vehicle fire suppression",
    "conveyor fire suppression",
    "underground mining fire protection",
    "fire detection systems",
    "mining safety services",
    "Potchefstroom",
    "South Africa",
  ],
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
