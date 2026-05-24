import { useMemo, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CalendarHero from '../../components/calendar/CalendarHero';
import CalendarGrid from '../../components/calendar/CalendarGrid';
import CalendarRightPanel from '../../components/calendar/CalendarRightPanel';
import CalendarHolidaySummary from '../../components/calendar/CalendarHolidaySummary';
import CalendarDatePicker from '../../components/calendar/CalendarDatePicker';
import CalendarReminderModal from '../../components/calendar/CalendarReminderModal';
import CalendarPrintReport from '../../components/calendar/CalendarPrintReport';
import {
  getBalineseCalendarMonth,
  getBalineseCalendarDay,
} from '../../services/balineseCalendarService';

const getToday = () => {
  const today = new Date();

  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
};

const getDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const Calendar = () => {
  const today = getToday();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState(getDateKey(today));
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [reminderEvent, setReminderEvent] = useState(null);

  const [isExporting, setIsExporting] = useState(false);

  const monthData = useMemo(() => {
    return getBalineseCalendarMonth(currentDate);
  }, [currentDate]);

  const selectedDayData = useMemo(() => {
    if (!selectedDate) return null;

    const [year, month, day] = selectedDate.split('-').map(Number);

    return getBalineseCalendarDay(new Date(year, month - 1, day));
  }, [selectedDate]);

  const handlePrevMonth = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );

    setCurrentDate(previousMonth);
    setSelectedDate(getDateKey(previousMonth));
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );

    setCurrentDate(nextMonth);
    setSelectedDate(getDateKey(nextMonth));
  };

  const handleGoToToday = () => {
    const realToday = getToday();

    setCurrentDate(
      new Date(realToday.getFullYear(), realToday.getMonth(), 1)
    );

    setSelectedDate(getDateKey(realToday));
  };

  const handleApplyPickedDate = (date) => {
    setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
    setSelectedDate(getDateKey(date));
  };

  const handleOpenReminder = (event) => {
    setReminderEvent(event);
    setIsReminderOpen(true);
  };

  const handleCloseReminder = () => {
    setIsReminderOpen(false);
    setReminderEvent(null);
  };

  const handleExportPdf = async () => {
    const element = document.getElementById('calendar-pdf-report');

    if (!element) {
      console.error('PDF report element not found.');
      return;
    }

    try {
      element.style.opacity = '1';
      element.style.zIndex = '-1';

      await new Promise((resolve) => setTimeout(resolve, 300));

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#fff8e8',
        logging: true,
        width: element.offsetWidth,
        height: element.offsetHeight,
        windowWidth: element.offsetWidth,
        windowHeight: element.offsetHeight,
      });

      const imageData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imageWidth = pageWidth;
      const imageHeight = (canvas.height * imageWidth) / canvas.width;

      let heightLeft = imageHeight;
      let position = 0;

      pdf.addImage(imageData, 'PNG', 0, position, imageWidth, imageHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imageHeight;
        pdf.addPage();
        pdf.addImage(imageData, 'PNG', 0, position, imageWidth, imageHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`tridarma-balinese-calendar-${selectedDate}.pdf`);
    } catch (error) {
      console.error('Failed to export PDF:', error);
    } finally {
      element.style.opacity = '0';
      element.style.zIndex = '-1';
    }
  };

  return (
    <main className="calendar-print-page min-h-screen bg-white font-poppins">
      <div className="calendar-screen-layout grid min-h-[calc(100vh-82px)] grid-cols-1 xl:grid-cols-[minmax(0,1fr)_330px] print:hidden">
        <section className="min-w-0 overflow-hidden">
          <CalendarHero
            meta={monthData.meta}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onToday={handleGoToToday}
            onExportPdf={handleExportPdf}
            isExporting={isExporting}
          />

          <div className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-10 lg:pt-14">
            <CalendarGrid
              currentDate={currentDate}
              monthDays={monthData.days}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
        </section>

        <aside className="border-t border-yellow-normal bg-orange-light/20 px-4 py-8 sm:px-6 xl:min-h-full xl:border-l xl:border-t-0">
          <CalendarRightPanel
            selectedDate={selectedDate}
            selectedDayData={selectedDayData}
            onOpenDatePicker={() => setIsDatePickerOpen(true)}
            onOpenReminder={handleOpenReminder}
          />

          <div className="mt-8 xl:mt-10">
            <CalendarHolidaySummary
              events={monthData.events}
              selectedDate={selectedDate}
              meta={monthData.meta}
            />
          </div>
        </aside>
      </div>

      <CalendarDatePicker
        isOpen={isDatePickerOpen}
        selectedDate={selectedDate}
        onClose={() => setIsDatePickerOpen(false)}
        onApplyDate={handleApplyPickedDate}
      />

      <CalendarReminderModal
        isOpen={isReminderOpen}
        event={reminderEvent}
        selectedDate={selectedDate}
        onClose={handleCloseReminder}
      />

      <CalendarPrintReport
        meta={monthData.meta}
        selectedDate={selectedDate}
        selectedDayData={selectedDayData}
        monthEvents={monthData.events}
      />
    </main>
  );
};

export default Calendar;