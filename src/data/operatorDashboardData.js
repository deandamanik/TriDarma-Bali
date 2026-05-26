// ============================================================
// Mock data Dashboard Operator Desa Adat
// Operator akses terbatas — hanya bisa kelola pura & UMKM
// di wilayah desa adat yang ditugaskan oleh Super Admin.
// ============================================================

// ---------- Profil operator (didaftarkan oleh super admin) ----------
export const operatorUser = {
  name: 'Desa Adat Ubud',
  role: 'Operator Desa Adat',
  region: 'Kab. Gianyar',
  initials: 'DU',
  registeredBy: 'Dinas Pariwisata Prov. Bali',
};

// ---------- KPI Ringkasan ----------
export const operatorKpis = {
  activeTemples: 5,
  totalTemples: 6,
  todayCeremonies: 2,
  registeredUmkm: 18,
  umkmTrend: 12,
  todayVisitors: 1247,
  visitorsTrend: 8,
};

// ---------- Pura yang dikelola operator (cuma di wilayahnya) ----------
export const operatorTemples = [
  {
    id: 'tirta-empul',
    name: 'Pura Tirta Empul',
    location: 'Manukaya, Tampaksiring',
    status: 'open',
    openingHours: { open: '06:00', close: '18:00' },
    ceremonyActive: false,
    ceremonyEndDate: null,
    todayVisitors: 412,
    capacity: 600,
    notes: 'Air suci tersedia. Pengunjung wajib menggunakan kain dan selendang.',
    accent: 'from-emerald-300/40 via-teal-200/30 to-yellow-100/30',
  },
  {
    id: 'gunung-lebah',
    name: 'Pura Gunung Lebah',
    location: 'Campuhan, Ubud',
    status: 'ceremony',
    openingHours: { open: '06:00', close: '17:00' },
    ceremonyActive: true,
    ceremonyEndDate: '26 Mei 2026',
    todayVisitors: 89,
    capacity: 200,
    notes: 'Upacara Piodalan berlangsung. Akses pengunjung dibatasi area luar.',
    accent: 'from-orange-300/40 via-amber-200/30 to-yellow-100/30',
  },
  {
    id: 'saraswati',
    name: 'Pura Taman Saraswati',
    location: 'Jl. Kajeng, Ubud',
    status: 'open',
    openingHours: { open: '07:00', close: '19:00' },
    ceremonyActive: false,
    ceremonyEndDate: null,
    todayVisitors: 287,
    capacity: 350,
    notes: 'Pemandangan kolam teratai. Foto diperbolehkan tanpa flash.',
    accent: 'from-sky-300/40 via-blue-200/30 to-cyan-100/30',
  },
  {
    id: 'dalem-agung',
    name: 'Pura Dalem Agung Padangtegal',
    location: 'Monkey Forest, Ubud',
    status: 'open',
    openingHours: { open: '08:30', close: '18:00' },
    ceremonyActive: false,
    ceremonyEndDate: null,
    todayVisitors: 318,
    capacity: 500,
    notes: 'Berada di kawasan Monkey Forest. Jangan membawa makanan terbuka.',
    accent: 'from-lime-300/40 via-green-200/30 to-emerald-100/30',
  },
  {
    id: 'desa-ubud',
    name: 'Pura Desa Ubud',
    location: 'Pusat Desa Ubud',
    status: 'ceremony',
    openingHours: { open: '06:00', close: '20:00' },
    ceremonyActive: true,
    ceremonyEndDate: '25 Mei 2026',
    todayVisitors: 141,
    capacity: 400,
    notes: 'Upacara odalan tilem. Pengunjung umum dipersilakan menyaksikan dari sisi luar.',
    accent: 'from-orange-300/40 via-amber-200/30 to-yellow-100/30',
  },
  {
    id: 'gunung-kawi',
    name: 'Pura Gunung Kawi Sebatu',
    location: 'Sebatu, Tegallalang',
    status: 'closed',
    openingHours: { open: '08:00', close: '17:00' },
    ceremonyActive: false,
    ceremonyEndDate: null,
    todayVisitors: 0,
    capacity: 250,
    notes: 'Sedang dalam renovasi area utama hingga 2 Juni 2026.',
    accent: 'from-rose-300/40 via-pink-200/30 to-orange-100/30',
  },
];

// ---------- Upacara hari ini ----------
export const todayCeremonies = [
  {
    id: 1,
    name: 'Odalan Tilem',
    temple: 'Pura Desa Ubud',
    time: '06:00 – 11:00',
    period: 'Pagi',
    status: 'ongoing',
  },
  {
    id: 2,
    name: 'Piodalan',
    temple: 'Pura Gunung Lebah',
    time: '17:00 – 21:00',
    period: 'Sore',
    status: 'upcoming',
  },
];

// ---------- UMKM lokal yang sudah didaftarkan ----------
export const operatorUmkm = [
  {
    id: 1,
    name: 'Warung Ibu Made',
    type: 'warung',
    owner: 'Ni Made Sari',
    phone: '+62 812-3456-7890',
    address: 'Jl. Raya Ubud No. 45',
    description: 'Warung tradisional Bali, spesialisasi nasi campur.',
    status: 'active',
    registeredDate: '12 Mar 2026',
  },
  {
    id: 2,
    name: 'Kopi Bali Cita Rasa',
    type: 'cafe',
    owner: 'I Ketut Adi',
    phone: '+62 813-9876-5432',
    address: 'Jl. Monkey Forest No. 78',
    description: 'Kopi luwak dan kopi lokal dari pegunungan Kintamani.',
    status: 'active',
    registeredDate: '4 Apr 2026',
  },
  {
    id: 3,
    name: 'Toko Suvenir Dewi',
    type: 'oleh-oleh',
    owner: 'Ni Putu Dewi',
    phone: '+62 821-1111-2233',
    address: 'Jl. Hanoman No. 12',
    description: 'Oleh-oleh khas Ubud: kain endek, anyaman, dan camilan tradisional.',
    status: 'active',
    registeredDate: '18 Apr 2026',
  },
  {
    id: 4,
    name: 'Ukir Kayu Pak Wayan',
    type: 'kerajinan',
    owner: 'I Wayan Suarna',
    phone: '+62 815-2266-7788',
    address: 'Banjar Tegal, Ubud',
    description: 'Patung kayu handmade berbagai motif tradisional Bali.',
    status: 'active',
    registeredDate: '2 Mei 2026',
  },
  {
    id: 5,
    name: 'Sambal Lalapan Bu Sari',
    type: 'warung',
    owner: 'Ni Wayan Sari',
    phone: '+62 819-4477-8899',
    address: 'Jl. Goutama No. 22',
    description: 'Lalapan ayam dan ikan dengan sambal matah autentik.',
    status: 'pending',
    registeredDate: '20 Mei 2026',
  },
  {
    id: 6,
    name: 'Madu Hutan Ubud',
    type: 'produk-lokal',
    owner: 'I Made Suparta',
    phone: '+62 822-5566-9911',
    address: 'Jl. Suweta No. 88',
    description: 'Madu hutan murni dari lebah lokal pegunungan Ubud.',
    status: 'pending',
    registeredDate: '22 Mei 2026',
  },
  {
    id: 7,
    name: 'Lukisan Ubud Gallery',
    type: 'kerajinan',
    owner: 'I Gusti Made Ardana',
    phone: '+62 877-3344-5566',
    address: 'Jl. Raya Andong No. 15',
    description: 'Galeri lukisan tradisional dan modern dari seniman lokal Ubud.',
    status: 'active',
    registeredDate: '14 Feb 2026',
  },
  {
    id: 8,
    name: 'Es Daluman Bu Tut',
    type: 'warung',
    owner: 'Ni Ketut Suarni',
    phone: '+62 813-8899-7766',
    address: 'Pasar Ubud, Los 12',
    description: 'Minuman tradisional Bali, es daluman dan loloh.',
    status: 'inactive',
    registeredDate: '8 Jan 2026',
  },
];

// ---------- Activity log (jejak aksi operator) ----------
export const operatorActivities = [
  {
    id: 1,
    action: 'Memperbarui jam kunjungan',
    target: 'Pura Tirta Empul',
    time: '15 menit lalu',
    type: 'update',
  },
  {
    id: 2,
    action: 'Mengaktifkan status upacara',
    target: 'Pura Gunung Lebah',
    time: '2 jam lalu',
    type: 'ceremony',
  },
  {
    id: 3,
    action: 'Mendaftarkan UMKM baru',
    target: 'Madu Hutan Ubud',
    time: '5 jam lalu',
    type: 'umkm',
  },
  {
    id: 4,
    action: 'Memperbarui catatan',
    target: 'Pura Dalem Agung Padangtegal',
    time: '1 hari lalu',
    type: 'update',
  },
  {
    id: 5,
    action: 'Menutup sementara',
    target: 'Pura Gunung Kawi Sebatu',
    time: '2 hari lalu',
    type: 'status',
  },
];

// ---------- Type options untuk UMKM form ----------
export const umkmTypes = [
  { id: 'warung', label: 'Warung Makan' },
  { id: 'cafe', label: 'Kafe' },
  { id: 'oleh-oleh', label: 'Toko Oleh-oleh' },
  { id: 'kerajinan', label: 'Kerajinan Tangan' },
  { id: 'produk-lokal', label: 'Produk Lokal' },
  { id: 'lainnya', label: 'Lainnya' },
];