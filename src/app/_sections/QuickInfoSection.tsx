"use client";

import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  {
    id: "anggota",
    value: 30,
    suffix: "",
    label: "Anggota",
    description: "Mahasiswa aktif UMM",
  },
  {
    id: "kelompok",
    value: 1,
    suffix: "",
    label: "Kelompok",
    description: "Satu tim, satu visi",
  },
  {
    id: "desa",
    value: 1,
    suffix: "",
    label: "Desa Pengabdian",
    description: "Desa Argotirto, Malang",
  },
  {
    id: "cerita",
    value: Infinity,
    suffix: "",
    label: "Cerita & Pengalaman",
    description: "Kenangan tak terhitung",
  },
];

export default function QuickInfoSection() {
  return (
    <section
      className="relative pt-24 pb-10 border-b border-dark-border"
      style={{ background: "#18181b" }}
      aria-label="Statistik KKN"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-dark-border">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center text-center px-4 py-6 md:py-4 group"
            >
              <div
                className="font-display font-black text-4xl md:text-5xl text-neon mb-1 group-hover:scale-105 transition-transform duration-300"
              >
                {stat.value === Infinity ? (
                  <span>∞</span>
                ) : (
                  <AnimatedCounter target={stat.value} duration={1500} />
                )}
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">
                {stat.label}
              </div>
              <div className="text-[12px] text-light-muted hidden md:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
