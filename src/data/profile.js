// ============================================================
// Data dummy untuk halaman Profile (belum ada backend).
// Ganti dengan data dari API/auth context kamu nanti.
// ============================================================

export const CURRENT_USER = {
  name: 'Tut Anca',
  email: 'tutanca@example.com',
  phone: '0812-3456-7890',
  status: 'General / Professional',
  joinedAt: 'January 2026',
  avatar: null, // null -> tampil inisial
};

// Riwayat laporan pelanggaran adat
export const MY_REPORTS = [
  {
    id: 'RPT-2026-014',
    title: 'Inappropriate clothing inside temple area',
    location: 'Pura Tirta Empul, Tampaksiring',
    date: 'May 18, 2026',
    status: 'In Review',
  },
  {
    id: 'RPT-2026-009',
    title: 'Climbing on a sacred shrine for photos',
    location: 'Pura Lempuyang, Karangasem',
    date: 'April 30, 2026',
    status: 'Resolved',
  },
  {
    id: 'RPT-2026-003',
    title: 'Drone flown over an ongoing ceremony',
    location: 'Pura Besakih, Karangasem',
    date: 'March 12, 2026',
    status: 'Rejected',
  },
];

// Artikel yang di-bookmark (id mengacu ke ARTICLES di data/articles.js)
export const MY_BOOKMARKS = [1, 5, 8];