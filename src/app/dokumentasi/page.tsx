"use client";

import { useState } from "react";
import Image from "next/image";
import { documentation } from "@/data/documentation";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox, { type LightboxPhoto } from "@/components/Lightbox";
import GreenBlob from "@/components/GreenBlob";

// Grup data ke 5 tab
const tabs = [
  {
    id: "pembukaan",
    label: "Pemberangkatan & Pembukaan",
    sublabel: "Awal Perjalanan",
    days: documentation.filter((d) => d.day <= 2),
  },
  {
    id: "week1",
    label: "Minggu 1",
    sublabel: "Hari 1–7",
    days: documentation.filter((d) => d.day >= 1 && d.day <= 7),
  },
  {
    id: "week2",
    label: "Minggu 2",
    sublabel: "Hari 8–14",
    days: documentation.filter((d) => d.day >= 8 && d.day <= 14),
  },
  {
    id: "week3",
    label: "Minggu 3",
    sublabel: "Hari 15–21",
    days: documentation.filter((d) => d.day >= 15 && d.day <= 21),
  },
  {
    id: "week4",
    label: "Minggu 4",
    sublabel: "Hari 22–30",
    days: documentation.filter((d) => d.day >= 22 && d.day <= 30),
  },
];

export default function DokumentasiPage() {
  const [activeTab, setActiveTab] = useState("pembukaan");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxPhotos, setLightboxPhotos] = useState<LightboxPhoto[]>([]);

  const openLightbox = (dayPhotos: any[], startIndex: number, dayTitle: string, date: string, dayNumber: number) => {
    const formattedPhotos: LightboxPhoto[] = dayPhotos.map((photo) => ({
      src: photo.src,
      caption: photo.caption,
      date: new Date(date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      activity: `Hari ${String(dayNumber).padStart(2, "0")} — ${dayTitle}`,
    }));
    
    setLightboxPhotos(formattedPhotos);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "#09090b" }}
      >
        <GreenBlob position="top-right" opacity={0.15} size="600px" />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/village/village-01.jpg"
            alt="Dokumentasi KKN 170"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Jejak Pengabdian"
              title="Dokumentasi Harian"
              subtitle="Setiap hari di Argotirto adalah cerita baru. Jelajahi dokumentasi perjalanan 30 hari KKN Kelompok 170."
              variant="dark"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Tab Navigation */}
      <div
        className="sticky top-0 z-30 border-b border-dark-border"
        style={{ background: "rgba(9,9,11,0.95)", backdropFilter: "blur(16px)" }}
      >
        <div className="container-custom">
          <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex flex-col items-center px-5 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-neon/10 text-neon border border-neon/30 shadow-[0_0_15px_rgba(107,150,134,0.1)_inset]"
                    : "text-light-muted hover:text-white hover:bg-dark-hover"
                }`}
              >
                <span className="font-semibold">{tab.label}</span>
                {tab.sublabel && (
                  <span className="text-[10px] opacity-60 mt-0.5">{tab.sublabel}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="pb-24 pt-12 relative overflow-hidden" style={{ background: "#09090b" }}>
        <GreenBlob position="bottom-left" opacity={0.10} size="500px" />
        
        <div className="container-custom max-w-5xl relative z-10">
          {currentTab.days.length === 0 ? (
             <div className="text-center py-24">
               <div className="text-6xl mb-4">📷</div>
               <h3 className="font-display font-bold text-xl text-white mb-2">
                 Dokumentasi Segera Hadir
               </h3>
               <p className="text-light-muted">
                 Foto dan cerita {currentTab.label} akan ditambahkan setelah pelaksanaan KKN.
               </p>
             </div>
          ) : (
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-border md:-translate-x-1/2" />

              {currentTab.days.map((doc, dayIdx) => (
                <div key={doc.id} className="relative mb-24 last:mb-0">
                  {/* Timeline Dot & Date Label */}
                  <ScrollReveal>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end mb-8 relative">
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-neon ring-4 ring-[#09090b] -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_8px_rgba(107,150,134,0.6)]" />
                      
                      {/* Day Typography */}
                      <div className="pl-12 md:pl-0 md:absolute md:left-1/2 md:-translate-x-full md:pr-12 md:text-right w-full md:w-1/2 mt-[-6px] md:mt-0">
                        <div className="font-display font-black text-6xl md:text-7xl leading-none text-neon/5 -ml-1 md:ml-0">
                          {String(doc.day).padStart(2, "0")}
                        </div>
                        <div className="font-display font-bold text-xl text-neon mt-[-10px]">
                          Hari {doc.day}
                        </div>
                        <div className="text-sm text-light-muted font-medium mt-1 uppercase tracking-wider">
                          {new Date(doc.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                        </div>
                      </div>
                      
                      {/* Title & Desc */}
                      <div className="pl-12 md:pl-12 w-full md:w-1/2 mt-4 md:mt-0">
                        <h2 className="font-display font-bold text-2xl text-white mb-3">
                          {doc.title}
                        </h2>
                        <p className="text-[15px] text-light-muted leading-relaxed">
                          {doc.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {doc.tags.map(tag => (
                            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-dark-border text-light-muted bg-dark-card">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Photo Gallery for this day */}
                  <ScrollReveal delay={1}>
                    <div className="pl-12 md:pl-0 relative z-10 mt-10">
                      <div className="gallery-masonry">
                        {doc.photos.map((photo, photoIdx) => (
                          <button
                            key={photoIdx}
                            onClick={() => openLightbox(doc.photos, photoIdx, doc.title, doc.date, doc.day)}
                            className={`relative w-full rounded-xl overflow-hidden group cursor-zoom-in shadow-sm hover:shadow-md transition-shadow border border-dark-border ${
                              photo.aspect === 'landscape' ? 'aspect-[4/3]' : 
                              photo.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
                            }`}
                            aria-label={`Buka foto: ${photo.caption}`}
                          >
                            <Image
                              src={photo.src}
                              alt={photo.caption}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 border border-neon/30 rounded-xl">
                              <p className="text-white text-[13px] font-medium leading-snug text-left">
                                {photo.caption}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </section>

      <Lightbox
        photos={lightboxPhotos}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
