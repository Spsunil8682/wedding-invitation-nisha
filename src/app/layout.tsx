import type { Metadata } from "next";
import { Inter, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Sunil ❤️ Nisha - Wedding Invitation",
  description:
    "Join us in celebrating the union of Sunil and Nisha. Two hearts, one journey.",
  keywords: [
    "wedding",
    "invitation",
    "Sunil",
    "Nisha",
    "marriage",
    "celebration",
  ],
  authors: [{ name: "Wedding Team" }],
  openGraph: {
    title: "Sunil ❤️ Nisha - Wedding Invitation",
    description:
      "Join us in celebrating the union of Sunil and Nisha. Two hearts, one journey.",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunil and Nisha Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunil ❤️ Nisha - Wedding Invitation",
    description:
      "Join us in celebrating the union of Sunil and Nisha. Two hearts, one journey.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#d4af37" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${dancingScript.variable} ${playfairDisplay.variable} antialiased`}
      >
        <LanguageProvider>
          <LanguageToggle />
          <div className="min-h-screen bg-gradient-romantic">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
