"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/program", label: "Program" },
  { href: "/anggota", label: "Anggota" },
  { href: "/dokumentasi", label: "Dokumentasi" },
  { href: "/artikel", label: "Artikel" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine if we're on a page with a dark hero (homepage)
  const isDarkPage = pathname === "/";

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > prevScrollY && currentScrollY > 80) {
        // Scrolling DOWN — hide
        setIsHidden(true);
      } else {
        // Scrolling UP — show
        setIsHidden(false);
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
        aria-label="Navigasi utama"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 font-display font-bold transition-colors duration-300 text-white">
              {/* SVG Logo Mark */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 bg-white/10 border border-white/20 shadow-[0_0_10px_rgba(107,150,134,0.1)]"
              >
                <span className="text-sm font-black tracking-tighter text-white">
                  K
                </span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-wide text-white">KKN 170</div>
                <div className="text-[10px] font-medium tracking-wider uppercase opacity-70 text-white">
                  UMM
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-200 relative group text-white/80 hover:text-white ${
                      isActive ? "!text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : ""
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-current rounded-full transition-all duration-200 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/dokumentasi"
                className="text-sm font-semibold px-5 py-2.5 rounded-lg border transition-all duration-200 border-white/40 text-white hover:bg-white/10 hover:border-white/70"
              >
                Lihat Perjalanan
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-200 text-white hover:bg-white/10"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden transition-transform duration-300 ease-in-out border-l border-dark-border ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "#09090b" }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-dark-border">
            <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-neon">
              <div className="w-9 h-9 rounded-lg bg-neon flex items-center justify-center shadow-[0_0_10px_rgba(107,150,134,0.3)]">
                <span className="text-sm font-black text-black">K</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold">KKN 170</div>
                <div className="text-[10px] font-medium tracking-wider uppercase text-light-muted">UMM</div>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-dark-hover text-white"
              aria-label="Tutup menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 p-5 overflow-y-auto">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-neon/10 text-neon border border-neon/20 shadow-[0_0_10px_rgba(107,150,134,0.1)_inset]"
                          : "text-white hover:bg-dark-hover hover:text-neon"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="p-5 border-t border-dark-border">
            <Link
              href="/dokumentasi"
              className="btn-primary w-full justify-center shadow-[0_0_15px_rgba(107,150,134,0.3)]"
            >
              Lihat Perjalanan
            </Link>
            <p className="text-center text-[11px] text-light-muted mt-3">
              KKN Kelompok 170 — UMM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
