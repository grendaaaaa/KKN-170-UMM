"use client";

import Link from "next/link";
import Image from "next/image";
import GreenBlob from "@/components/GreenBlob";
import { MapPin, Users, Calendar, BookOpen } from "lucide-react";
import { useEffect, useRef } from "react";


const stats = [
  { icon: MapPin, value: "1", label: "DESA" },
  { icon: Users, value: "30", label: "MAHASISWA" },
  { icon: BookOpen, value: "10+", label: "PROGRAM KERJA" },
  { icon: Calendar, value: "30", label: "HARI" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleScroll = () => {
      const parallaxEl = hero.querySelector(".hero-parallax") as HTMLElement;
      if (parallaxEl) {
        parallaxEl.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== HERO PHOTO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col"
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div className="hero-parallax absolute inset-0 will-change-transform overflow-hidden">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="KKN Kelompok 170 di Desa Argotirto"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay gradient — lebih terang di tengah, gelap di bawah */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.7) 75%, rgba(15,15,18,1) 100%)",
            }}
          />
        </div>

        {/* Green glow blob decorations */}
        <GreenBlob position="top-right" opacity={0.10} size="600px" />
        <GreenBlob position="bottom-left" opacity={0.07} size="400px" />

        {/* Text Content — vertically centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          
          {/* Logo Slot */}
          <div className="mb-6 relative w-20 h-20 md:w-24 md:h-24 opacity-90 hover:opacity-100 transition-opacity">
            <Image 
              src="/images/logos/logo-kkn170.png" 
              alt="Logo KKN 170" 
              fill 
              className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
            />
          </div>

          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/70 font-medium mb-4">
            KKN Kelompok 170 — Universitas Muhammadiyah Malang
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 drop-shadow-xl">
            HAI, INI CERITA KAMI
          </h1>
          <p className="text-base md:text-lg text-white/75 max-w-xl mb-10 leading-relaxed">
            Sebuah cerita 30 hari yang diisi dengan kebersamaan,
            pembelajaran, dan pengalaman baru.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/tentang"
              className="px-8 py-3.5 rounded-full text-sm font-semibold bg-neon text-black hover:bg-neon-light transition-all duration-200 shadow-lg"
            >
              Tentang Kami
            </Link>
            <Link
              href="/tentang"
              className="px-8 py-3.5 rounded-full text-sm font-semibold border-2 border-white/50 text-white hover:bg-white/10 transition-all duration-200"
            >
              Tentang Argotirto
            </Link>
          </div>
        </div>

        {/* Stat cards — anchored to BOTTOM of hero, half-overlapping next section */}
        <div className="relative z-20 w-full" style={{ marginBottom: "-64px" }}>
          <div className="container-custom px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-5 md:p-7 text-center shadow-2xl"
                    style={{ background: "#f0efeb" }}
                  >
                    <div className="flex justify-center mb-3">
                      <Icon size={20} className="text-neon" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[11px] tracking-widest text-[#888] font-semibold uppercase">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Spacer so AboutSection clears the overlapping cards */}
      <div style={{ background: "#0f0f12", height: "64px" }} />
    </>
  );
}
