$(document).ready(function () {
  const {
    currentMonth,
    currentYear,
    year,
    month,
    monthNames,
    weekDays,
  } = getDateData();

  // set up elements from html
  const row = $('#calendar-row');
  const prev = $('a#btn-prev');
  const next = $('a#btn-next');

  // FUNCTIONS

  // ---------------------- Days in Month ------------------------------
  // check how many days in a give month
  // returns the 32nd day after the month started.
  // subtracts the day returned from 32 to find the final day of the month.
  // eg 32nd day in feb = 4th march, 32 - 4 = 28.
  // --------------------------------------------------------------------
  function daysInMonth(year, month) {
    const days = 32 - new Date(year, month, 32).getDate();
    return days;
  }

  // ---------------------- showCalander ------------------------------
  // Display the calander in html.
  // ------------------------------------------------------------------
  function showCalendar(year, month, days) {
    let d = 1;
    row.empty();
    // creating the cells for each day
    for (let i = 0; i < days; i++) {
      let day = new Date(year, month, d).getDay();
      let dayName = weekDays[day];
      let cell = document.createElement('td');
      let cellText = `${dayName} ${d}`;
      cell.append(cellText);
      row.append(cell);
      d++;
    }
  }

  // ---------------------- showMonth ------------------------------
  // Display the Month in calander container.
  // ---------------------------------------------------------------
  function showMonth(month) {
    if (month === 0) {
      prev.addClass('hide');
    }

    if (month > 0) {
      prev.removeClass('hide');
    }

    if (month === 11) {
      next.addClass('hide');
    }

    if (month < 11) {
      next.removeClass('hide');
    }
    // how many days in the month.
    const days = daysInMonth(year, month);
    currentMonth.text(monthNames[month]);
    showCalendar(year, month, days);
  }

  // ---------------------- previous Month ---------------------------
  // Show the previous month
  // -----------------------------------------------------------------
  function previousMonth() {
    console.log('prev month');
    let text = currentMonth.text();
    let value = monthNames.indexOf(text);
    value--;
    showMonth(value);
  }

  // ---------------------- next month ------------------------------
  // show the next month
  // ----------------------------------------------------------------
  function nextMonth() {
    console.log('next month');
    let text = currentMonth.text();
    let value = monthNames.indexOf(text);
    value++;
    showMonth(value);
  }

  // FUNCTION CALLS

  showMonth(month);
  // page always loads the current month first.

  // Populate page on load
  currentYear.text(year);
  currentMonth.text(monthNames[month]);

  // create event listners
  prev.on('click', previousMonth);
  next.on('click', nextMonth);
});

// REFERENCES

// patel,n.(2018). Challenge of building a calander with pure javascript.
// Medium.com.
// https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-
// with-pure-javascript-a86f1303267d. (accessed: 14/02/2021).
