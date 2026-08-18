import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ProgramCard from "@/components/ProgramCard";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";
import { programs } from "@/data/programs";

export default function ProgramsPreviewSection() {
  const featuredPrograms = programs.slice(0, 3);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#0f0f12" }}
      aria-label="Program Kerja"
    >
      <GreenBlob position="bottom-right" opacity={0.13} size="500px" />
      <GreenBlob position="top-left" opacity={0.08} size="350px" />
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Program Kerja"
              title="Apa yang Kami Kerjakan"
              subtitle="Program-program nyata yang kami rancang dan laksanakan bersama masyarakat Desa Argotirto."
              align="left"
            />
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link
              href="/program"
              className="btn-secondary flex-shrink-0 whitespace-nowrap"
            >
              Lihat Semua Program
              <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPrograms.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal>
          <div
            className="mt-10 p-6 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-dark-border"
            style={{ background: "#18181b" }}
          >
            {[
              { value: "8", label: "Total Program" },
              { value: "7", label: "Kategori" },
              { value: "30", label: "Hari Pengabdian" },
              { value: "100%", label: "Selesai" },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-display font-bold text-2xl text-neon mb-1">
                  {item.value}
                </div>
                <div className="text-[12px] text-light-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
