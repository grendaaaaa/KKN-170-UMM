import type { Metadata } from "next";
import HeroSection from "./_sections/HeroSection";
import QuickInfoSection from "./_sections/QuickInfoSection";
import AboutSection from "./_sections/AboutSection";
import VillageSection from "./_sections/VillageSection";
import ProgramsPreviewSection from "./_sections/ProgramsPreviewSection";
import GallerySection from "./_sections/GallerySection";
import JourneySection from "./_sections/JourneySection";
import QuotesSection from "./_sections/QuotesSection";
import CTASection from "./_sections/CTASection";

export const metadata: Metadata = {
  title: "KKN Kelompok 170 UMM — Desa Argotirto",
  description:
    "Bersama mengabdi, tumbuh, dan berdampak. Perjalanan 30 mahasiswa UMM di Desa Argotirto, Kecamatan Sumbermanjing Wetan, Kabupaten Malang.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VillageSection />
      <ProgramsPreviewSection />
      <GallerySection />
      <JourneySection />
      <QuotesSection />
      <CTASection />
    </>
  );
}
