export interface Program {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  date: string;
  endDate?: string;
  location: string;
  photo: string;
  photos: string[];
  status: "Selesai" | "Berjalan" | "Direncanakan";
  objectives: string[];
  target: string;
  results: string[];
  participants: string;
  coordinator: string;
}

export const categories = [
  "Semua",
  "Pembangunan",
  "Sosial & Kemerdekaan",
  "Keagamaan",
  "Lingkungan",
  "Kesehatan",
];

export const programs: Program[] = [
  {
    id: 1,
    title: "Jalan Aman Desa (JANDA)",
    category: "Pembangunan",
    description: "Pembuatan dan pemasangan reflektor jalan berbahan pipa PVC pada titik-titik rawan di Desa Argotirto.",
    fullDescription: "Program ini bertujuan untuk mengoptimalkan keselamatan pengguna jalan malam hari melalui penguatan infrastruktur dasar. Kami melakukan pembuatan dan pemasangan reflektor jalan berbahan pipa PVC pada titik-titik rawan, seperti tikungan tajam, tanjakan, dan turunan. Hal ini dilakukan guna meningkatkan visibilitas pengguna jalan pada malam hari serta mendukung keselamatan berlalu lintas di lingkungan desa.",
    date: "2026-08-01",
    endDate: "2026-08-30",
    location: "Titik Rawan Desa Argotirto",
    photo: "/images/hero/hero-1.jpg",
    photos: ["/images/hero/hero-1.jpg"],
    status: "Direncanakan",
    objectives: [
      "Meningkatkan keselamatan pengguna jalan pada malam hari.",
      "Memberikan penanda visual pada tikungan, tanjakan, dan turunan.",
      "Mengurangi potensi kecelakaan akibat minimnya penerangan jalan."
    ],
    target: "Masyarakat Umum",
    results: [
      "Terpasangnya reflektor pada seluruh titik prioritas yang telah ditentukan",
      "Pengguna jalan lebih mudah mengenali tikungan dan perubahan kontur jalan pada malam hari"
    ],
    participants: "Seluruh tim KKN dan masyarakat setempat",
    coordinator: "Divisi Program dan Pengabdian",
  },
  {
    id: 2,
    title: "Petunjuk Jalan Desa (Pejasa)",
    category: "Pembangunan",
    description: "Pembuatan dan pemasangan papan petunjuk jalan menuju fasilitas umum, dusun, dan lokasi penting.",
    fullDescription: "Untuk memudahkan navigasi pendatang dan warga, kami melakukan pembuatan dan pemasangan papan petunjuk jalan menuju fasilitas umum, dusun, dan lokasi penting di desa. Pemasangan ini bertujuan agar memudahkan masyarakat serta pengunjung dalam menemukan lokasi tujuan mereka.",
    date: "2026-08-04",
    endDate: "2026-08-13",
    location: "Titik Strategis Desa Argotirto",
    photo: "/images/hero/hero-2.jpg",
    photos: ["/images/hero/hero-2.jpg"],
    status: "Direncanakan",
    objectives: [
      "Memudahkan masyarakat dan pengunjung menemukan lokasi fasilitas umum, dusun, dan tempat penting di Desa Argotirto.",
      "Menyediakan informasi arah yang jelas melalui pemasangan papan petunjuk jalan di titik-titik strategis."
    ],
    target: "Masyarakat Umum, Pendatang, Pengguna Jalan",
    results: [
      "Terpasangnya papan petunjuk jalan di lokasi yang telah ditentukan.",
      "Masyarakat dan pengunjung lebih mudah menemukan lokasi tujuan.",
      "Meningkatnya kemudahan akses dan informasi arah di desa."
    ],
    participants: "Seluruh tim KKN",
    coordinator: "Divisi Program dan Pengabdian",
  },
  {
    id: 3,
    title: "Lomba 17-an & Membantu Panitia Kemerdekaan",
    category: "Sosial & Kemerdekaan",
    description: "Kegiatan lomba untuk memeriahkan HUT RI ke-81 bagi anak-anak dan masyarakat RW 06, Dusun Krajan.",
    fullDescription: "Kegiatan lomba yang diadakan pada pertengahan Agustus guna memeriahkan semarak HUT RI ke-81 dengan mengadakan beberapa perlombaan untuk anak-anak dan masyarakat RW 06, Dusun Krajan, Desa Argotirto. Selain itu, mahasiswa KKN juga terjun langsung membantu kepanitiaan acara kemerdekaan di tingkat dusun maupun desa.",
    date: "2026-08-16",
    endDate: "2026-08-17",
    location: "RW 06, Dusun Krajan",
    photo: "/images/village/village-01.jpg",
    photos: ["/images/village/village-01.jpg"],
    status: "Direncanakan",
    objectives: [
      "Memeriahkan semarak HUT RI ke-81.",
      "Menjawab keresahan masyarakat RW 06 mengenai tidak adanya perlombaan pada beberapa tahun terakhir.",
      "Mempererat tali silaturahmi warga Dusun Krajan."
    ],
    target: "Masyarakat Umum RW 06",
    results: [
      "Terlaksananya perlombaan pada tanggal tersebut.",
      "Lomba dapat diikuti oleh masyarakat RW 06 Dusun Krajan, Desa Argotirto dengan antusias."
    ],
    participants: "Warga RW 06 Dusun Krajan",
    coordinator: "Divisi Program dan Pengabdian",
  },
  {
    id: 4,
    title: "Gerakan Hafalan Doa dan Pendidikan untuk Santri (GERHANA)",
    category: "Keagamaan",
    description: "Program pembinaan keagamaan di TPQ selama empat minggu melalui pendampingan mengaji dan hafalan.",
    fullDescription: "Gerakan Hafalan Doa dan Pendidikan untuk Santri (GERHANA) merupakan program pembinaan keagamaan yang dilaksanakan di TPQ selama empat minggu melalui kegiatan pendampingan mengaji, penyampaian materi dasar keislaman, hafalan doa-doa harian, serta permainan edukatif yang interaktif. Program ini dikemas secara menarik agar proses pembelajaran menjadi lebih menyenangkan dan mampu meningkatkan keaktifan santri selama mengikuti kegiatan.",
    date: "2026-08-04",
    endDate: "2026-08-27",
    location: "TPQ Desa Argotirto",
    photo: "/images/hero/hero-1.jpg",
    photos: ["/images/hero/hero-1.jpg"],
    status: "Direncanakan",
    objectives: [
      "Meningkatkan mutu pendidikan keagamaan santri TPQ.",
      "Membantu pembinaan hafalan doa serta materi keislaman."
    ],
    target: "25 Santri TPQ",
    results: [
      "Minimal 20 dari 25 santri hafal minimal 5 doa harian dari 10 yang diajarkan."
    ],
    participants: "25 Santri",
    coordinator: "Divisi Keagamaan dan Kemasyarakatan",
  },
  {
    id: 5,
    title: "Tahlil Rutin dan Senam Bersama",
    category: "Keagamaan",
    description: "Mengikuti dan mendampingi kegiatan tahlil rutinan ibu-ibu setiap Jumat siang, tahlil bapak-bapak di malam Jumat, serta senam setiap Rabu sore.",
    fullDescription: "Sebagai bentuk pendekatan kepada masyarakat dan partisipasi aktif dalam kegiatan sosial keagamaan desa, mahasiswa KKN mengikuti rutinitas ibadah dan kesehatan warga. Kami mengikuti tahlil rutinan ibu-ibu setiap hari Jumat siang, tahlil bapak-bapak setiap malam Jumat, dan mendampingi kegiatan senam bersama ibu-ibu setiap hari Rabu sore.",
    date: "2026-08-01",
    endDate: "2026-08-30",
    location: "Berbagai titik kumpul warga Desa Argotirto",
    photo: "/images/hero/hero-2.jpg",
    photos: ["/images/hero/hero-2.jpg"],
    status: "Direncanakan",
    objectives: [
      "Meningkatkan partisipasi mahasiswa dalam kegiatan rutinan warga.",
      "Mempererat silaturahmi dengan warga desa."
    ],
    target: "Bapak-bapak dan Ibu-ibu Desa Argotirto",
    results: [
      "Terbangunnya kedekatan emosional antara mahasiswa dan warga desa.",
      "Terbantunya pelaksanaan kegiatan rutinan warga."
    ],
    participants: "Warga desa dan mahasiswa KKN",
    coordinator: "Divisi Keagamaan dan Kemasyarakatan",
  },
  {
    id: 6,
    title: "Eco Green School: Kreasi Barang Bekas untuk Sekolah Hijau",
    category: "Lingkungan",
    description: "Mengajak siswa SD memanfaatkan barang bekas menjadi media tanam melalui edukasi 3R (Reduce, Reuse, Recycle).",
    fullDescription: "Kami mengajak siswa SD untuk mengenal dan menerapkan pengelolaan sampah melalui edukasi 3R. Kegiatan dilanjutkan dengan praktik memilah sampah organik dan anorganik, pengenalan dan praktik sederhana pembuatan pupuk kompos dari sampah organik, pemanfaatan barang bekas menjadi media tanam, menghias media tanam, dan menanam bibit tanaman sebagai upaya menciptakan lingkungan sekolah yang lebih bersih, hijau, dan asri.",
    date: "2026-08-08",
    endDate: "2026-08-15",
    location: "Sekolah Dasar Argotirto",
    photo: "/images/village/village-01.jpg",
    photos: ["/images/village/village-01.jpg"],
    status: "Direncanakan",
    objectives: [
      "Menanamkan kepedulian lingkungan dan mengembangkan kreativitas siswa.",
      "Meningkatkan pemahaman siswa mengenai pengelolaan sampah organik dan anorganik.",
      "Mewujudkan lingkungan sekolah yang lebih bersih, hijau, dan nyaman."
    ],
    target: "Siswa Sekolah Dasar (kelas I–VI)",
    results: [
      "Minimal 80% peserta mengikuti kegiatan sampai selesai.",
      "Siswa mampu memahami konsep dasar 3R dan menanam bibit tanaman.",
      "Terciptanya hasil kreasi dari barang bekas yang dapat digunakan untuk memperindah lingkungan sekolah."
    ],
    participants: "Siswa Sekolah Dasar",
    coordinator: "Divisi Hubungan Masyarakat",
  },
  {
    id: 7,
    title: "SIGAP CUCI (Sosialisasi Gerakan Anak Peduli Cuci Tangan Bersih)",
    category: "Kesehatan",
    description: "Sosialisasi Perilaku Hidup Bersih dan Sehat (PHBS) cuci tangan pakai sabun kepada siswa SDN 1, 2, dan 3 Argotirto.",
    fullDescription: "Mengingat tingginya angka kejadian diare pada anak SD di wilayah Argotirto, kami melakukan sosialisasi PHBS khususnya edukasi cuci tangan pakai sabun kepada siswa SDN 1, SDN 2, dan SDN 3 Argotirto. Setelah sesi sosialisasi, dilanjutkan dengan games snowballing untuk menguji pemahaman siswa secara interaktif. Kelompok pemenang akan diberikan reward, dan setiap siswa yang mengikuti kegiatan akan mendapatkan gift sabun cuci tangan.",
    date: "2026-08-18",
    endDate: "2026-08-22",
    location: "SDN 1, 2, dan 3 Argotirto",
    photo: "/images/hero/hero-1.jpg",
    photos: ["/images/hero/hero-1.jpg"],
    status: "Direncanakan",
    objectives: [
      "Meningkatkan pengetahuan dan kesadaran siswa SD tentang PHBS.",
      "Menurunkan angka kejadian diare pada anak SD di wilayah Argotirto.",
      "Membentuk kebiasaan hidup bersih dan sehat sejak dini."
    ],
    target: "Siswa SDN 1 (69 siswa), SDN 2 (114 siswa), SDN 3 (160 siswa)",
    results: [
      "Meningkatnya pemahaman siswa mengenai PHBS, ditandai dengan keaktifan dalam sesi games snowballing.",
      "Seluruh siswa yang mengikuti kegiatan menerima gift sabun cuci tangan.",
      "Menurunnya potensi kejadian diare pada anak Sekolah Dasar."
    ],
    participants: "Total 343 siswa",
    coordinator: "Divisi Keamanan dan Kesehatan",
  },
  {
    id: 8,
    title: "SAHABAT POSYANDU",
    category: "Kesehatan",
    description: "Sinergi Aksi Bantu Tenaga Posyandu untuk Masyarakat Terpadu di 7 pos wilayah Argotirto.",
    fullDescription: "Membantu pelaksanaan kegiatan Posyandu ILP di 7 pos wilayah Argotirto yang mengalami kekurangan tenaga, meliputi bantuan pada proses pendaftaran, penimbangan, pengukuran, pencatatan, hingga edukasi kesehatan kepada masyarakat yang hadir.",
    date: "2026-08-01",
    endDate: "2026-08-30",
    location: "7 Pos Posyandu ILP Argotirto",
    photo: "/images/hero/hero-2.jpg",
    photos: ["/images/hero/hero-2.jpg"],
    status: "Direncanakan",
    objectives: [
      "Membantu kelancaran pelaksanaan kegiatan Posyandu ILP di tengah keterbatasan tenaga kader.",
      "Mendukung optimalisasi pelayanan kesehatan dasar bagi balita, ibu hamil, dan lansia.",
      "Mempererat kerja sama antara mahasiswa KKN dengan kader kesehatan."
    ],
    target: "Kader posyandu dan masyarakat pengguna layanan di 7 pos.",
    results: [
      "Terlaksananya bantuan pendampingan di seluruh 7 pos Posyandu ILP.",
      "Kegiatan posyandu berjalan lancar meski dengan keterbatasan tenaga kader.",
      "Meningkatnya jumlah masyarakat yang terlayani secara tepat waktu."
    ],
    participants: "Masyarakat umum, Balita, Ibu Hamil, Lansia",
    coordinator: "Divisi Keamanan dan Kesehatan",
  },
  {
    id: 9,
    title: "Kerja Bakti Bersama Warga",
    category: "Pembangunan",
    description: "Kerja bakti pembersihan lingkungan desa pada hari ke-5 kegiatan KKN.",
    fullDescription: "Sebagai wujud pengabdian dan kebersamaan, mahasiswa KKN mengadakan kegiatan kerja bakti bersama warga setempat pada hari ke-5 penempatan. Kegiatan ini difokuskan pada pembersihan jalan-jalan utama, fasilitas umum, dan area sekitar balai desa agar tercipta lingkungan yang bersih dan nyaman.",
    date: "2026-08-05",
    endDate: "2026-08-05",
    location: "Fasilitas Umum Desa Argotirto",
    photo: "/images/village/village-01.jpg",
    photos: ["/images/village/village-01.jpg"],
    status: "Direncanakan",
    objectives: [
      "Menciptakan lingkungan desa yang bersih dan sehat.",
      "Meningkatkan semangat gotong royong antar warga dan mahasiswa."
    ],
    target: "Lingkungan Desa Argotirto",
    results: [
      "Area fasilitas umum dan jalan desa menjadi lebih bersih.",
      "Partisipasi aktif dari warga sekitar dalam kegiatan gotong royong."
    ],
    participants: "Mahasiswa KKN dan Warga Desa",
    coordinator: "Seluruh Mahasiswa KKN",
  }
];
