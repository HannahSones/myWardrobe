$(document).ready(function () {
  // Import function from another file to find the date.
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

  // ---------------------- generateID --------------------------------
  // generates the id string for each calendar day generated for showCalander.
  // ------------------------------------------------------------------
  function generateID(year, month, day) {
    const ys = year.toString();
    let ds = day.toString();
    month += 1;
    let ms = month.toString();
    const zero = '0';

    if (ms.length === 1) {
      ms = zero + ms;
    }
    if (ds.length === 1) {
      ds = zero + ds;
    }

    const id = `${ys}-${ms}-${ds}`;
    // console.log('id =', id);
    return id;
  }

  // ---------------------- showCalander ------------------------------
  // Display the calander in html.
  // ------------------------------------------------------------------
  function showCalendar(year, month, days) {
    // console.log('year', year, 'month', month, 'days', days);
    let d = 1;

    row.empty();
    // creating the cells for each day
    for (let i = 0; i < days; i++) {
      let id = generateID(year, month, d);
      let day = new Date(year, month, d).getDay();
      let dayName = weekDays[day];
      let cell = document.createElement('td');
      cell.setAttribute('id', id);
      let cellText = `${dayName} ${d}`;
      cell.append(cellText);
      row.append(cell);
      d++;
    }
  }

  // ---------------------- showMonth ------------------------------
  // Display the Month in calander container.
  // for some reason it did not read if else properly for === 11.
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

  // ------ getOutfitName -------------------------
  // gets the outfit name by specified id
  // called by getOutfitsIn Planner
  // -----------------------------------------------
  function getOutfitName(outfitID, callback) {
    // console.log('getOutfitName function called');
    $.ajax({
      type: 'GET',
      url: '/outfit/getName/' + outfitID,
    })
      .then((dataReturned) => {
        // console.log('data from GET outfitname =', dataReturned);
        // const count = dataReturned;
        // console.log('getOutfitCount function: count = ', count);
        callback(dataReturned);
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  }

  // ---------------------- getOutfitsInPlanner ---------------------
  // gets the outfits in the planner table and allocates
  // them to the calendar assciated date.
  // ----------------------------------------------------------------
  function getOutfitsInPlanner() {
    const userID = localStorage.getItem('userID');
    if (!userID) {
      return console.log('No User ID');
    }
    $.ajax({
      type: 'GET',
      url: `/outfit/inPlanner/${userID}`,
    })
      .then((dataReturned) => {
        // console.log('data from calendar GET planner =', dataReturned);
        // console.log('datareturned.length =', dataReturned.length);
        for (let i = 0; i < dataReturned.length; i++) {
          // console.log('i =',i);
          // console.log('dataReturned[i].outfitID =',dataReturned[i].outfitID);

          getOutfitName(dataReturned[i].outfitID, function (outfitData) {
            // console.log('outfitData get outfits in planner =', outfitData);
            // console.log('outfitData.name =', outfitData[0].name);
            const name = `<h3>${outfitData[0].name}</h3>`;
            $(`td#${dataReturned[i].date}`).append(name);
          });
        }
      })
      .catch((err) => {
        if (err) {
          console.log('no User ID');
        }
      });
  }

  // ---------------------- previous Month ---------------------------
  // Show the previous month
  // -----------------------------------------------------------------
  function previousMonth() {
    // console.log('prev month');
    let text = currentMonth.text();
    let value = monthNames.indexOf(text);
    value--;
    showMonth(value);
    getOutfitsInPlanner();
  }

  // ---------------------- next month ------------------------------
  // show the next month
  // ----------------------------------------------------------------
  function nextMonth() {
    // console.log('next month');
    let text = currentMonth.text();
    let value = monthNames.indexOf(text);
    value++;
    showMonth(value);
    getOutfitsInPlanner();
  }

  // FUNCTION CALLS

  showMonth(month);
  // page always loads the current month first.
  getOutfitsInPlanner();

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
