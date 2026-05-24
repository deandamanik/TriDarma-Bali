import {
  calendarMonthMeta,
  formatDateKey,
  getMonthKey,
} from '../data/balineseCalendarData';
import { getBalineseHolidayRules } from './balineseHolidayRules';

const WUKU = [
  'Sinta',
  'Landep',
  'Ukir',
  'Kulantir',
  'Tolu',
  'Gumbreg',
  'Wariga',
  'Warigadean',
  'Julungwangi',
  'Sungsang',
  'Dungulan',
  'Kuningan',
  'Langkir',
  'Medangsia',
  'Pujut',
  'Pahang',
  'Krulut',
  'Merakih',
  'Tambir',
  'Medangkungan',
  'Matal',
  'Uye',
  'Menail',
  'Prangbakat',
  'Bala',
  'Ugu',
  'Wayang',
  'Kelawu',
  'Dukut',
  'Watugunung',
];

const PANCAWARA = ['Umanis', 'Paing', 'Pon', 'Wage', 'Kliwon'];

const SAPTAWARA = [
  'Redite',
  'Soma',
  'Anggara',
  'Buda',
  'Wraspati',
  'Sukra',
  'Saniscara',
];

const SASIH = [
  'Kasa',
  'Karo',
  'Katiga',
  'Kapat',
  'Kalima',
  'Kanem',
  'Kapitu',
  'Kawolu',
  'Kasanga',
  'Kadasa',
  'Jyaistha',
  'Asadha',
];

const CYCLE_ANCHOR_DATE = new Date(2026, 5, 17);

const ANCHOR_WUKU_INDEX = 10; // Dungulan
const ANCHOR_PANCAWARA_INDEX = 4; // Kliwon
const ANCHOR_SAPTAWARA_INDEX = 3; // Buda

const getNormalizedModulo = (value, modulo) => {
  return ((value % modulo) + modulo) % modulo;
};

const getDayDifference = (date) => {
  const cleanDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const diffTime = cleanDate.getTime() - CYCLE_ANCHOR_DATE.getTime();

  return Math.round(diffTime / (1000 * 60 * 60 * 24));
};

const getFallbackBalineseDayInfo = (date) => {
  const diff = getDayDifference(date);

  const wukuIndex = getNormalizedModulo(
    ANCHOR_WUKU_INDEX + Math.floor((diff + ANCHOR_SAPTAWARA_INDEX) / 7),
    30
  );

  const pancawaraIndex = getNormalizedModulo(
    ANCHOR_PANCAWARA_INDEX + diff,
    5
  );

  const saptawaraIndex = date.getDay();

  const sasihIndex = getNormalizedModulo(date.getMonth() + 6, 12);
  const dayOfMonth = date.getDate();

  const isPurnama = dayOfMonth === 15;
  const isTilem = dayOfMonth === 30 || dayOfMonth === 1;

  const sakaYear = date.getFullYear() - 78;

  const wuku = WUKU[wukuIndex];
  const pancawara = PANCAWARA[pancawaraIndex];
  const saptawara = SAPTAWARA[saptawaraIndex];
  const sasih = SASIH[sasihIndex];

  return {
    saka: `${sasih} ${sakaYear}`,
    pawukon: `${saptawara} ${pancawara} ${wuku}`,
    wuku,
    pancawara,
    saptawara,
    sasih,
    isPurnama,
    isTilem,
  };
};

export const getBalineseCalendarDay = (date) => {
  const dateKey = formatDateKey(date);
  const fallbackInfo = getFallbackBalineseDayInfo(date);

  const dayDataWithoutEvents = {
    date: dateKey,
    events: [],
    saka: fallbackInfo.saka,
    pawukon: fallbackInfo.pawukon,
    wuku: fallbackInfo.wuku,
    pancawara: fallbackInfo.pancawara,
    saptawara: fallbackInfo.saptawara,
    sasih: fallbackInfo.sasih,
    isPurnama: fallbackInfo.isPurnama,
    isTilem: fallbackInfo.isTilem,
  };

  const generatedEvents = getBalineseHolidayRules(dayDataWithoutEvents);

  return {
    ...dayDataWithoutEvents,
    events: generatedEvents,
  };
};

export const getBalineseCalendarMonth = (date) => {
  const monthKey = getMonthKey(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: lastDate }, (_, index) => {
    return getBalineseCalendarDay(new Date(year, month, index + 1));
  });

  const fallbackTitle = date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const events = days.flatMap((day) => day.events);

  const meta = calendarMonthMeta[monthKey] || {
    title: fallbackTitle,
    subtitle: 'Balinese Customary & Ceremonial Calendar',
    gregorian: fallbackTitle,
    saka: days[0]?.saka || `Saka ${year - 78}`,
    pawukon: [...new Set(days.map((day) => day.wuku))].slice(0, 7),
  };

  return {
    monthKey,
    meta,
    days,
    events,
  };
};