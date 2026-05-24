const formatDisplayDate = (dateKey) => {
  if (!dateKey) return '-';

  return new Date(dateKey).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const formatDay = (dateKey) => {
  return new Date(dateKey).toLocaleDateString('en-GB', {
    day: '2-digit',
  });
};

const formatMonthShort = (dateKey) => {
  return new Date(dateKey).toLocaleDateString('en-GB', {
    month: 'short',
  });
};

const styles = {
  report: {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: -1,
    width: '794px',
    background: '#fff8e8',
    padding: '40px',
    fontFamily: 'Poppins, Arial, sans-serif',
    color: '#4b2115',
    opacity: 0,
    boxSizing: 'border-box',
  },
  cover: {
    borderRadius: '28px',
    background: 'linear-gradient(135deg, #6f2f1d 0%, #9b4b25 100%)',
    padding: '28px',
    color: '#fff8e8',
  },
  coverContent: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '24px',
  },
  kicker: {
    margin: '0 0 8px',
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#f7c76b',
  },
  title: {
    margin: 0,
    fontSize: '38px',
    lineHeight: 1,
    fontWeight: 900,
    color: '#ffffff',
  },
  subtitle: {
    margin: '12px 0 0',
    fontSize: '14px',
    fontWeight: 600,
    color: '#f7ead2',
  },
  dateBadge: {
    minWidth: '170px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.16)',
    padding: '16px',
  },
  badgeLabel: {
    margin: 0,
    fontSize: '10px',
    fontWeight: 800,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#f7c76b',
  },
  badgeValue: {
    margin: '8px 0 0',
    fontSize: '14px',
    fontWeight: 900,
    lineHeight: 1.3,
    color: '#ffffff',
  },
  topGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginTop: '20px',
  },
  cardDark: {
    borderRadius: '22px',
    background: '#4b2115',
    padding: '20px',
    color: '#ffffff',
  },
  cardLight: {
    borderRadius: '22px',
    border: '1px solid #e7c979',
    background: '#ffffff',
    padding: '20px',
  },
  label: {
    margin: '0 0 8px',
    fontSize: '10px',
    fontWeight: 900,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#b46a28',
  },
  labelGold: {
    margin: '0 0 8px',
    fontSize: '10px',
    fontWeight: 900,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#f7c76b',
  },
  cardTitleDark: {
    margin: 0,
    fontSize: '16px',
    lineHeight: 1.35,
    fontWeight: 900,
    color: '#ffffff',
  },
  cardTitleLight: {
    margin: 0,
    fontSize: '16px',
    lineHeight: 1.35,
    fontWeight: 900,
    color: '#4b2115',
  },
  section: {
    marginTop: '20px',
    borderRadius: '26px',
    border: '1px solid #e7c979',
    background: '#ffffff',
    padding: '24px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    marginBottom: '16px',
  },
  sectionTitle: {
    margin: '4px 0 0',
    fontSize: '24px',
    fontWeight: 900,
    color: '#4b2115',
  },
  countBadge: {
    borderRadius: '999px',
    background: '#fff0c2',
    padding: '8px 14px',
    fontSize: '12px',
    fontWeight: 900,
    color: '#7a351f',
    whiteSpace: 'nowrap',
  },
  highlight: {
    borderRadius: '22px',
    background: '#fff3c9',
    padding: '20px',
  },
  description: {
    margin: 0,
    fontSize: '14px',
    lineHeight: 1.6,
    fontWeight: 600,
    color: '#6d4a3e',
  },
  metaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginTop: '20px',
  },
  metaCard: {
    borderRadius: '16px',
    background: '#ffffff',
    padding: '16px',
  },
  metaLabel: {
    margin: 0,
    fontSize: '9px',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#9a7b6e',
  },
  metaValue: {
    margin: '4px 0 0',
    fontSize: '12px',
    lineHeight: 1.35,
    fontWeight: 900,
    color: '#4b2115',
  },
  emptyBox: {
    borderRadius: '22px',
    border: '1px dashed #d9b458',
    background: '#fff8e8',
    padding: '20px',
  },
  holidayGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  holidayItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderRadius: '18px',
    border: '1px solid #f0d894',
    background: '#fff8e8',
    padding: '12px',
    minWidth: 0,
  },
  dateBox: {
    display: 'grid',
    placeItems: 'center',
    width: '48px',
    height: '56px',
    flexShrink: 0,
    borderRadius: '16px',
    background: '#7a351f',
    color: '#ffffff',
  },
  dayText: {
    margin: 0,
    fontSize: '18px',
    lineHeight: 1,
    fontWeight: 900,
  },
  monthText: {
    margin: '4px 0 0',
    fontSize: '9px',
    fontWeight: 800,
    textTransform: 'uppercase',
    color: '#f7c76b',
  },
  holidayTitle: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 900,
    color: '#4b2115',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  holidaySub: {
    margin: '4px 0 0',
    fontSize: '10px',
    lineHeight: 1.35,
    fontWeight: 600,
    color: '#7d6257',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    marginTop: '20px',
    paddingTop: '16px',
    borderTop: '1px solid #e7c979',
    fontSize: '11px',
    fontWeight: 600,
    color: '#7d6257',
  },
};

const CalendarPrintReport = ({
  meta,
  selectedDate,
  selectedDayData,
  monthEvents,
}) => {
  const selectedEvents = selectedDayData?.events || [];
  const mainEvent = selectedEvents[0];

  return (
    <section id="calendar-pdf-report" style={styles.report}>
      <div style={styles.cover}>
        <div style={styles.coverContent}>
          <div>
            <p style={styles.kicker}>TriDarma Bali</p>

            <h1 style={styles.title}>{meta.gregorian}</h1>

            <p style={styles.subtitle}>
              Balinese Customary & Ceremonial Calendar
            </p>
          </div>

          <div style={styles.dateBadge}>
            <p style={styles.badgeLabel}>Selected Date</p>

            <p style={styles.badgeValue}>{formatDisplayDate(selectedDate)}</p>
          </div>
        </div>
      </div>

      <div style={styles.topGrid}>
        <div style={styles.cardDark}>
          <p style={styles.labelGold}>Saka Calendar</p>

          <h2 style={styles.cardTitleDark}>
            {selectedDayData?.saka || meta.saka}
          </h2>
        </div>

        <div style={styles.cardLight}>
          <p style={styles.label}>Pawukon</p>

          <h2 style={styles.cardTitleLight}>
            {selectedDayData?.pawukon || '-'}
          </h2>
        </div>

        <div style={styles.cardLight}>
          <p style={styles.label}>Wuku</p>

          <h2 style={styles.cardTitleLight}>
            {selectedDayData?.wuku || '-'}
          </h2>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.label}>Selected Ceremony</p>

            <h2 style={styles.sectionTitle}>
              {mainEvent ? mainEvent.title : 'No major ceremony'}
            </h2>
          </div>

          <span style={styles.countBadge}>{selectedEvents.length} event</span>
        </div>

        {mainEvent ? (
          <div style={styles.highlight}>
            <p style={styles.description}>{mainEvent.description}</p>

            <div style={styles.metaGrid}>
              <div style={styles.metaCard}>
                <p style={styles.metaLabel}>Date</p>
                <p style={styles.metaValue}>
                  {formatDisplayDate(mainEvent.date)}
                </p>
              </div>

              <div style={styles.metaCard}>
                <p style={styles.metaLabel}>Location</p>
                <p style={styles.metaValue}>{mainEvent.location}</p>
              </div>

              <div style={styles.metaCard}>
                <p style={styles.metaLabel}>Type</p>
                <p style={styles.metaValue}>{mainEvent.type}</p>
              </div>
            </div>
          </div>
        ) : (
          <div style={styles.emptyBox}>
            <p style={styles.description}>
              This date still contains Balinese day information such as Saka,
              Pawukon, Wuku, Pancawara, and Saptawara.
            </p>
          </div>
        )}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.label}>Monthly Holiday Summary</p>

            <h2 style={styles.sectionTitle}>Important Days</h2>
          </div>

          <span style={styles.countBadge}>{monthEvents.length} holidays</span>
        </div>

        {monthEvents.length > 0 ? (
          <div style={styles.holidayGrid}>
            {monthEvents.slice(0, 10).map((event) => (
              <div key={event.id} style={styles.holidayItem}>
                <div style={styles.dateBox}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={styles.dayText}>{formatDay(event.date)}</p>
                    <p style={styles.monthText}>
                      {formatMonthShort(event.date)}
                    </p>
                  </div>
                </div>

                <div style={{ minWidth: 0 }}>
                  <h3 style={styles.holidayTitle}>{event.title}</h3>
                  <p style={styles.holidaySub}>{event.pawukon}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.emptyBox}>
            <p style={styles.description}>
              No major holidays found this month. Daily Balinese calendar
              information is still available.
            </p>
          </div>
        )}
      </div>

      <div style={styles.footer}>
        <p style={{ margin: 0 }}>
          Generated by <strong>TriDarma Bali</strong> — Cultural tourism
          education platform.
        </p>

        <p style={{ margin: 0 }}>Balinese Calendar Feature</p>
      </div>
    </section>
  );
};

export default CalendarPrintReport;