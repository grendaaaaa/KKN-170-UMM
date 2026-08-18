import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, CheckCircle, Target, Users, User, ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";

export function generateStaticParams() {
  return programs.map((p) => ({
    id: p.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const program = programs.find((p) => p.id.toString() === params.id);
  if (!program) return { title: "Program Tidak Ditemukan" };
  
  return {
    title: `${program.title} | Program Kerja`,
    description: program.description,
  };
}

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const program = programs.find((p) => p.id.toString() === params.id);

  if (!program) {
    notFound();
  }

  // Find related programs (same category, different ID)
  const relatedPrograms = programs
    .filter((p) => p.category === program.category && p.id !== program.id)
    .slice(0, 2);

  return (
    <article className="pb-20" style={{ background: "#09090b" }}>
      {/* Hero Header */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" style={{ background: "#09090b" }}>
        <GreenBlob position="top-right" opacity={0.15} size="550px" />
        <div className="absolute inset-0 -z-10">
          <Image
            src={program.photo}
            alt={program.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <Link href="/program" className="inline-flex items-center gap-2 text-neon hover:text-white transition-colors duration-200 mb-8 text-sm font-semibold">
            <ArrowLeft size={16} />
            Kembali ke Program
          </Link>
          
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge bg-neon/15 text-neon border-neon/30 px-3 py-1 text-xs">
                {program.category}
              </span>
              <span className="badge bg-white/5 text-light-muted border-dark-border px-3 py-1 text-xs backdrop-blur-sm">
                Status: {program.status}
              </span>
            </div>
            
            <h1 className="font-display font-bold text-display-xl text-white max-w-4xl leading-tight mb-6">
              {program.title}
            </h1>
            
            <p className="text-lg text-light-muted max-w-3xl leading-relaxed">
              {program.description}
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container-custom mt-10 relative">
        <GreenBlob position="bottom-left" opacity={0.10} size="600px" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Main Content (Left) */}
          <div className="lg:col-span-8">
            <ScrollReveal>
              {/* Meta Info Bar */}
            <div className="flex flex-wrap gap-6 p-6 rounded-2xl border border-dark-border mb-10" style={{ background: "#18181b" }}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neon/10 mt-0.5 border border-neon/20">
                  <Calendar size={18} className="text-neon" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-light-muted uppercase tracking-wider mb-1">Pelaksanaan</div>
                  <div className="text-sm font-medium text-white">
                    {new Date(program.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                    {program.endDate && ` – ${new Date(program.endDate).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}`}
                  </div>
                </div>
              </div>
              
              <div className="w-px bg-dark-border hidden sm:block" />
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neon/10 mt-0.5 border border-neon/20">
                  <MapPin size={18} className="text-neon" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-light-muted uppercase tracking-wider mb-1">Lokasi</div>
                  <div className="text-sm font-medium text-white">{program.location}</div>
                </div>
              </div>
              
              <div className="w-px bg-dark-border hidden sm:block" />
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neon/10 mt-0.5 border border-neon/20">
                  <User size={18} className="text-neon" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-light-muted uppercase tracking-wider mb-1">Koordinator</div>
                  <div className="text-sm font-medium text-white">{program.coordinator}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="prose-kkn max-w-none">
              {/* Latar Belakang & Pelaksanaan */}
              <h3 className="text-2xl font-display font-bold text-white mb-4 mt-0">Deskripsi Program</h3>
              <div 
                className="text-[15px] leading-relaxed text-light-muted space-y-4"
                dangerouslySetInnerHTML={{ __html: program.fullDescription.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') }}
              />

              <div className="my-10 border-t border-dark-border pt-8">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="text-neon" size={24} />
                  Tujuan Program
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
                  {program.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 bg-dark-card p-4 rounded-xl border border-dark-border m-0">
                      <CheckCircle size={18} className="text-neon flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-light-muted leading-snug">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-10 border-t border-dark-border pt-8">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle className="text-neon" size={24} />
                  Hasil yang Dicapai
                </h3>
                <div className="bg-neon/5 rounded-2xl p-6 border border-neon/10">
                  <ul className="space-y-4 list-none p-0 m-0">
                    {program.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-3 m-0">
                        <div className="w-6 h-6 rounded-full bg-neon text-black flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5 shadow-[0_0_8px_rgba(107,150,134,0.5)]">
                          {i + 1}
                        </div>
                        <span className="text-[15px] font-medium text-white leading-snug">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4">
            <ScrollReveal delay={2}>
              <div className="sticky top-24 space-y-8">
                {/* Gallery Widget */}
                <div className="bg-dark-card rounded-2xl border border-dark-border overflow-hidden shadow-sm">
                  <div className="p-5 border-b border-dark-border bg-dark-card">
                    <h3 className="font-display font-bold text-white flex items-center gap-2 text-lg">
                      Dokumentasi Kegiatan
                    </h3>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-2">
                      {program.photos.map((photo, i) => (
                        <div key={i} className={`relative rounded-lg overflow-hidden border border-dark-border ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                          <Image
                            src={photo}
                            alt={`Dokumentasi ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Target Audience Widget */}
                <div className="bg-dark-card rounded-2xl border border-dark-border p-6 shadow-sm">
                  <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2 text-lg">
                    <Users className="text-neon" size={20} />
                    Sasaran & Peserta
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-light-muted uppercase tracking-wider font-semibold mb-1">Sasaran</div>
                      <div className="text-sm font-medium text-white bg-dark p-3 rounded-lg border border-dark-border">{program.target}</div>
                    </div>
                    <div>
                      <div className="text-xs text-light-muted uppercase tracking-wider font-semibold mb-1">Jumlah Peserta</div>
                      <div className="text-sm font-medium text-white bg-dark p-3 rounded-lg border border-dark-border">{program.participants}</div>
                    </div>
                  </div>
                </div>
                
                {/* Related Programs */}
                {relatedPrograms.length > 0 && (
                  <div>
                    <h3 className="font-display font-bold text-white mb-4 text-lg">Program Terkait</h3>
                    <div className="space-y-3">
                      {relatedPrograms.map((rp) => (
                        <Link key={rp.id} href={`/program/${rp.id}`} className="group block bg-dark-card rounded-xl border border-dark-border p-3 hover:border-neon hover:shadow-card transition-all">
                          <div className="flex items-center gap-3">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-dark-border">
                              <Image src={rp.photo} alt={rp.title} fill className="object-cover" />
                            </div>
                            <div>
                              <div className="text-xs text-neon font-semibold mb-1">{rp.category}</div>
                              <h4 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-neon transition-colors">{rp.title}</h4>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </article>
  );
}
