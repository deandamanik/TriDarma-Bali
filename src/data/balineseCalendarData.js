export const calendarMonthMeta = {
  '2026-05': {
    title: 'May 2026',
    subtitle: 'Balinese Customary & Ceremonial Calendar',
    gregorian: 'May 2026',
    saka: 'Jyaistha – Asadha 1948',
    pawukon: ['Sinta', 'Landep', 'Ukir', 'Kulantir', 'Tolu', 'Gumbreg', 'Wariga'],
  },
};

export const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getMonthKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');

  return `${year}-${month}`;
};