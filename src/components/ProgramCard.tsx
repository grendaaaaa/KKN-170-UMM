import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { type Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
  index?: number;
}

const statusColors = {
  Selesai: { bg: "bg-neon/10", text: "text-neon", border: "border-neon/30" },
  Berjalan: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  Direncanakan: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
};

const categoryColors: Record<string, string> = {
  Pendidikan: "#6B9686",
  Kesehatan: "#6B9686",
  Ekonomi: "#6B9686",
  Lingkungan: "#6B9686",
  Sosial: "#6B9686",
  UMKM: "#6B9686",
  Teknologi: "#6B9686",
};

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  const statusStyle = statusColors[program.status];

  return (
    <Link
      href={`/program/${program.id}`}
      className="group card-base flex flex-col bg-dark-card border-dark-border overflow-hidden"
    >
      {/* Photo */}
      <div className="relative h-48 overflow-hidden bg-dark">
        {/* Number decoration */}
        <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-lg bg-black/60 flex items-center justify-center">
          <span className="text-xs font-bold text-white font-display">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`badge text-[10px] ${statusStyle.bg} ${statusStyle.text} border ${statusStyle.border}`}
          >
            {program.status}
          </span>
        </div>

        <Image
          src={program.photo}
          alt={program.title}
          fill
          className="img-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
        />

        {/* Fallback gradient */}
        <div
          className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-dark to-dark-card"
        >
          <span className="text-6xl opacity-10 font-display font-black text-neon">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 bg-dark-card">
        {/* Category */}
        <span
          className="text-[11px] font-semibold tracking-widest uppercase mb-2"
          style={{ color: "#6B9686" }}
        >
          {program.category}
        </span>

        {/* Title */}
        <h3 className="font-display font-bold text-[16px] text-white leading-snug mb-2 group-hover:text-neon transition-colors duration-200 line-clamp-2">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-light-muted leading-relaxed line-clamp-3 mb-4 flex-1">
          {program.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-[12px] text-light-muted mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(program.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            <span className="truncate max-w-[120px]">{program.location}</span>
          </span>
        </div>

        {/* Read more */}
        <div className="flex items-center gap-1 text-[13px] font-semibold text-neon group-hover:gap-2 transition-all duration-200">
          Lihat Detail
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
