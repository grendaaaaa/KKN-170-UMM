"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import GreenBlob from "@/components/GreenBlob";
import Lightbox, { type LightboxPhoto } from "@/components/Lightbox";
import { documentation } from "@/data/documentation";

// Collect 8 featured photos across all days
const allPhotos: LightboxPhoto[] = documentation
  .flatMap((day) =>
    day.photos.map((photo) => ({
      src: photo.src,
      caption: photo.caption,
      date: new Date(day.date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      activity: `Hari ${String(day.day).padStart(2, "0")} — ${day.title}`,
    }))
  )
  .slice(0, 8);

// Different sizes for editorial masonry feel
const photoSizes = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "#09090b" }}
        aria-label="Galeri Foto"
      >
        <GreenBlob position="top-left" opacity={0.12} size="550px" />
        <GreenBlob position="bottom-right" opacity={0.09} size="400px" />
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <ScrollReveal>
              <SectionTitle
                eyebrow="Momen Kami"
                title="Momen yang Kami Abadikan"
                subtitle="Setiap foto menyimpan cerita. Setiap momen, kenangan tak terlupakan."
                align="left"
              />
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <Link href="/dokumentasi" className="btn-secondary flex-shrink-0 whitespace-nowrap">
                Lihat Semua
                <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>

          {/* Editorial Grid */}
          <ScrollReveal>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
              style={{ gridAutoRows: "160px" }}
            >
              {allPhotos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className={`relative overflow-hidden rounded-xl group cursor-zoom-in border border-dark-border ${photoSizes[index] || ""}`}
                  aria-label={`Buka foto: ${photo.caption}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                  />

                  {/* Fallback */}
                  <div
                    className="absolute inset-0 -z-10 bg-dark"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 border border-neon/30 rounded-xl">
                    <p className="text-white text-[12px] font-medium leading-snug line-clamp-2 text-left">
                      {photo.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Lightbox
        photos={allPhotos}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
