"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20" style={{ background: "#09090b" }}>
      <div className="container-custom text-center">
        <div className="font-display font-black text-neon/5 select-none mb-4" style={{ fontSize: "clamp(8rem, 20vw, 15rem)", lineHeight: 1 }}>
          404
        </div>
        
        <div className="-mt-16 md:-mt-24 mb-10 relative z-10">
          <SectionTitle 
            title="Halaman Tidak Ditemukan" 
            subtitle="Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak lagi tersedia."
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Link href="/" className="btn-primary">
            <Home size={18} />
            Kembali ke Beranda
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary"
          >
            <ArrowLeft size={18} />
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
