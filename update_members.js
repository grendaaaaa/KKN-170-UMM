const fs = require('fs');
const path = require('path');

const membersPath = path.join(__dirname, 'src', 'data', 'members.ts');
let content = fs.readFileSync(membersPath, 'utf8');

const newData = [
  { name: "M. Anthony Rizky D", role: "BPH", major: "Manajemen" },
  { name: "Nadia Yuniatri A.", role: "BPH", major: "Teknik Sipil" },
  { name: "Isaura Izzah Illahi", role: "BPH", major: "Ilmu Komunikasi" },
  { name: "M. Reffly Revaliano", role: "BPH", major: "Teknik Informatika" },
  { name: "Grenda Agriansyah", role: "PDD", major: "Teknik Informatika" },
  { name: "Muhammad Buchori P.", role: "PDD", major: "Ilmu Komunikasi" },
  { name: "Syah Maulana Hanif", role: "PDD", major: "Teknik Industri" },
  { name: "Renno Dwi Ramadany", role: "PDD", major: "Akuntansi" },
  { name: "lativul Fallach Aditya", role: "KESMAN", major: "Teknik Informatika" },
  { name: "Aulia Raihanah", role: "KESMAN", major: "Kedokteran" },
  { name: "Rossalinda Sanjoyo", role: "KESMAN", major: "Ilmu Keperawatan" },
  { name: "Adnan Fauzan Suyono", role: "KESMAN", major: "Hukum" },
  { name: "Amirah Huwaidah A", role: "KESMAN", major: "Farmasi" },
  { name: "Fatilla F. Nie'ammy", role: "KESMAN", major: "Fisioterapi" },
  { name: "Dwi Retno Ambarwati", role: "Keagamaan", major: "Psikologi" },
  { name: "Aulia Fauziyah", role: "Keagamaan", major: "Akuntansi" },
  { name: "Nayla Fitri Hidayani", role: "Keagamaan", major: "Akuntansi" },
  { name: "Dwi Wahyu Ambarwati", role: "Keagamaan", major: "Sosiologi" },
  { name: "Mohamad Andi Bahktiar", role: "HUMAS", major: "Teknik Sipil" },
  { name: "Zahwa Kamila Zulkarnain", role: "HUMAS", major: "Psikologi" },
  { name: "Viko Efriliando", role: "HUMAS", major: "Teknik Elektro" },
  { name: "Diva Fahriyah Indrasta", role: "HUMAS", major: "Teknik Industri" },
  { name: "Nurul Faizah Fauzi", role: "HUMAS", major: "Psikologi" },
  { name: "Agatha Natan", role: "HUMAS", major: "Teknik Industri" },
  { name: "Muhammad Ziyat Ulhaq", role: "PROGRAM", major: "Hubungan Internasional" },
  { name: "Raesyah Anastasya Abbas", role: "PROGRAM", major: "Psikologi" },
  { name: "Intan Purnamasari", role: "PROGRAM", major: "Manajemen" },
  { name: "Dera Maulani Adha", role: "PROGRAM", major: "Hukum Keluarga Islam" },
  { name: "Selvi Pratiwi", role: "PROGRAM", major: "Manajemen" },
  { name: "Ananda Rahma Dzakiyah", role: "PROGRAM", major: "Hukum" },
];

// Remove nim from interface
content = content.replace(/nim: string;\s*/g, '');

// Process each member object
for (let i = 0; i < 30; i++) {
  const d = newData[i];
  // We need to replace name, role, major, and remove nim for each object.
  // We can use a regex to find the object with id: i+1
  const idRegex = new RegExp(`id:\\s*${i + 1},\\s*name:\\s*"[^"]+",\\s*role:\\s*"[^"]+",\\s*major:\\s*"[^"]+",`, 'g');
  
  content = content.replace(idRegex, `id: ${i + 1},\n    name: "${d.name}",\n    role: "${d.role}",\n    major: "${d.major}",`);
  
  // also remove nim
  const nimRegex = new RegExp(`nim:\\s*"[^"]+",?\\s*`, 'g');
  content = content.replace(nimRegex, '');
}

fs.writeFileSync(membersPath, content, 'utf8');
console.log('Updated members.ts');
