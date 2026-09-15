import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Caveat } from "next/font/google";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
  weight: ["400", "500", "600"],
});

// hand-written accent used only for the small "More Than Code" hero tag
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maher-ben-aicha.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Maher Ben Aicha — Software Engineering Student at ENIT",
    template: "%s | Maher Ben Aicha",
  },
  description:
    "Maher Ben Aicha, final-year software engineering student at ENIT. Projects in artificial intelligence, computer vision, machine learning, and full-stack development.",
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Maher Ben Aicha — Portfolio" }],
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
  verification: {
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_TOKEN_HERE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${space.variable} ${plex.variable} ${caveat.variable} font-sans bg-[#0d0f14] text-slate-100 antialiased`}>
        {/* Marks JS as available so the Hero/About progressive-enhancement
            reveal (components/motion/FadeIn) animates in instead of staying
            static-visible; see the `.reveal` rules in globals.css. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
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
