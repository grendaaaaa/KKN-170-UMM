import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KKN Kelompok 170 UMM — Desa Argotirto",
    template: "%s | KKN 170 UMM",
  },
  description:
    "Website dokumentasi perjalanan KKN Kelompok 170 Universitas Muhammadiyah Malang di Desa Argotirto, Kecamatan Sumbermanjing Wetan, Kabupaten Malang. 30 mahasiswa, 30 hari, satu perjalanan bermakna.",
  keywords: [
    "KKN 170",
    "UMM",
    "Universitas Muhammadiyah Malang",
    "Desa Argotirto",
    "Sumbermanjing Wetan",
    "Kabupaten Malang",
    "KKN 2026",
  ],
  authors: [{ name: "KKN Kelompok 170 UMM" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kkn170umm.vercel.app",
    siteName: "KKN Kelompok 170 UMM",
    title: "KKN Kelompok 170 UMM — Desa Argotirto",
    description:
      "Website dokumentasi perjalanan KKN Kelompok 170 Universitas Muhammadiyah Malang di Desa Argotirto, Kecamatan Sumbermanjing Wetan, Kabupaten Malang.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KKN Kelompok 170 UMM — Desa Argotirto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KKN Kelompok 170 UMM — Desa Argotirto",
    description:
      "Website dokumentasi perjalanan KKN Kelompok 170 UMM di Desa Argotirto, Kabupaten Malang.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased" style={{ fontFamily: "var(--font-inter)" }}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
