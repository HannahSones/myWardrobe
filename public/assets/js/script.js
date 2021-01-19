$(document).ready(function () {
  // import date elements from date.js
  const { currentMonth, currentYear, monthNames } = getDateData();

  // set up elements from html
  const calendarDay = $('#calendar-row');
  const carousel = $('.carousel');
  const deleteOutfitBtn = $('#delete-outfit');
  let selectedOutfit = 1;

  // FUNCTIONS ----------------------------------------------------

  // --------- get day ----------------
  // When day in planner is clicked,
  // returns the date format of selected day YYYY-MM-DD
  // -----------------------------------
  function getDayId() {
    const text = $(this).text().split(' ');
    let textDate = text[1];
    const textMonth = currentMonth.text();
    const textYear = currentYear.text();
    if (textDate.length === 1) {
      const zero = '0';
      textDate = zero + textDate;
      // console.log("textDate =", textDate, typeof(textDate));
    }

    // gets the index and plus 1 to account for indexing begining with zero.
    const monthIndex = monthNames.indexOf(textMonth) + 1;
    let valueMonth = monthIndex.toString();
    // console.log("valueMonth =", valueMonth, typeof(valueMonth));
    if (valueMonth.length === 1) {
      const zero = '0';
      valueMonth = zero + valueMonth;
      // console.log("valueMonth =", valueMonth, typeof(valueMonth));
    }

    const dayId = `${textYear}-${valueMonth}-${textDate}`;
    console.log('dayId =', dayId);

    return dayId;
  }

  // ------- unnamed function ------------------------
  // Displaying categories based on type selection in Add Item form.
  // -------------------------------------------------
  $('select').change(function () {
    const selection = document.getElementById('typeSelection').value;
    if (selection === 'Top') {
      $('#topTypeSelected').css('display', 'block');
      $('#bottomTypeSelected').css('display', 'none');
      $('#overallTypeSelected').css('display', 'none');
    } else if (selection === 'Bottom') {
      $('#topTypeSelected').css('display', 'none');
      $('#bottomTypeSelected').css('display', 'block');
      $('#overallTypeSelected').css('display', 'none');
    } else if (selection === 'Overall') {
      $('#topTypeSelected').css('display', 'none');
      $('#bottomTypeSelected').css('display', 'none');
      $('#overallTypeSelected').css('display', 'block');
    }
  });

  // ---- get ItemId --------------------------------
  // on click of item image from carousel,
  // return which item was chosen.
  // ------------------------------------------------
  function getItemId() {
    console.log('item info =', $(this).attr('alt'));
  }

  // ------ deleteOutfit ---------------------------
  // an outfit must be selected first
  // outfitID is save to selected outfit
  // function deletes the outfit if there is one selected. 
  // -----------------------------------------------
  function deleteOutfit() {
    console.log('delete outfit fucntion called');
    if (selectedOutfit === 0) {
      console.log('do nothing');
    } else {
      console.log('deleting', selectedOutfit);
      $.ajax({
        type: 'DELETE',
        url: '/delete/outfit/' + selectedOutfit,
      })
        .then((dataReturned) => {
          console.log('data from DELETE outfit =', dataReturned);
          selectedOutfit = 0;
          console.log('selectedOutfit =', selectedOutfit);
          // the data returned successful is {outfit:1, outfitItems: 2}
          // the data returned unsuccessful is {outfit:0, outfitItems: 0}
        })
        .catch((err) => {
          if (err) {throw err;}
        });
    }
  }

  // ------ selectOutfit ---------------------------
  // sets which outfit has been selected.
  // -----------------------------------------------
  function selectOutfit() {
    selectedOutfit = this.name;
    console.log('selectedOutfit = ', selectedOutfit);
  }

  // end of FUNCTIONS ----------------------------------------------------

  // create event listners
  calendarDay.on('click', 'td', getDayId);
  carousel.on('click', 'img', getItemId);
  deleteOutfitBtn.click(deleteOutfit);
  $(document).on('click', '.select-outfit', selectOutfit);

  // function calls if needed.
});
