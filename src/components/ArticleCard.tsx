import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { type Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Kegiatan: { bg: "rgba(107,150,134,0.08)", text: "#6B9686" },
  "Program Kerja": { bg: "rgba(107,150,134,0.12)", text: "#6B9686" },
  "Cerita Desa": { bg: "rgba(24,24,27,1)", text: "#f4f4f5" },
  Pengalaman: { bg: "rgba(107,150,134,0.06)", text: "#6B9686" },
  Berita: { bg: "rgba(107,150,134,0.08)", text: "#6B9686" },
};

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const catStyle = categoryColors[article.category] || {
    bg: "rgba(36,79,69,0.08)",
    text: "#244F45",
  };

  if (featured) {
    return (
      <Link
        href={`/artikel/${article.id}`}
        className="group block card-base bg-dark-card border-dark-border overflow-hidden"
      >
        <div className="md:grid md:grid-cols-2">
          {/* Photo */}
          <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-dark">
            <Image
              src={article.photo}
              alt={article.title}
              fill
              className="img-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
            {/* Fallback */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream to-sage-pale" />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center bg-dark-card">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="badge text-[11px] font-semibold"
                style={{ background: catStyle.bg, color: catStyle.text }}
              >
                {article.category}
              </span>
              <span className="text-[11px] text-light-muted uppercase tracking-wider font-medium">
                Featured
              </span>
            </div>
            <h2 className="font-display font-bold text-display-sm text-white mb-3 leading-snug group-hover:text-neon transition-colors duration-200 line-clamp-3">
              {article.title}
            </h2>
            <p className="text-[14px] text-light-muted leading-relaxed mb-5 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-[12px] text-light-muted mb-5">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(article.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {article.readTime}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-neon group-hover:gap-2.5 transition-all duration-200">
              Baca Selengkapnya
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/artikel/${article.id}`}
      className="group card-base flex flex-col bg-dark-card border-dark-border overflow-hidden"
    >
      {/* Photo */}
      <div className="relative h-48 overflow-hidden bg-dark">
        <Image
          src={article.photo}
          alt={article.title}
          fill
          className="img-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Fallback */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark to-dark-card" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 bg-dark-card">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="badge text-[11px]"
            style={{ background: catStyle.bg, color: catStyle.text }}
          >
            {article.category}
          </span>
        </div>

        <h3 className="font-display font-bold text-[16px] text-white leading-snug mb-2 group-hover:text-neon transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-[13px] text-light-muted leading-relaxed line-clamp-3 mb-4 flex-1">
          {article.excerpt}
        </p>

        {/* Author & Meta */}
        <div className="flex items-center justify-between border-t border-dark-border pt-4 mt-2">
          <div className="text-[12px] text-light-muted">
            <span className="font-medium">{article.author.split(" ")[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-light-muted">
            <Calendar size={11} />
            {new Date(article.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
