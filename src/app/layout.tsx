import type { Metadata } from "next";
import { Syne, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";

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
  title: 'Rahimanid Dian Purno | RD Purno — Developer & AI Student',
  applicationName: 'RD Purno',
  description: 'Rahimanid Dian Purno, known as RD Purno. Computer Science & Technology student from Bangladesh. Built AURA — real-time hand gesture PC control system. Targeting BSc in AI in Japan.',
  keywords: [
    'RD Purno',
    'Rahimanid Dian Purno',
    'RDPURNO26',
    'RD Purno portfolio',
    'Rahimanid Dian Purno portfolio',
    'AURA gesture control',
    'Bangladesh developer',
    'AI student Bangladesh',
  ],
  authors: [{ name: 'Rahimanid Dian Purno', url: 'https://rdpurno.vercel.app' }],
  creator: 'Rahimanid Dian Purno',
  metadataBase: new URL('https://rdpurno.vercel.app'),
  alternates: { canonical: 'https://rdpurno.vercel.app' },
  openGraph: {
    type: 'website',
    url: 'https://rdpurno.vercel.app',
    title: 'Rahimanid Dian Purno | RD Purno — Developer & AI Student',
    description: 'CST student from Bangladesh. Built AURA gesture control. Targeting BSc in AI in Japan.',
    siteName: 'RD Purno',
    images: [{ url: 'https://rdpurno.vercel.app/og-image.png', width: 1200, height: 630, alt: 'Rahimanid Dian Purno — RD Purno Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahimanid Dian Purno | RD Purno',
    description: 'CST student from Bangladesh. Built AURA. Targeting Japan for BSc in AI.',
    images: ['https://rdpurno.vercel.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    other: {
      'msvalidate.01': '4EC7C2EABFFC237544D4FA509E2CFB07',
    },
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
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-md font-mono text-sm"
        >
          Skip to content
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
