import type { Metadata } from "next";
import Image from "next/image";
import { Users, Target, BookOpen, Heart, Award, MapPin } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";
import { village } from "@/data/village";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal KKN Kelompok 170 UMM dan Desa Argotirto, Kecamatan Sumbermanjing Wetan, Kabupaten Malang.",
};

export default function TentangPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "#09090b" }}
      >
        <GreenBlob position="top-left" opacity={0.12} size="500px" />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Desa Argotirto"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-6" style={{ borderColor: "rgba(107,150,134,0.2)", background: "rgba(107,150,134,0.05)", color: "#6B9686" }}>
              <span className="text-xs font-semibold tracking-widest uppercase">
                Profil & Sejarah
              </span>
            </div>
            <h1 className="font-display font-bold text-display-xl text-white mb-6 max-w-4xl mx-auto">
              Tentang KKN 170 & <br className="hidden md:block" />
              <span className="text-neon drop-shadow-[0_0_15px_rgba(107,150,134,0.3)]">Desa Argotirto</span>
            </h1>
            <p className="text-lg md:text-xl text-light-muted max-w-2xl mx-auto">
              Mengenal lebih dekat kolaborasi 30 mahasiswa UMM dengan masyarakat Desa Argotirto.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Visi Misi KKN */}
      <section className="section-padding relative overflow-hidden" style={{ background: "#0f0f12" }}>
        <GreenBlob position="center-right" opacity={0.10} size="450px" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-dark-border bg-dark">
                <Image
                  src="/images/hero/hero-2.jpg"
                  alt="Kelompok KKN 170"
                  fill
                  className="object-cover"
                />
                {/* Fallback */}
                <div className="absolute inset-0 -z-10 bg-dark flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-neon/10">170</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <SectionTitle
                eyebrow="Tujuan & Harapan"
                title="Mengabdi untuk Negeri"
                subtitle="Kuliah Kerja Nyata (KKN) Kelompok 170 UMM adalah wujud nyata Tri Dharma Perguruan Tinggi: Pendidikan, Pengabdian kepada Masyarakat, dan Pemberdayaan."
                align="left"
              />
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Misi Utama",
                    desc: "Memberdayakan masyarakat Desa Argotirto melalui program-program inovatif dan tepat guna.",
                  },
                  {
                    icon: Users,
                    title: "Pendekatan Kolaboratif",
                    desc: "Tidak menggurui, melainkan belajar dan bekerja sama dengan masyarakat untuk mencapai tujuan bersama.",
                  },
                  {
                    icon: Heart,
                    title: "Keberlanjutan",
                    desc: "Merancang program yang manfaatnya dapat terus dirasakan meskipun masa pengabdian kami telah selesai.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0 border border-neon/20">
                        <Icon size={20} className="text-neon" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 text-lg">{item.title}</h3>
                        <p className="text-[15px] text-light-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Profil Desa Argotirto */}
      <section className="section-padding relative overflow-hidden" style={{ background: "#09090b" }}>
        <GreenBlob position="bottom-left" opacity={0.08} size="550px" />
        <div className="container-custom max-w-4xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-neon mb-4">
                <MapPin size={20} />
                <span className="font-semibold tracking-widest uppercase text-sm">Lokasi Pengabdian</span>
              </div>
              <h2 className="font-display font-bold text-display-lg text-white mb-6">
                Profil Desa Argotirto
              </h2>
              <p className="text-lg text-light-muted leading-relaxed">
                {village.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose-kkn max-w-none">
              <h3>Sejarah Singkat</h3>
              <p className="text-light-muted">{village.history}</p>

              <h3>Kondisi Geografis</h3>
              <p className="text-light-muted">{village.geography}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="p-6 rounded-2xl bg-dark-card border border-dark-border shadow-sm">
                  <h4 className="font-semibold text-neon mb-3 flex items-center gap-2">
                    <BookOpen size={18} /> Budaya Masyarakat
                  </h4>
                  <p className="text-sm leading-relaxed text-light-muted m-0">{village.culture}</p>
                </div>
                <div className="p-6 rounded-2xl bg-dark-card border border-dark-border shadow-sm">
                  <h4 className="font-semibold text-neon mb-3 flex items-center gap-2">
                    <Award size={18} /> Tantangan Utama
                  </h4>
                  <ul className="text-sm leading-relaxed text-light-muted m-0 pl-4 space-y-1">
                    {village.challenges.map((challenge, idx) => (
                      <li key={idx}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Potensi Desa Grid */}
      <section className="section-padding" style={{ background: "#0f0f12" }}>
        <div className="container-custom">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Kekayaan Lokal"
              title="Potensi Desa"
              subtitle="Argotirto memiliki berbagai potensi alam dan sumber daya manusia yang luar biasa."
            />
          </ScrollReveal>
          
          <ScrollReveal stagger>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {village.potentials.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-dark-border bg-dark-card hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-card hover:border-neon/30" style={{ background: "#18181b" }}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-light-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
