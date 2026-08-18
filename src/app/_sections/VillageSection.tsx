import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";
import { village } from "@/data/village";

export default function VillageSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#09090b" }}
      aria-label="Mengenal Desa Argotirto"
    >
      <GreenBlob position="top-right" opacity={0.15} size="600px" />
      <GreenBlob position="bottom-left" opacity={0.10} size="400px" />
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Mengenal Argotirto"
            title="Desa Argotirto"
            subtitle={`${village.subdistrict} · ${village.regency} · ${village.province}`}
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* RIGHT — Images mosaic */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3">
              {/* Large top-left */}
              <div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden shadow-card border border-dark-border">
                <Image
                  src="/images/village/village-01.jpg"
                  alt="Pemandangan Desa Argotirto"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 -z-10 bg-dark" />
                {/* Caption overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: "linear-gradient(to top, rgba(9,9,11,0.9), transparent)" }}
                >
                  <p className="text-white text-[13px] font-medium">
                    Pemandangan Desa Argotirto dari bukit
                  </p>
                </div>
              </div>
              {/* Two smaller */}
              {village.photos.slice(1, 3).map((photo, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-card border border-dark-border"
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 -z-10 bg-dark" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* LEFT — Content */}
          <ScrollReveal delay={2}>
            <div className="space-y-5">
              <p className="text-[15px] text-light-muted leading-relaxed">
                {village.description}
              </p>

              {/* Village stats */}
              <div className="grid grid-cols-2 gap-3 py-4">
                {[
                  { label: "Luas Wilayah", value: village.area },
                  { label: "Jumlah Penduduk", value: village.population },
                  { label: "Kecamatan", value: "Sumbermanjing Wetan" },
                  { label: "Kabupaten", value: "Malang" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-xl border border-dark-border"
                    style={{ background: "#18181b" }}
                  >
                    <div className="text-[11px] text-light-muted uppercase tracking-wider mb-1 font-semibold">
                      {item.label}
                    </div>
                    <div className="text-[14px] font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Potentials */}
              <div>
                <h3 className="text-[13px] font-semibold tracking-widest uppercase text-neon mb-3">
                  Potensi Desa
                </h3>
                <div className="space-y-2">
                  {village.potentials.slice(0, 4).map((potential) => (
                    <div
                      key={potential.title}
                      className="flex items-start gap-3 p-3 rounded-lg border border-dark-border"
                      style={{ background: "#18181b" }}
                    >
                      <span className="text-xl flex-shrink-0 mt-0.5">{potential.icon}</span>
                      <div>
                        <div className="text-[13px] font-semibold text-white mb-0.5">
                          {potential.title}
                        </div>
                        <div className="text-[12px] text-light-muted leading-snug">
                          {potential.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/tentang" className="btn-secondary inline-flex">
                Pelajari Lebih Lanjut
                <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
