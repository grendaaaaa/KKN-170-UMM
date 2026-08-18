export interface DocPhoto {
  src: string;
  caption: string;
  aspect: "landscape" | "portrait" | "square";
}

export interface DocDay {
  id: number;
  day: number;
  date: string;
  title: string;
  description: string;
  photos: DocPhoto[];
  tags: string[];
}

export const documentation: DocDay[] = [
  {
    id: 1,
    day: 1,
    date: "2026-08-01",
    title: "Kedatangan & Pembukaan Resmi KKN",
    description:
      "Hari pertama yang penuh haru dan semangat. Kelompok 170 tiba di Desa Argotirto disambut hangat oleh Kepala Desa Pak Haryono dan perangkat desa. Acara pembukaan resmi berlangsung di balai desa dengan penuh khidmat, dihadiri tokoh masyarakat dan perwakilan RT/RW. Malam pertama kami habiskan dengan perkenalan dan adaptasi bersama lingkungan baru.",
    photos: [
      {
        src: "/images/documentation/day-01/foto-01.jpg",
        caption: "Penyambutan kelompok oleh Kepala Desa Argotirto",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-01/foto-02.jpg",
        caption: "Seremoni pembukaan resmi KKN Kelompok 170",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-01/foto-03.jpg",
        caption: "Foto bersama perangkat desa setelah acara pembukaan",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-01/foto-04.jpg",
        caption: "Makan bersama sebagai tanda keakraban pertama",
        aspect: "square",
      },
      {
        src: "/images/documentation/day-01/foto-05.jpg",
        caption: "Penanda papan lokasi KKN Kelompok 170",
        aspect: "portrait",
      },
    ],
    tags: ["Pembukaan", "Penyambutan", "Seremonial"],
  },
  {
    id: 2,
    day: 2,
    date: "2026-08-02",
    title: "Observasi & Pemetaan Desa",
    description:
      "Hari kedua kami gunakan untuk mengenal Desa Argotirto lebih dalam. Kelompok dibagi menjadi beberapa tim kecil untuk melakukan observasi dan pemetaan kondisi desa — mulai dari infrastruktur jalan, fasilitas umum, potensi UMKM, kondisi lingkungan, hingga kebutuhan masyarakat. Wawancara dengan tokoh masyarakat dan warga juga dilakukan untuk mendapatkan gambaran yang komprehensif.",
    photos: [
      {
        src: "/images/documentation/day-02/foto-01.jpg",
        caption: "Tim observasi menjelajahi jalanan desa Argotirto",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-02/foto-02.jpg",
        caption: "Wawancara dengan petani setempat tentang kondisi pertanian",
        aspect: "portrait",
      },
      {
        src: "/images/documentation/day-02/foto-03.jpg",
        caption: "Kunjungan ke fasilitas kesehatan desa",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-02/foto-04.jpg",
        caption: "Diskusi kelompok sore hari untuk kompilasi temuan observasi",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-02/foto-05.jpg",
        caption: "Pemandangan alam Desa Argotirto yang memukau",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-02/foto-06.jpg",
        caption: "Pemetaan potensi UMKM lokal",
        aspect: "square",
      },
    ],
    tags: ["Observasi", "Pemetaan", "Survey"],
  },
  {
    id: 3,
    day: 3,
    date: "2026-08-03",
    title: "Awal Program Bimbingan Belajar",
    description:
      "Program perdana kelompok: bimbingan belajar gratis untuk anak-anak desa. Antusias yang luar biasa dari anak-anak dan orang tua membuat hari ini begitu membahagiakan. Ada sekitar 45 anak yang datang untuk sesi pertama, jauh melebihi ekspektasi kami. Senyum dan semangat mereka menjadi motivasi terkuat bagi seluruh anggota kelompok.",
    photos: [
      {
        src: "/images/documentation/day-03/foto-01.jpg",
        caption: "Sesi bimbingan belajar matematika untuk siswa SD",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-03/foto-02.jpg",
        caption: "Anak-anak antusias mengikuti pembelajaran bahasa Inggris",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-03/foto-03.jpg",
        caption: "Kegiatan menggambar dan mewarnai untuk anak TK",
        aspect: "portrait",
      },
      {
        src: "/images/documentation/day-03/foto-04.jpg",
        caption: "Kak Farida mendampingi siswa yang kesulitan",
        aspect: "square",
      },
    ],
    tags: ["Pendidikan", "Bimbel", "Anak-anak"],
  },
  {
    id: 4,
    day: 5,
    date: "2026-08-05",
    title: "Posyandu & Cek Kesehatan Gratis",
    description:
      "Program kesehatan pertama berlangsung dari pagi hingga siang hari. Tim kesehatan yang dipimpin Nurul berhasil memeriksa lebih dari 100 warga dalam satu hari. Ada beberapa temuan menarik dan mengkhawatirkan — tingginya angka hipertensi di kalangan lansia desa menjadi perhatian utama. Semua peserta yang teridentifikasi berisiko dirujuk ke puskesmas kecamatan.",
    photos: [
      {
        src: "/images/documentation/day-04/foto-01.jpg",
        caption: "Antrian warga untuk pemeriksaan tekanan darah",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-04/foto-02.jpg",
        caption: "Nurul memeriksa tekanan darah seorang lansia",
        aspect: "portrait",
      },
      {
        src: "/images/documentation/day-04/foto-03.jpg",
        caption: "Posyandu balita yang ramai dihadiri ibu-ibu desa",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-04/foto-04.jpg",
        caption: "Konsultasi kesehatan dengan masyarakat",
        aspect: "square",
      },
      {
        src: "/images/documentation/day-04/foto-05.jpg",
        caption: "Penyuluhan gizi untuk ibu hamil dan menyusui",
        aspect: "landscape",
      },
    ],
    tags: ["Kesehatan", "Posyandu", "Cek Kesehatan"],
  },
  {
    id: 5,
    day: 10,
    date: "2026-08-10",
    title: "Hari Penanaman Pohon",
    description:
      "Hari yang paling meriah sepanjang KKN. Ratusan warga turun ke lapangan bersama kami untuk menanam 500 bibit pohon di berbagai titik desa. Semangat kebersamaan begitu terasa — anak-anak, remaja, bapak-bapak, hingga ibu-ibu semua berpartisipasi dengan gembira. Ini bukan hanya tentang pohon yang ditanam hari ini, tapi tentang warisan hijau untuk generasi Argotirto mendatang.",
    photos: [
      {
        src: "/images/documentation/day-05/foto-01.jpg",
        caption: "Seluruh anggota kelompok dan warga siap menanam pohon",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-05/foto-02.jpg",
        caption: "Penanaman bibit pohon mangga di area lahan kritis",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-05/foto-03.jpg",
        caption: "Anak-anak semangat menanam pohon pertama mereka",
        aspect: "portrait",
      },
      {
        src: "/images/documentation/day-05/foto-04.jpg",
        caption: "Kepala desa turut menanam secara simbolis",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-05/foto-05.jpg",
        caption: "500 bibit siap ditanam di berbagai titik desa",
        aspect: "square",
      },
      {
        src: "/images/documentation/day-05/foto-06.jpg",
        caption: "Pembuatan label nama dan pemelihara setiap pohon",
        aspect: "portrait",
      },
    ],
    tags: ["Lingkungan", "Penghijauan", "Penanaman"],
  },
  {
    id: 6,
    day: 20,
    date: "2026-08-20",
    title: "Pelatihan Digital Marketing UMKM",
    description:
      "Salah satu program yang paling ditunggu-tunggu oleh pelaku UMKM desa. Bagas dan Anisa memimpin sesi pelatihan yang interaktif dan praktis — para peserta langsung mencoba membuat akun bisnis di Instagram dan Tokopedia, belajar memotret produk dengan smartphone, dan merancang konten sederhana. Antusias peserta luar biasa, bahkan ada yang meminta sesi tambahan.",
    photos: [
      {
        src: "/images/documentation/day-06/foto-01.jpg",
        caption: "Sesi pelatihan digital marketing bersama pelaku UMKM",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-06/foto-02.jpg",
        caption: "Peserta langsung praktik membuat konten produk",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-06/foto-03.jpg",
        caption: "Belajar teknik fotografi produk menggunakan smartphone",
        aspect: "portrait",
      },
      {
        src: "/images/documentation/day-06/foto-04.jpg",
        caption: "Produk keripik pisang Argotirto yang akan dipasarkan online",
        aspect: "square",
      },
    ],
    tags: ["UMKM", "Digital Marketing", "Pelatihan"],
  },
  {
    id: 7,
    day: 27,
    date: "2026-08-27",
    title: "Festival Budaya & Malam Penutupan",
    description:
      "Malam yang tidak akan pernah terlupakan. Festival Budaya Argotirto menjadi puncak dari 30 hari perjalanan penuh makna. Lebih dari 500 warga hadir menyaksikan pertunjukan seni, pameran produk UMKM, dan perayaan bersama. Air mata haru mengalir ketika kami berpamitan dengan warga yang telah menjadi keluarga kami selama sebulan ini. Terima kasih, Argotirto.",
    photos: [
      {
        src: "/images/documentation/day-07/foto-01.jpg",
        caption: "Festival Budaya Argotirto yang meriah dan penuh warna",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-07/foto-02.jpg",
        caption: "Pertunjukan tari tradisional oleh warga desa",
        aspect: "portrait",
      },
      {
        src: "/images/documentation/day-07/foto-03.jpg",
        caption: "Pameran produk UMKM yang ramai dikunjungi",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-07/foto-04.jpg",
        caption: "Momen haru perpisahan dengan warga Argotirto",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-07/foto-05.jpg",
        caption: "Foto terakhir bersama seluruh kelompok KKN 170",
        aspect: "landscape",
      },
      {
        src: "/images/documentation/day-07/foto-06.jpg",
        caption: "Penampilan musik live oleh mahasiswa KKN",
        aspect: "square",
      },
      {
        src: "/images/documentation/day-07/foto-07.jpg",
        caption: "Api unggun dan sharing malam penutupan",
        aspect: "portrait",
      },
    ],
    tags: ["Festival", "Penutupan", "Budaya", "Perpisahan"],
  },
];
