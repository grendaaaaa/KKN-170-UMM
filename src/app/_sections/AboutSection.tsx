import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, MapPin, Calendar } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";

const infoItems = [
  { icon: GraduationCap, label: "Universitas", value: "Universitas Muhammadiyah Malang" },
  { icon: Users, label: "Kelompok", value: "KKN Kelompok 170" },
  { icon: MapPin, label: "Lokasi", value: "Desa Argotirto, Kab. Malang" },
  { icon: Users, label: "Jumlah Anggota", value: "30 Mahasiswa" },
  { icon: Calendar, label: "Periode", value: "1 – 30 Agustus 2026" },
  { icon: GraduationCap, label: "Fokus Pengabdian", value: "Pendidikan, Kesehatan, UMKM, Lingkungan" },
];

export default function AboutSection() {
  return (
    <section
      className="section-padding pt-28 relative overflow-hidden"
      style={{ background: "#0f0f12" }}
      aria-label="Tentang KKN 170"
    >
      <GreenBlob position="top-left" opacity={0.10} size="500px" />
      <GreenBlob position="bottom-right" opacity={0.07} size="350px" />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Image */}
          <ScrollReveal>
            <div className="relative mb-12 sm:mb-0">
              {/* Main image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-dark-border bg-dark">
                <Image
                  src="/images/hero/hero-2.jpg"
                  alt="Anggota KKN 170 bersama warga Desa Argotirto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Fallback */}
                <div
                  className="absolute inset-0 -z-10 bg-dark"
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="font-display text-6xl font-black text-neon/10">170</span>
                  </div>
                </div>
              </div>

              {/* Secondary image — offset (Hidden on mobile to avoid overlapping issues) */}
              <div
                className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-card border-4 border-dark-card"
              >
                <Image
                  src="/images/village/village-01.jpg"
                  alt="Desa Argotirto"
                  fill
                  className="object-cover"
                  sizes="176px"
                  loading="lazy"
                />
                <div className="absolute inset-0 -z-10 bg-dark" />
              </div>

              {/* Label card */}
              <div
                className="absolute -top-4 -left-4 px-4 py-3 rounded-xl shadow-card border border-neon/30"
                style={{
                  background: "#18181b",
                  color: "#6B9686",
                }}
              >
                <div className="text-xs font-semibold tracking-widest uppercase text-light-muted mb-0.5">
                  Kelompok
                </div>
                <div className="font-display font-bold text-lg">KKN 170</div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Content */}
          <ScrollReveal delay={2}>
            <div>
              <SectionTitle
                eyebrow="Tentang Kami"
                title="KKN Kelompok 170 UMM"
                align="left"
              />

              <div className="mt-5 space-y-4 text-[15px] text-light-muted leading-relaxed">
                <p>
                  KKN Kelompok 170 Universitas Muhammadiyah Malang merupakan kelompok mahasiswa yang melaksanakan pengabdian kepada masyarakat di{" "}
                  <strong className="text-neon font-semibold">Desa Argotirto</strong>, Kecamatan Sumbermanjing Wetan, Kabupaten Malang.
                </p>
                <p>
                  Selama 30 hari, 30 mahasiswa dari berbagai program studi berkumpul, berkolaborasi, dan bersama-sama menciptakan dampak nyata untuk masyarakat desa melalui program-program yang inovatif dan tepat sasaran.
                </p>
                <p>
                  Kami percaya bahwa pengabdian yang bermakna bukan hanya tentang apa yang kami berikan, tetapi juga tentang apa yang kami pelajari dari masyarakat lokal yang luar biasa ini.
                </p>
              </div>

              {/* Info grid */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 p-3 rounded-xl border border-dark-border transition-colors duration-200 hover:border-neon/30"
                      style={{ background: "#18181b" }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={14} className="text-neon" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-light-muted uppercase tracking-wider mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-[13px] font-medium text-white leading-snug">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/tentang" className="btn-primary">
                  Selengkapnya
                  <ArrowRight size={15} />
                </Link>
                <Link href="/anggota" className="btn-secondary">
                  Lihat Anggota
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
