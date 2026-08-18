"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ArticleCard from "@/components/ArticleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { articles, articleCategories } from "@/data/articles";

export default function ArtikelPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredArticle = articles.find((a) => a.featured);
  const remainingArticles = articles.filter((a) => a.id !== featuredArticle?.id);

  // Filter based on category and search
  const filteredArticles = remainingArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "Semua" || article.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "#09090b" }}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="Artikel KKN 170"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Kabar Desa"
              title="Artikel & Berita"
              subtitle="Catatan, berita, dan cerita perjalanan KKN Kelompok 170 di Desa Argotirto. Ditulis langsung oleh mereka yang mengalaminya."
              variant="dark"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0" style={{ background: "#09090b" }}>
        <div className="container-custom">
          
          {/* Featured Article */}
          {featuredArticle && activeCategory === "Semua" && searchQuery === "" && (
            <ScrollReveal>
              <div className="mb-16">
                <ArticleCard article={featuredArticle} featured={true} />
              </div>
            </ScrollReveal>
          )}

          {/* Filters & Search */}
          <ScrollReveal delay={1}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 border-y py-6 border-dark-border" style={{ background: "transparent" }}>
              {/* Categories */}
              <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 hide-scrollbar">
                <div className="flex items-center gap-2 text-neon font-semibold text-sm uppercase tracking-wider flex-shrink-0 mr-2">
                  <Filter size={16} />
                </div>
                {articleCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      activeCategory === category
                        ? "bg-neon text-black shadow-md shadow-neon/20"
                        : "bg-dark-card text-light-muted border border-dark-border hover:border-neon hover:text-neon"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-72 flex-shrink-0">
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border bg-dark-card text-white border-dark-border focus:outline-none focus:ring-2 focus:ring-neon/20 focus:border-neon transition-all"
                />
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-light-muted" />
              </div>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <ScrollReveal key={article.id} delay={(index % 3) as 0 | 1 | 2}>
                  <ArticleCard article={article} />
                </ScrollReveal>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="w-20 h-20 mx-auto bg-dark-card rounded-full flex items-center justify-center mb-4 border border-dark-border">
                  <Search size={32} className="text-light-muted" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  Artikel tidak ditemukan
                </h3>
                <p className="text-light-muted">
                  Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("Semua");
                  }}
                  className="mt-4 text-neon font-semibold underline underline-offset-4"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
