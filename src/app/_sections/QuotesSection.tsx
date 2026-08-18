import Image from "next/image";
import { Quote } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";
import { members } from "@/data/members";

// Pick members with strong quotes
const quotedMembers = [
  members[0], // Ketua
  members[5], // Kesehatan
  members[8], // Lingkungan
  members[10], // Humas
  members[9], // UMKM
  members[7], // Pendidikan
];

export default function QuotesSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#09090b" }}
      aria-label="Kesan dan Pesan"
    >
      <GreenBlob position="top-right" opacity={0.12} size="500px" />
      <GreenBlob position="bottom-left" opacity={0.08} size="350px" />
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Yang Kami Bawa Pulang"
            title="Suara dari Argotirto"
            subtitle="Kata-kata yang lahir dari pengalaman, bukan dari teks pelajaran."
          />
        </ScrollReveal>

        {/* Featured quote */}
        <ScrollReveal>
          <div
            className="mt-10 mb-8 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden border border-neon/20 shadow-[0_0_20px_rgba(107,150,134,0.05)]"
            style={{ background: "#18181b" }}
          >
            {/* Large decorative quote mark */}
            <div
              className="absolute top-4 left-6 font-display font-black leading-none select-none pointer-events-none"
              style={{ fontSize: "8rem", color: "rgba(107, 150, 134, 0.03)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="relative z-10">
              <Quote
                size={28}
                className="mx-auto mb-5 opacity-40 text-neon"
              />
              <p
                className="font-display font-bold text-display-sm max-w-3xl mx-auto mb-6 leading-relaxed text-white"
              >
                &ldquo;KKN bukan hanya tentang apa yang kami berikan kepada masyarakat, tetapi juga tentang apa yang kami pelajari dari mereka. Argotirto mengajarkan kami tentang ketulusan, kesederhanaan, dan makna sejati dari pengabdian.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neon/30">
                  <Image
                    src={members[0].photo}
                    alt={members[0].name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full h-full bg-dark -mt-10 -z-10" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">
                    {members[0].name}
                  </div>
                  <div className="text-xs text-light-muted">
                    {members[0].role} · KKN 170
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </ScrollReveal>

        {/* Quote grid */}
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quotedMembers.slice(1).map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl border border-dark-border transition-all duration-300 hover:shadow-card hover:border-neon/30"
                style={{
                  background: "#18181b",
                }}
              >
                <Quote size={18} className="text-neon/20 mb-3" />
                <blockquote>
                  <p className="text-[14px] text-light-muted leading-relaxed mb-5 italic">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-dark flex-shrink-0">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white">
                        {member.name.split(" ").slice(0, 2).join(" ")}
                      </div>
                      <div className="text-[11px] text-light-muted">{member.role}</div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
