import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";

export default function CTASection() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)", borderTop: "1px solid #27272a" }}
      aria-label="Call to Action"
    >
      <GreenBlob position="top-left" opacity={0.18} size="600px" />
      <GreenBlob position="bottom-right" opacity={0.12} size="500px" />
      {/* Decorative large text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black whitespace-nowrap"
          style={{
            fontSize: "clamp(6rem, 20vw, 18rem)",
            color: "rgba(107, 150, 134, 0.015)",
            letterSpacing: "-0.05em",
          }}
        >
          ARGOTIRTO
        </span>
      </div>

      {/* Decorative dot */}
      <div
        className="absolute top-8 right-8 w-32 h-32 rounded-full opacity-5"
        style={{ background: "#6B9686", filter: "blur(40px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 left-8 w-24 h-24 rounded-full opacity-10"
        style={{ background: "#6B9686", filter: "blur(30px)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                borderColor: "rgba(107,150,134,0.3)",
                color: "#6B9686",
                background: "rgba(107,150,134,0.05)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon" />
              KKN Kelompok 170 UMM
            </div>

            <h2
              className="font-display font-bold text-display-xl mb-5"
              style={{ color: "#ffffff" }}
            >
              Setiap Perjalanan{" "}
              <span className="text-neon drop-shadow-[0_0_15px_rgba(107,150,134,0.3)]">Meninggalkan Cerita.</span>
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "#a1a1aa" }}
            >
              Ikuti perjalanan KKN Kelompok 170 di Desa Argotirto — 30 mahasiswa, 30 hari, dan tak terhitung momen yang mengubah pandangan kami tentang dunia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dokumentasi" className="btn-primary">
                Jelajahi Dokumentasi
                <ArrowRight size={16} />
              </Link>
              <Link href="/artikel" className="btn-secondary">
                Baca Cerita Kami
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
