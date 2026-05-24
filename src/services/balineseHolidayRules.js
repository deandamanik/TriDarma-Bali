const createHoliday = ({
  id,
  date,
  title,
  description,
  type = 'holiday',
  saka,
  pawukon,
  location = 'All over Bali',
}) => {
  return {
    id,
    date,
    title,
    description,
    type,
    saka,
    pawukon,
    location,
  };
};

export const getBalineseHolidayRules = (dayData) => {
  if (!dayData) return [];

  const events = [];
  const { date, saka, pawukon, wuku, pancawara, saptawara } = dayData;

  const ruleIdPrefix = date.replaceAll('-', '');

  if (
    wuku === 'Watugunung' &&
    saptawara === 'Saniscara' &&
    pancawara === 'Umanis'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-saraswati`,
        date,
        title: 'Saraswati Day',
        description:
          'A sacred day honoring Goddess Saraswati as the symbol of knowledge, wisdom, art, and learning.',
        saka,
        pawukon,
      })
    );
  }

  if (
    wuku === 'Sinta' &&
    saptawara === 'Redite' &&
    pancawara === 'Paing'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-banyu-pinaruh`,
        date,
        title: 'Banyu Pinaruh',
        description:
          'A purification day after Saraswati, commonly marked by cleansing rituals and spiritual reflection.',
        type: 'ceremony',
        saka,
        pawukon,
      })
    );
  }

  if (
    wuku === 'Dungulan' &&
    saptawara === 'Anggara' &&
    pancawara === 'Wage'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-penampahan-galungan`,
        date,
        title: 'Penampahan Galungan',
        description:
          'A preparation day before Galungan, usually marked by cooking, offerings, and temple preparations.',
        saka,
        pawukon,
      })
    );
  }

  if (
    wuku === 'Dungulan' &&
    saptawara === 'Buda' &&
    pancawara === 'Kliwon'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-galungan`,
        date,
        title: 'Galungan Day',
        description:
          'A major celebration of the victory of Dharma over Adharma. Penjor are placed in front of homes and devotees gather at temples.',
        saka,
        pawukon,
      })
    );
  }

  if (
    wuku === 'Dungulan' &&
    saptawara === 'Wraspati' &&
    pancawara === 'Umanis'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-umanis-galungan`,
        date,
        title: 'Umanis Galungan',
        description:
          'A day after Galungan often used for visiting relatives and continuing ceremonial activities.',
        saka,
        pawukon,
      })
    );
  }

  if (
    wuku === 'Kuningan' &&
    saptawara === 'Sukra' &&
    pancawara === 'Wage'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-penampahan-kuningan`,
        date,
        title: 'Penampahan Kuningan',
        description:
          'A preparation day before Kuningan, commonly marked by offerings and ceremonial preparation.',
        saka,
        pawukon,
      })
    );
  }

  if (
    wuku === 'Kuningan' &&
    saptawara === 'Saniscara' &&
    pancawara === 'Kliwon'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-kuningan`,
        date,
        title: 'Kuningan Day',
        description:
          'A sacred day marking the end of the Galungan celebration period, when devotees pray and present offerings.',
        saka,
        pawukon,
      })
    );
  }

  if (
    wuku === 'Wariga' &&
    saptawara === 'Saniscara' &&
    pancawara === 'Kliwon'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-tumpek-wariga`,
        date,
        title: 'Tumpek Wariga',
        description:
          'A Balinese ceremonial day dedicated to plants, trees, and nature as a form of gratitude for fertility and balance.',
        type: 'ceremony',
        saka,
        pawukon,
      })
    );
  }

  if (
    wuku === 'Landep' &&
    saptawara === 'Saniscara' &&
    pancawara === 'Kliwon'
  ) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-tumpek-landep`,
        date,
        title: 'Tumpek Landep',
        description:
          'A Balinese ceremonial day dedicated to sharp tools, metal objects, and spiritual sharpness of the mind.',
        type: 'ceremony',
        saka,
        pawukon,
      })
    );
  }

  if (dayData.isPurnama) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-purnama`,
        date,
        title: `Purnama ${dayData.sasih || ''}`.trim(),
        description:
          'A full moon ceremony observed with prayers and offerings at temples and family shrines.',
        type: 'ceremony',
        saka,
        pawukon,
      })
    );
  }

  if (dayData.isTilem) {
    events.push(
      createHoliday({
        id: `${ruleIdPrefix}-tilem`,
        date,
        title: `Tilem ${dayData.sasih || ''}`.trim(),
        description:
          'A new moon ceremony observed with prayers, purification, and offerings.',
        type: 'ceremony',
        saka,
        pawukon,
      })
    );
  }

  return events;
};