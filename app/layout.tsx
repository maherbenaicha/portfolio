import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/fraunces/latin-400-italic.css";
import "@fontsource-variable/jetbrains-mono";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/ui/JsonLd";
import "./globals.css";


const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maherbenaicha.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Maher Ben Aicha (maherbenaicha) — AI & Software Engineering Portfolio",
    template: "%s | Maher Ben Aicha",
  },
  description:
    "Maher Ben Aicha, software engineering student at ENIT. Projects in artificial intelligence, computer vision, machine learning, and full-stack development.",
  keywords: [
    "Maher Ben Aicha", "ENIT", "Software Engineering Tunisia",
    "Artificial Intelligence", "Computer Vision", "Machine Learning",
    "Deep Learning", "YOLOv8", "React", "Node.js", "Python",
    "Next.js", "Portfolio",
  ],
  authors: [{ name: "Maher Ben Aicha", url: BASE_URL }],
  creator: "Maher Ben Aicha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Maher Ben Aicha",
    title: "Maher Ben Aicha — Software Engineering Student",
    description: "Final-year software engineering student at ENIT working on AI, computer vision, machine learning, and full-stack development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maher Ben Aicha",
    description: "Software Engineering · AI · Computer Vision · Full-Stack Development · ENIT",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){d.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme: light)').matches){d.setAttribute('data-theme','light')}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="font-sans antialiased"
      >
        <PersonJsonLd />
        <WebsiteJsonLd />
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
