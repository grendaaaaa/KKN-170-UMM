export interface VillageInfo {
  name: string;
  subdistrict: string;
  regency: string;
  province: string;
  postalCode: string;
  area: string;
  population: string;
  description: string;
  history: string;
  geography: string;
  culture: string;
  potentials: VillagePotential[];
  umkm: VillageUMKM[];
  tourism: VillageTourism[];
  challenges: string[];
  kknFocus: string[];
  photos: VillagePhoto[];
}

export interface VillagePotential {
  icon: string;
  title: string;
  description: string;
}

export interface VillageUMKM {
  name: string;
  product: string;
  description: string;
}

export interface VillageTourism {
  name: string;
  description: string;
  photo: string;
}

export interface VillagePhoto {
  src: string;
  caption: string;
}

export const village: VillageInfo = {
  name: "Desa Argotirto",
  subdistrict: "Kecamatan Sumbermanjing Wetan",
  regency: "Kabupaten Malang",
  province: "Jawa Timur",
  postalCode: "65176",
  area: "±1.247 Ha",
  population: "±4.200 jiwa",
  description: `Desa Argotirto adalah sebuah desa yang terletak di Kecamatan Sumbermanjing Wetan, Kabupaten Malang, Jawa Timur. Dikelilingi oleh perbukitan hijau dan hamparan sawah yang menawan, Argotirto menyimpan potensi alam dan budaya yang kaya namun belum sepenuhnya dioptimalkan.

Masyarakat Argotirto dikenal ramah, guyub, dan menjunjung tinggi nilai-nilai gotong royong yang masih sangat kental dalam kehidupan sehari-hari. Mayoritas penduduk bermata pencaharian sebagai petani dan pekebun, dengan komoditas utama berupa padi, jagung, pisang, dan berbagai tanaman perkebunan.`,

  history: `Argotirto telah berdiri sebagai desa sejak awal abad ke-20. Nama "Argotirto" berasal dari bahasa Sansekerta-Jawa: "argo" berarti gunung/perbukitan, dan "tirto" berarti air. Nama ini mencerminkan karakteristik geografis desa yang berada di kawasan berbukit dengan sumber air yang melimpah.

Desa ini berkembang pesat seiring dengan program transmigrasi lokal dan pembukaan lahan pertanian yang dilakukan secara bertahap. Tradisi gotong royong yang diwariskan turun-temurun menjadi fondasi kuat bagi kehidupan sosial masyarakatnya hingga hari ini.`,

  geography: `Argotirto terletak di kawasan berbukit dengan ketinggian antara 200–600 meter di atas permukaan laut. Kondisi topografi yang bervariasi ini menciptakan iklim yang sejuk dan tanah yang subur, ideal untuk berbagai jenis pertanian dan perkebunan.

Dilalui oleh beberapa sungai kecil yang berhulu dari perbukitan di sebelah utara, desa ini memiliki sumber air yang cukup untuk kebutuhan pertanian sepanjang tahun. Luas wilayah desa mencapai ±1.247 hektar, terdiri dari lahan pertanian, perkebunan, hutan desa, dan pemukiman.`,

  culture: `Masyarakat Argotirto memiliki tradisi budaya yang beragam dan masih aktif dilestarikan. Tradisi sedekah bumi dilaksanakan setiap tahun sebagai ungkapan syukur atas hasil panen yang melimpah. Kesenian Topeng Malangan, Wayang, dan Pencak Silat masih aktif dipraktikkan oleh kelompok-kelompok seni lokal.

Nilai-nilai Islam yang kuat berpadu dengan kearifan lokal Jawa menciptakan identitas budaya yang unik — toleran, harmonis, dan penuh kehangatan. Gotong royong bukan sekadar slogan, melainkan praktik nyata yang terlihat dalam setiap sendi kehidupan masyarakat desa.`,

  potentials: [
    {
      icon: "🌾",
      title: "Pertanian & Perkebunan",
      description:
        "Lahan pertanian yang subur dengan komoditas unggulan padi, jagung, pisang, dan kopi robusta yang memiliki kualitas tinggi.",
    },
    {
      icon: "🍃",
      title: "Wisata Alam",
      description:
        "Pemandangan alam perbukitan yang indah, persawahan bertingkat, dan hutan desa yang masih terjaga keasriannya.",
    },
    {
      icon: "🏺",
      title: "Seni & Budaya",
      description:
        "Kesenian Topeng Malangan, tradisi sedekah bumi, dan pencak silat yang masih aktif dilestarikan oleh komunitas lokal.",
    },
    {
      icon: "🍌",
      title: "UMKM Pangan Lokal",
      description:
        "Produk olahan pisang, kopi robusta, madu hutan, dan berbagai kerajinan tangan yang memiliki potensi pasar besar.",
    },
    {
      icon: "💧",
      title: "Sumber Air Alami",
      description:
        "Mata air alami yang melimpah menjadi sumber irigasi pertanian dan potensi wisata air yang belum dioptimalkan.",
    },
    {
      icon: "🌿",
      title: "Tanaman Herbal",
      description:
        "Kekayaan tanaman herbal dan obat-obatan tradisional yang tumbuh alami di hutan desa dan pekarangan warga.",
    },
  ],

  umkm: [
    {
      name: "Keripik Pisang Mak Yem",
      product: "Keripik Pisang Aneka Rasa",
      description:
        "Keripik pisang homemade dengan varian original, manis, dan cokelat yang renyah dan gurih. Diproduksi secara tradisional oleh Mak Yem selama 20 tahun.",
    },
    {
      name: "Kopi Robusta Argotirto",
      product: "Kopi Robusta Bubuk",
      description:
        "Kopi robusta yang ditanam di ketinggian optimal, dipanen dan diolah secara tradisional. Menghasilkan cita rasa kopi yang kuat dan aromatik.",
    },
    {
      name: "Madu Hutan Asli",
      product: "Madu Hutan Murni",
      description:
        "Madu asli dari lebah hutan yang dibudidayakan secara alami di kawasan hutan desa Argotirto, dengan kandungan nutrisi yang tinggi.",
    },
    {
      name: "Anyaman Bambu Pak Wardi",
      product: "Kerajinan Anyaman Bambu",
      description:
        "Berbagai produk kerajinan anyaman bambu berkualitas — tampah, besek, dan furnitur bambu — yang dikerjakan dengan keahlian turun-temurun.",
    },
  ],

  tourism: [
    {
      name: "Bukit Panorama Argotirto",
      description:
        "Puncak bukit yang menawarkan pemandangan 360 derajat hamparan sawah, perbukitan, dan bahkan lautan di kejauhan pada hari yang cerah.",
      photo: "/images/village/tourism-01.jpg",
    },
    {
      name: "Persawahan Berundak",
      description:
        "Sawah berteras yang indah mengikuti kontur bukit, menciptakan pemandangan yang memesona terutama saat musim tanam dan panen.",
      photo: "/images/village/tourism-02.jpg",
    },
    {
      name: "Mata Air Sumber Rejeki",
      description:
        "Sumber mata air alami yang jernih di tengah hutan desa, menjadi tempat favorit warga untuk bersantai dan menikmati kesegaran alam.",
      photo: "/images/village/tourism-03.jpg",
    },
    {
      name: "Hutan Desa Argotirto",
      description:
        "Area hutan desa yang masih terjaga keasliannya, menjadi paru-paru desa sekaligus habitat berbagai satwa liar dan tanaman endemik.",
      photo: "/images/village/tourism-04.jpg",
    },
  ],

  challenges: [
    "Akses jalan menuju desa yang masih terbatas dan perlu perbaikan",
    "Keterbatasan akses internet di beberapa wilayah desa",
    "Tingginya ketergantungan pada pupuk kimia di kalangan petani",
    "Belum optimalnya pemasaran produk UMKM lokal",
    "Kurangnya fasilitas pendidikan non-formal untuk remaja",
    "Pengelolaan sampah yang masih belum terorganisir dengan baik",
  ],

  kknFocus: [
    "Pemberdayaan UMKM melalui digitalisasi pemasaran",
    "Program pendidikan dan bimbingan belajar untuk anak-anak",
    "Penyuluhan dan layanan kesehatan preventif masyarakat",
    "Penghijauan dan pengelolaan lingkungan berkelanjutan",
    "Digitalisasi profil dan sistem informasi desa",
    "Pemberdayaan pemuda melalui pelatihan keterampilan digital",
  ],

  photos: [
    {
      src: "/images/village/village-01.jpg",
      caption: "Pemandangan Desa Argotirto dari atas bukit",
    },
    {
      src: "/images/village/village-02.jpg",
      caption: "Hamparan sawah berteras yang indah",
    },
    {
      src: "/images/village/village-03.jpg",
      caption: "Balai Desa Argotirto yang bersih dan nyaman",
    },
    {
      src: "/images/village/village-04.jpg",
      caption: "Keseharian warga yang penuh semangat",
    },
  ],
};
