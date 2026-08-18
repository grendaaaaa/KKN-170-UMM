import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import MemberCard from "@/components/MemberCard";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Anggota KKN 170 UMM",
  description: "Kenali 30 mahasiswa di balik perjalanan KKN Kelompok 170 Universitas Muhammadiyah Malang di Desa Argotirto.",
};

export default function AnggotaPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "#09090b" }}
      >
        <GreenBlob position="top-right" opacity={0.15} size="500px" />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Anggota KKN 170"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Tim Kami"
              title="Anggota Kelompok"
              subtitle="Kenali orang-orang di balik perjalanan KKN Kelompok 170 Universitas Muhammadiyah Malang."
              variant="dark"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0 relative overflow-hidden" style={{ background: "#09090b" }}>
        <GreenBlob position="bottom-left" opacity={0.12} size="600px" />
        <div className="container-custom relative z-10">
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {members.map((member, index) => (
                <div key={member.id} className="animate-on-scroll">
                  <MemberCard member={member} />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Bottom decorative element */}
          <ScrollReveal delay={2}>
            <div className="mt-20 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(107,150,134,0.2)]">
                <span className="font-display font-black text-2xl text-neon">30</span>
              </div>
              <p className="text-sm font-semibold tracking-widest uppercase text-light-muted max-w-sm">
                Dari berbagai program studi, bersatu untuk satu tujuan pengabdian di Argotirto.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
