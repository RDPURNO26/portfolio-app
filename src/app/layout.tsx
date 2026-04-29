import type { Metadata } from "next";
import { Syne, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RD Purno — Developer, Researcher, Builder",
  description:
    "Portfolio of Rahimanid Dian Purno — CS student from Bangladesh building AI systems, Japanese learning platforms, and IoT solutions. Targeting BSc in Japan and PhD in AI.",
  keywords: [
    "Rahimanid Dian Purno",
    "AURA",
    "AI",
    "portfolio",
    "developer",
    "Bangladesh",
    "Japan",
    "machine learning",
    "gesture control",
  ],
  authors: [{ name: "Rahimanid Dian Purno" }],
  openGraph: {
    title: "RD Purno — Developer, Researcher, Builder",
    description:
      "CS student from Bangladesh. Building AI systems. Targeting Japan.",
    type: "website",
    images: [{ url: "/the sharing pic.jpg", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
