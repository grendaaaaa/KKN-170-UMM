import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, GraduationCap, Building2, Quote, Hash } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { members } from "@/data/members";
import ScrollReveal from "@/components/ScrollReveal";

export function generateStaticParams() {
  return members.map((m) => ({
    id: m.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id.toString() === params.id);
  if (!member) return { title: "Anggota Tidak Ditemukan" };
  
  return {
    title: `${member.name} | Profil Anggota`,
    description: `Profil ${member.name}, ${member.role} KKN Kelompok 170 UMM dari program studi ${member.major}.`,
  };
}

export default function AnggotaDetailPage({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id.toString() === params.id);

  if (!member) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 md:pt-32" style={{ background: "#09090b", minHeight: "100vh" }}>
      <div className="container-custom max-w-5xl">
        <ScrollReveal>
          <Link href="/anggota" className="inline-flex items-center gap-2 text-neon hover:text-white transition-colors duration-200 mb-8 text-sm font-semibold">
            <ArrowLeft size={16} />
            Kembali ke Anggota
          </Link>
        </ScrollReveal>

        <div className="bg-dark-card rounded-3xl overflow-hidden shadow-card border border-dark-border">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left: Big Photo */}
            <div className="md:col-span-5 relative bg-dark aspect-[4/5] md:aspect-auto md:h-full min-h-[400px]">
              <Image
                src={member.photo}
                alt={`Foto ${member.name}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
              
              {/* Photo Overlay Data */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block px-3 py-1 bg-neon/80 text-black rounded-full text-xs font-semibold mb-3 border border-white/20">
                  {member.role}
                </div>
                <h1 className="font-display font-bold text-3xl leading-tight mb-1 text-white">
                  {member.name}
                </h1>
              </div>
            </div>

            {/* Right: Info */}
            <div className="md:col-span-7 p-8 md:p-12">
              <ScrollReveal delay={1}>
                {/* Quote */}
                <div className="mb-10 relative">
                  <Quote size={40} className="absolute -top-4 -left-4 text-neon/10 -z-10" />
                  <p className="text-lg md:text-xl font-display font-semibold italic text-neon leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>

                {/* Bio */}
                <div className="mb-10">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-light-muted mb-3">
                    Tentang
                  </h3>
                  <p className="text-[15px] leading-relaxed text-light-muted">
                    {member.bio}
                  </p>
                </div>

                <hr className="border-dark-border mb-8" />

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={18} className="text-neon" />
                    </div>
                    <div>
                      <div className="text-[11px] text-light-muted uppercase tracking-wider font-semibold mb-0.5">Program Studi</div>
                      <div className="text-sm font-medium text-white">{member.major}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                      <Building2 size={18} className="text-neon" />
                    </div>
                    <div>
                      <div className="text-[11px] text-light-muted uppercase tracking-wider font-semibold mb-0.5">Fakultas</div>
                      <div className="text-sm font-medium text-white">{member.faculty}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-neon" />
                    </div>
                    <div>
                      <div className="text-[11px] text-light-muted uppercase tracking-wider font-semibold mb-0.5">Asal Daerah</div>
                      <div className="text-sm font-medium text-white">{member.hometown}</div>
                    </div>
                  </div>

                  </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-dark-border hover:border-neon text-sm font-semibold transition-colors duration-200 text-white hover:text-neon"
                  >
                    <InstagramIcon size={16} className="text-neon" />
                    Instagram
                  </a>
                </div>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
