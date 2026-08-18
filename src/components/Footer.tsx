import Link from "next/link";
import GreenBlob from "@/components/GreenBlob";
import { InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Profil" },
  { href: "/program", label: "Program" },
  { href: "/anggota", label: "Anggota" },
  { href: "/dokumentasi", label: "Dokumentasi" },
  { href: "/artikel", label: "Artikel" },
];

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white border-t border-white/10 pt-16"
      style={{ background: "#18181b" }}
    >
      <GreenBlob position="top-right" opacity={0.10} size="450px" />
      <div className="container-custom pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">
          
          {/* Column 1: Brand & About */}
          <div>
            <h2 className="text-[16px] font-bold tracking-widest uppercase mb-5">
              KKN Kelompok 170
            </h2>
            <p className="text-[14px] leading-relaxed mb-6 text-white/80">
              Website dokumentasi resmi perjalanan KKN Kelompok 170 UMM di Desa Argotirto. 
              Menampilkan 30 hari pengabdian, program kerja, dan cerita-cerita yang akan selalu kami ingat.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="#" className="w-9 h-9 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                <InstagramIcon size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                <TikTokIcon size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigasi */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-6 text-white/50">
              NAVIGASI
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14px] text-white/90 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Informasi */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-6 text-white/50">
              INFORMASI KKN
            </h3>
            <ul className="space-y-4">
              <li className="text-[14px] text-white/90">Kelompok 170 UMM</li>
              <li className="text-[14px] text-white/90">30 Mahasiswa</li>
              <li className="text-[14px] text-white/90">1–30 Agustus 2026</li>
              <li className="text-[14px] text-white/90">DPL: Nama Dosen</li>
            </ul>
          </div>

          {/* Column 4: Maps */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-6 text-white/50">
              PETA LOKASI
            </h3>
            <div className="w-full h-36 bg-white/10 rounded-lg overflow-hidden relative border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126359.81308316301!2d112.60741549420076!3d-8.318357283474328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd61e6af724a7cd%3A0xc6c78e1b6f007010!2sArgotirto%2C%20Sumbermanjing%20Wetan%2C%20Malang%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1714570000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar / Secretariat */}
      <div className="border-t border-white/10 bg-black/10">
        <div className="container-custom py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-white/50">
              SEKRETARIAT
            </h3>
            <p className="text-[13px] text-white/80 mb-1">
              Jl. Balai Desa Argotirto, Kecamatan Sumbermanjing Wetan, Kabupaten Malang, Jawa Timur
            </p>
            <p className="text-[13px] text-white/80">
              Email: kkn170@umm.ac.id
            </p>
          </div>
          
          <div className="flex items-center gap-3">
             <p className="text-[13px] text-white/50">© {new Date().getFullYear()} KKN Kelompok 170 UMM</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
