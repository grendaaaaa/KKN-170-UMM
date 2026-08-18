import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "@/components/SocialIcons";
import { articles } from "@/data/articles";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleCard from "@/components/ArticleCard";

// Parse Markdown/HTML simply for the dummy content

export function generateStaticParams() {
  return articles.map((a) => ({
    id: a.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id.toString() === params.id);
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  
  return {
    title: `${article.title} | Cerita KKN 170`,
    description: article.excerpt,
  };
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id.toString() === params.id);

  if (!article) {
    notFound();
  }

  // Find related articles (same category or recent)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === article.category && b.category !== article.category) return -1;
      if (a.category !== article.category && b.category === article.category) return 1;
      // Then by date
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  return (
    <article className="pb-20 bg-dark">
      
      {/* Top Image Hero */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] w-full mt-16 md:mt-18">
        <Image
          src={article.photo}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-black/20 to-black/40" />
      </div>

      <div className="container-custom relative z-10 -mt-32 md:-mt-48">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-dark-card rounded-3xl p-8 md:p-12 shadow-card border border-dark-border">
            
            <Link href="/artikel" className="inline-flex items-center gap-2 text-neon hover:text-white transition-colors duration-200 mb-8 text-sm font-semibold">
              <ArrowLeft size={16} />
              Kembali ke Artikel
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge bg-neon/15 text-neon border-neon/30 px-3 py-1 text-xs">
                {article.category}
              </span>
              {article.featured && (
                <span className="badge bg-amber-500/15 text-amber-400 border-amber-500/30 px-3 py-1 text-xs">
                  Featured
                </span>
              )}
            </div>

            <h1 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-8">
              {article.title}
            </h1>

            {/* Author Meta */}
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-dark-border mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-dark flex-shrink-0">
                  <Image
                    src={article.authorPhoto}
                    alt={article.author}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{article.author}</div>
                  <div className="text-xs text-light-muted">{article.authorRole}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-light-muted font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  {new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Content using Markdown mapping */}
            <div className="prose-kkn">
              <div 
                className="text-lg text-light-muted leading-relaxed mb-10 italic border-l-4 border-neon pl-6"
              >
                {article.excerpt}
              </div>

              {/* Simple split by paragraph for the hardcoded text since we used markdown syntax in the string */}
              <div className="content-renderer">
                {/* For real app, use a real markdown parser. Here we do simple rendering */}
                {article.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.trim().startsWith('## ')) {
                    return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.trim().startsWith('> ')) {
                    const lines = paragraph.split('\n');
                    const quoteText = lines[0].replace('> ', '').replace(/"/g, '');
                    const citeText = lines[2] ? lines[2].replace('> — ', '') : '';
                    return (
                      <blockquote key={idx}>
                        <p className="mb-2 text-xl text-white">"{quoteText}"</p>
                        {citeText && <cite className="text-sm font-semibold text-neon block mt-3">— {citeText}</cite>}
                      </blockquote>
                    );
                  }
                  if (paragraph.trim().startsWith('- ')) {
                    return (
                      <ul key={idx}>
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  // Handling bold syntax in paragraphs
                  if(paragraph.includes('**')) {
                    const parts = paragraph.split('**');
                    return (
                      <p key={idx}>
                        {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
                      </p>
                    )
                  }
                  if (paragraph.trim() === '') return null;
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>
            </div>

            {/* Tags & Share */}
            <div className="mt-16 pt-8 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-dark text-light-muted border border-dark-border">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-light-muted mr-2 flex items-center gap-2">
                  <Share2 size={16} /> Bagikan:
                </span>
                <button className="w-9 h-9 rounded-full bg-dark hover:bg-neon/10 flex items-center justify-center text-light-muted hover:text-neon transition-colors border border-dark-border">
                  <FacebookIcon size={16} />
                </button>
                <button className="w-9 h-9 rounded-full bg-dark hover:bg-neon/10 flex items-center justify-center text-light-muted hover:text-neon transition-colors border border-dark-border">
                  <TwitterIcon size={16} />
                </button>
                <button className="w-9 h-9 rounded-full bg-dark hover:bg-neon/10 flex items-center justify-center text-light-muted hover:text-neon transition-colors border border-dark-border">
                  <LinkedinIcon size={16} />
                </button>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="container-custom mt-24">
          <ScrollReveal>
            <h3 className="font-display font-bold text-3xl text-white mb-10 text-center">
              Cerita Lainnya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relArticle, idx) => (
                <ScrollReveal key={relArticle.id} delay={(idx % 3) as 0 | 1 | 2}>
                  <ArticleCard article={relArticle} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      )}
    </article>
  );
}
