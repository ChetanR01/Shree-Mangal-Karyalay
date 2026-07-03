import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Tiro_Devanagari_Marathi, Mukta } from "next/font/google";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const tiro = Tiro_Devanagari_Marathi({
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  variable: "--font-tiro",
});

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: { canonical: "/" },
  title: "Shree Mangal Karyalay, Lonar | Premier Banquet Hall & Wedding Lawn",
  description:
    "Shree Mangal Karyalay, Lonar — a royal, air-conditioned banquet hall with a 60,000 sq.ft. lawn for weddings, engagements, haldi, and celebrations. Book your auspicious occasion today.",
  keywords: [
    "Shree Mangal Karyalay",
    "Lonar banquet hall",
    "wedding hall Lonar",
    "marriage lawn Lonar",
    "mangal karyalay Buldhana",
    "banquet hall Maharashtra",
  ],
  openGraph: {
    title: "Shree Mangal Karyalay, Lonar",
    description:
      "A royal venue for weddings and celebrations in Lonar — grand lawns, air-conditioned halls, and timeless hospitality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${tiro.variable} ${mukta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
