// ============================================================
// CSV export utility
// Mengubah array of objects menjadi file CSV yang bisa diunduh.
// ============================================================

const escapeCsvCell = (value) => {
  if (value === null || value === undefined) return '';

  const stringValue = String(value);

  // Jika mengandung koma, kutip, atau newline, harus di-quote dan escape kutip
  if (
    stringValue.includes(',') ||
    stringValue.includes('"') ||
    stringValue.includes('\n')
  ) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  return stringValue;
};

/**
 * Export array of objects ke file CSV dan trigger download.
 *
 * @param {Array<Object>} rows  - Data yang akan diexport
 * @param {Array<{key: string, label: string}>} columns - Definisi kolom
 * @param {string} filename     - Nama file (tanpa .csv)
 */
export const exportToCsv = (rows, columns, filename = 'export') => {
  if (!rows || rows.length === 0) {
    console.warn('exportToCsv: No data to export.');
    return;
  }

  const header = columns.map((col) => escapeCsvCell(col.label)).join(',');

  const body = rows
    .map((row) =>
      columns.map((col) => escapeCsvCell(row[col.key])).join(',')
    )
    .join('\n');

  // BOM agar Excel render UTF-8 dengan benar
  const csvContent = '\uFEFF' + header + '\n' + body;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');

  const today = new Date().toISOString().split('T')[0];

  link.href = url;
  link.download = `${filename}-${today}.csv`;
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};