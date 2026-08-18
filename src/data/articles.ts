export interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  authorPhoto: string;
  authorRole: string;
  date: string;
  readTime: string;
  photo: string;
  tags: string[];
  featured: boolean;
}

export const articleCategories = [
  "Semua",
  "Kegiatan",
  "Program Kerja",
  "Cerita Desa",
  "Pengalaman",
  "Berita",
];

export const articles: Article[] = [
  {
    id: 1,
    title: "Tiba di Argotirto: Sambutan Hangat yang Menggetarkan Hati",
    category: "Cerita Desa",
    excerpt:
      "Hari pertama di Desa Argotirto meninggalkan kesan mendalam yang tidak terlupakan. Sambutan hangat warga dan keindahan alam desa membuat kami semakin bersemangat menjalani hari-hari ke depan.",
    content: `
## Perjalanan Menuju Rumah Baru

Pagi itu, 1 Agustus 2026, tiga puluh mahasiswa UMM berkumpul di halaman kampus dengan koper, ransel, dan sejuta harapan. Perjalanan menuju Desa Argotirto, Kecamatan Sumbermanjing Wetan memakan waktu sekitar dua jam dari pusat kota Malang.

Semakin mendekati desa, pemandangan berubah drastis. Aspal mulus berganti jalanan berliku di antara perbukitan hijau. Udara segar berhembus masuk melalui jendela bus. Kami mulai merasakan bahwa ini adalah tempat yang benar-benar berbeda dari kehidupan kampus.

## Sambutan yang Tak Terduga

Yang pertama menyambut kami bukanlah perangkat desa, melainkan anak-anak yang berlarian di pinggir jalan sambil melambaikan tangan. Senyum polos mereka langsung mencairkan rasa gugup yang sudah kami bawa dari Malang.

Di balai desa, Kepala Desa Bapak Haryono Widodo berdiri bersama perangkat desa dan tokoh masyarakat. "Kami sudah menunggu kalian," ucapnya sambil menyalami satu per satu dari kami dengan hangat.

> "Anggap saja ini rumah kalian selama sebulan. Warga sini sudah siap menjadi bagian dari perjalanan kalian."
> 
> — Pak Haryono Widodo, Kepala Desa Argotirto

## Malam Pertama

Usai acara pembukaan, ibu-ibu PKK desa telah menyiapkan makan malam yang luar biasa. Nasi tumpeng besar di tengah meja, dikelilingi berbagai lauk pauk masakan rumahan khas Argotirto. Kami makan bersama, tertawa bersama, dan mulai merasa bahwa 30 hari ke depan akan menjadi 30 hari yang tidak akan pernah terlupakan.

Malam itu, setelah semua warga pulang, kami duduk melingkar di teras posko. Bukan rapat program kerja. Hanya obrolan santai tentang apa yang kami rasakan, apa yang kami harapkan, dan apa yang akan kami bawa pulang dari Argotirto.

Itulah malam pertama kami. Dan rasanya, kami sudah mulai jatuh cinta dengan desa ini.
    `,
    author: "Rendra Wahyu Saputra",
    authorPhoto: "/images/members/member-11.jpg",
    authorRole: "Humas & Dokumentasi",
    date: "2026-08-02",
    readTime: "5 menit",
    photo: "/images/articles/article-01.jpg",
    tags: ["Hari Pertama", "Argotirto", "Sambutan"],
    featured: true,
  },
  {
    id: 2,
    title: "Ketika 500 Bibit Pohon Ditanam Oleh Satu Desa",
    category: "Program Kerja",
    excerpt:
      "Program penghijauan yang kami rencanakan 3 hari menjadi kenyataan dalam 1 hari penuh kebersamaan. 500 bibit pohon, ratusan tangan, dan satu semangat yang sama untuk Argotirto yang lebih hijau.",
    content: `
## Rencana yang Melampaui Ekspektasi

Kami merencanakan menanam 500 bibit pohon dalam 3 hari. Tapi warga Argotirto punya rencana lain.

Pagi hari penanaman, saat kami baru siap menyiapkan peralatan, ratusan warga sudah berkumpul di titik kumpul. Bukan puluhan. Ratusan. Bapak-bapak dengan cangkul di pundak, ibu-ibu membawa air minum, anak-anak berlari-larian dengan bibit pohon kecil di tangan.

"Sudah lama kami ingin menghijaukan desa," kata Pak RT 02, "kalian memberi kami alasan yang tepat untuk melakukannya bersama."

## Pohon yang Bukan Sekadar Pohon

Setiap pohon yang ditanam hari itu punya cerita. Ada pohon alpukat yang ditanam oleh seorang nenek yang berkata ingin cucunya kelak bisa memetik buahnya sendiri. Ada pohon mangga yang ditanam oleh sekelompok anak SD sambil bernyanyi lagu kebangsaan. Ada pohon trembesi yang ditanam oleh kepala desa di depan balai desa sebagai simbol keteduhan untuk semua.

Kami membuat label untuk setiap pohon — nama pohon, tanggal tanam, dan nama penanam. Bukan hanya identifikasi, tapi rasa memiliki. Karena pohon yang dimiliki adalah pohon yang dijaga.

## 500 Pohon dalam Satu Hari

Pukul 3 sore, 500 bibit telah tertanam di 8 titik berbeda di seluruh desa. Apa yang kami rencanakan untuk 3 hari, selesai dalam satu hari. Bukan karena kami bekerja lebih keras, tapi karena warga bekerja bersama kami.

Di penghujung hari, kami duduk di bawah pohon tua besar di pinggir sawah. Lelah, tapi bahagia. Dan sadar bahwa hari ini kami tidak hanya menanam pohon — kami menanam kenangan yang akan tumbuh bertahun-tahun setelah kami kembali ke kota.
    `,
    author: "Dimas Eka Pratama",
    authorPhoto: "/images/members/member-09.jpg",
    authorRole: "Koordinator Lingkungan",
    date: "2026-08-11",
    readTime: "6 menit",
    photo: "/images/articles/article-02.jpg",
    tags: ["Penghijauan", "Lingkungan", "Kebersamaan"],
    featured: false,
  },
  {
    id: 3,
    title: "Mak Yem dan Kripik Pisangnya yang Mengubah Segalanya",
    category: "Cerita Desa",
    excerpt:
      "Di balik kesederhanaan dapur Mak Yem, tersimpan cerita tentang keuletan, cinta keluarga, dan produk yang kini sudah merambah pasar online berkat program UMKM kami.",
    content: `
## Pertemuan di Dapur Kecil

Namanya Mak Yem. Usianya 58 tahun. Dan dapurnya adalah tempat keajaiban kecil terjadi setiap hari.

Kami pertama kali mengunjungi Mak Yem pada hari kelima KKN, ketika tim UMKM sedang melakukan pemetaan potensi ekonomi desa. Dari kejauhan, aroma kripik pisang yang sedang digoreng sudah memanggil-manggil hidung kami.

"Sudah 20 tahun bikin kripik ini. Dijual ke tetangga, ke warung-warung di desa," cerita Mak Yem sambil terus mengaduk wajan besar. "Tapi ya gitu, nggak pernah sampai jauh."

## Produk yang Layak Go Digital

Kripik pisang Mak Yem bukan kripik sembarangan. Rasanya renyah, tidak terlalu asin, dan ada varian cokelat yang belum pernah kami temui di pasaran. Kemasan sederhana — plastik putih polos dengan label tulisan tangan — jelas bukan yang terbaik untuk produk sehebat ini.

Anisa dan Bagas langsung melihat potensi besar. Program UMKM dimulai dari Mak Yem.

Dalam dua minggu, kami membantu Mak Yem dengan:
- Desain kemasan baru yang menarik dan profesional
- Foto produk berkualitas menggunakan smartphone
- Pembuatan akun Instagram bisnis @kripik.argotirto
- Pendaftaran di Tokopedia

## Pesanan Pertama dari Luar Desa

Sepuluh hari setelah akun Instagram aktif, pesanan pertama datang dari Surabaya. Kemudian dari Malang kota. Kemudian dari Jakarta.

Mak Yem menelepon Anisa dengan suara yang bergetar, "Nong, ada orang Surabaya mesen 20 bungkus. Beneran ini?"

Ya, Mak Yem. Beneran. Dan ini baru permulaan.

Ketika kami pamit di hari terakhir, Mak Yem menyelipkan sebungkus kripik pisang ke tangan setiap anggota kelompok. Tidak ada kata-kata panjang. Hanya senyum dan genggaman tangan yang erat.

Itulah kenangan terbaik dari program UMKM kami.
    `,
    author: "Anisa Fitri Maharani",
    authorPhoto: "/images/members/member-10.jpg",
    authorRole: "Koordinator UMKM",
    date: "2026-08-18",
    readTime: "7 menit",
    photo: "/images/articles/article-03.jpg",
    tags: ["UMKM", "Cerita Warga", "Pemberdayaan"],
    featured: true,
  },
  {
    id: 4,
    title: "Festival Budaya: Ketika Desa Berdenyut Lebih Kencang",
    category: "Kegiatan",
    excerpt:
      "Malam penutupan KKN 170 berubah menjadi festival budaya yang tak terlupakan — 500 warga hadir, 12 kelompok seni tampil, dan air mata bahagia mengalir tanpa malu-malu.",
    content: `
## Malam yang Direncanakan, Perasaan yang Tidak

Kami merencanakan festival ini selama dua minggu. Venue, dekorasi, rundown acara, daftar penampil, koordinasi dengan perangkat desa — semuanya terencana dengan rapi.

Yang tidak kami rencanakan adalah perasaan yang menghantam dada ketika ribuan lampu lampion menyala bersama di lapangan desa malam itu.

## Ketika Seni Bertemu Ketulusan

Dua belas kelompok seni lokal tampil malam itu. Dari kelompok tari Topeng Malangan yang sudah puluhan tahun tidak tampil di acara desa, hingga band remaja karang taruna yang baru pertama kali pentas di depan publik.

Yang paling mengharukan adalah penampilan anak-anak dari program bimbingan belajar kami. Mereka mementaskan drama pendek tentang semangat belajar — naskah yang mereka tulis sendiri, kostum yang mereka buat dari bahan sederhana. Tidak sempurna. Tapi luar biasa.

## 500 Warga, Satu Denyut

Tidak ada yang menduga 500 orang akan hadir. Kami menyiapkan 200 kursi. Sisanya berdiri. Tidak ada yang pulang.

Di penghujung acara, ketika kami berbaris di atas panggung untuk pamitan, seorang ibu tua di barisan depan mengeluarkan sapu tangan. Kemudian yang lain. Kemudian kami semua.

Bukan kesedihan. Tapi penuh rasa syukur yang tidak bisa diungkapkan dengan kata-kata.

## Apa yang Kami Bawa Pulang

Setelah festival, kami membereskan posko dini hari. Sambil melipat spanduk dan mengemas peralatan, ada keheningan yang berbeda. Bukan kesedihan. Tapi kepenuhan.

Kami tidak datang ke Argotirto untuk memberikan sesuatu. Ternyata, justru kamilan yang mendapatkan banyak hal. Tentang ketulusan, tentang kesederhanaan yang kaya, tentang makna dari kata 'bersama'.
    `,
    author: "Rendra Wahyu Saputra",
    authorPhoto: "/images/members/member-11.jpg",
    authorRole: "Humas & Dokumentasi",
    date: "2026-08-28",
    readTime: "6 menit",
    photo: "/images/articles/article-04.jpg",
    tags: ["Festival", "Budaya", "Penutupan"],
    featured: false,
  },
  {
    id: 5,
    title: "Belajar dari Pak Sarno: Petani yang Tidak Pernah Menyerah",
    category: "Pengalaman",
    excerpt:
      "Di pagi hari ketika kami masih mengantuk, Pak Sarno sudah berada di sawah. Pertemuan dengan petani bersemangat ini mengajarkan kami arti kerja keras yang sesungguhnya.",
    content: `
## Jam 5 Pagi di Sawah Argotirto

Kami bertemu Pak Sarno pada hari ketujuh KKN. Pagi itu Dimas dan Agus sedang berjalan kaki menuju titik observasi lahan pertanian ketika mereka melihat sosok yang sudah bekerja di sawah sejak fajar.

Pak Sarno, 62 tahun, petani yang telah menggarap sawah yang sama selama empat dekade. Tanpa asisten. Tanpa traktor modern. Dengan cara-cara yang diwarisi dari orang tuanya.

"Padi itu seperti anak. Harus diperhatikan setiap hari. Kalau ditinggal, dia ngambek," katanya sambil tertawa lebar.

## Pelajaran dari Orang yang Tidak Pernah Komplain

Dalam percakapan panjang di bawah pohon rindang di pinggir sawah, Pak Sarno tidak pernah sekali pun mengeluh. Padahal ada banyak yang bisa dikeluhkan — harga pupuk yang mahal, harga gabah yang tidak stabil, cuaca yang tidak menentu.

"Complain itu buang energi, Nak. Mending energinya dipake buat kerja."

Kalimat sederhana itu seperti tampar dingin di wajah kami yang sering mengeluh tentang hal-hal kecil.

## Program yang Lahir dari Pertemuan Ini

Pertemuan dengan Pak Sarno menginspirasi kami untuk mendesain program pelatihan kompos yang lebih fokus dan kontekstual. Bukan tentang teknologi canggih, tapi tentang solusi sederhana yang bisa langsung diterapkan besok pagi.

Pak Sarno menjadi narasumber utama dalam pelatihan itu. Bukan kami yang mengajari petani. Justru sebaliknya.

Dan itulah pelajaran terpenting dari KKN kami: terkadang, yang terbaik yang bisa kita lakukan adalah duduk, mendengarkan, dan belajar dari mereka yang sudah menjalani sebelum kita.
    `,
    author: "Agus Setiawan",
    authorPhoto: "/images/members/member-19.jpg",
    authorRole: "Anggota",
    date: "2026-08-14",
    readTime: "5 menit",
    photo: "/images/articles/article-05.jpg",
    tags: ["Pertanian", "Pengalaman", "Inspirasi"],
    featured: false,
  },
  {
    id: 6,
    title: "30 Hari, 30 Pelajaran: Refleksi Akhir KKN 170",
    category: "Pengalaman",
    excerpt:
      "Tiga puluh hari di Argotirto mengajarkan kami lebih banyak dari yang bisa kami tulis. Inilah refleksi jujur dari perjalanan yang mengubah cara pandang kami tentang hidup, pengabdian, dan arti sebuah komunitas.",
    content: `
## Bukan Seperti yang Kami Bayangkan

Sebelum berangkat, kami punya bayangan tentang KKN. Ada yang membayangkan petualangan seru. Ada yang khawatir tentang keterbatasan fasilitas. Ada yang pesimis tentang program-program yang akan berjalan.

Semua bayangan itu salah.

KKN 170 di Argotirto jauh lebih dalam dari sekadar petualangan. Dan jauh lebih mudah dari yang kami takutkan — bukan karena tidak ada tantangan, tapi karena kami tidak sendirian menghadapinya.

## Tentang Apa yang Kami Beri

Kami datang dengan niat memberi. Program kerja tersusun rapi. Timeline dibuat detail. Anggaran direncanakan cermat.

Tapi di hari-hari pertama, kenyataan lapangan mengajarkan bahwa yang paling dibutuhkan warga bukan selalu yang kami rencanakan. Yang mereka butuhkan adalah kehadiran, bukan sekadar program. Telinga yang mau mendengar, bukan sekadar tangan yang mau bekerja.

## Tentang Apa yang Kami Terima

**Pelajaran 1**: Kesederhanaan bukan kekurangan.  
Warga Argotirto hidup sederhana, tapi bahagianya nyata dan terasa.

**Pelajaran 2**: Kolaborasi mengalahkan kapasitas individual.  
500 pohon tertanam dalam satu hari karena seluruh desa bergerak bersama.

**Pelajaran 3**: Kepercayaan dibangun perlahan, tapi bertahan lama.  
Butuh waktu bagi warga untuk benar-benar percaya pada niat baik kami. Tapi ketika kepercayaan itu hadir, segalanya menjadi lebih mudah dan bermakna.

**Pelajaran 4**: Dampak terbaik bukan yang bisa dilihat sekarang.  
Pohon yang baru ditanam belum menghasilkan buah. Anak yang baru belajar membaca belum bisa menulis novel. Tapi benih sudah tertanam. Dan kami percaya pada proses.

## Terima Kasih, Argotirto

Tiga puluh hari berlalu terlalu cepat. Tapi kenangan yang tertinggal akan bertahan jauh lebih lama.

Terima kasih, Argotirto. Untuk senyuman wargamu, untuk ketulusan hatimu, untuk mengizinkan kami menjadi bagian kecil dari ceritamu.

Kami pergi membawa desa ini di dalam hati kami.

*— KKN Kelompok 170, Universitas Muhammadiyah Malang*
    `,
    author: "Ahmad Fauzi Rahmansyah",
    authorPhoto: "/images/members/member-01.jpg",
    authorRole: "Ketua KKN 170",
    date: "2026-08-29",
    readTime: "8 menit",
    photo: "/images/articles/article-06.jpg",
    tags: ["Refleksi", "Penutupan", "KKN 170"],
    featured: true,
  },
];
