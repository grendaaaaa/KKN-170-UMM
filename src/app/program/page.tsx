"use client";

import { useState } from "react";
import Image from "next/image";
import { Filter } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ProgramCard from "@/components/ProgramCard";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";
import { programs, categories } from "@/data/programs";

export default function ProgramPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPrograms =
    activeCategory === "Semua"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "#09090b" }}
      >
        <GreenBlob position="top-right" opacity={0.12} size="550px" />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="Program KKN 170"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Aksi Nyata"
              title="Program Kerja"
              subtitle="Dari ide menjadi aksi nyata. Jelajahi berbagai program pengabdian yang kami laksanakan di Desa Argotirto."
              variant="dark"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0 relative overflow-hidden" style={{ background: "#09090b" }}>
        <GreenBlob position="bottom-left" opacity={0.10} size="600px" />
        <div className="container-custom relative z-10">
          {/* Filter Bar */}
          <ScrollReveal delay={1}>
            <div className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-4 border-b pb-6 border-dark-border">
              <div className="flex items-center gap-2 text-neon font-semibold text-sm uppercase tracking-wider flex-shrink-0">
                <Filter size={18} />
                <span>Filter Kategori:</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      activeCategory === category
                        ? "bg-neon text-black shadow-md shadow-neon/20"
                        : "bg-dark-card text-light-muted border border-dark-border hover:border-neon hover:text-neon"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, index) => (
                <ScrollReveal key={program.id} delay={(index % 3) as 0 | 1 | 2}>
                  <ProgramCard program={program} index={index} />
                </ScrollReveal>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="w-20 h-20 mx-auto bg-dark-card rounded-full flex items-center justify-center mb-4 border border-dark-border">
                  <Filter size={32} className="text-light-muted" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  Tidak ada program
                </h3>
                <p className="text-light-muted">
                  Belum ada program untuk kategori {activeCategory}.
                </p>
                <button 
                  onClick={() => setActiveCategory("Semua")}
                  className="mt-4 text-neon font-semibold underline underline-offset-4"
                >
                  Lihat Semua Kategori
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
