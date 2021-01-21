$(document).ready(function () {

  // set up elements from html
  const calendarDay = $('#calendar-row');
  const deleteOutfitBtn = $('#delete-outfit');
  const addToCalendar = $('#add-to-calendar');
  const removeFromCalendar = $('#remove-from-calendar');

  // global variables
  let selectedOutfit = 0;
  let calendarDayString = 'noneSelected';

  // FUNCTIONS ----------------------------------------------------

  // --------- get day ID ---------------------------
  // When day in planner is clicked,
  // returns the date format of selected day YYYY-MM-DD
  // ------------------------------------------------
  function getDayId() {
    const id = $(this).attr('id');

    // console.log('id =', id, typeof(id));

    calendarDayString = id;
    console.log('calendarDayString = ', calendarDayString);
    setTimeout(function () {
      calendarDayString = 'noneSelected';
      console.log('timeout on calendarDayString =', calendarDayString);
    }, 5000);
  }

  // ------- unnamed function -----------------------------------
  // Displaying categories based on type selection in Add Item form.
  // ------------------------------------------------------------
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

  // ------ deleteOutfit ---------------------------
  // an outfit must be selected first
  // outfitID is save to selected outfit
  // function deletes the outfit if there is one selected.
  // -----------------------------------------------
  function deleteOutfit() {
    // console.log('delete outfit function called');
    if (selectedOutfit === 0) {
      console.log('do nothing');
    } else {
      // console.log('deleting', selectedOutfit);
      $.ajax({
        type: 'DELETE',
        url: '/delete/outfit/' + selectedOutfit,
      })
        .then(() => {
          // console.log('data from DELETE outfit =', dataReturned);
          selectedOutfit = 0;
          showSavedOutfits();
          // console.log('selectedOutfit =', selectedOutfit);
          // the data returned successful is {outfit:1, outfitItems: 2} where 1 and 2 are the number of items changed/deleted
          // the data returned unsuccessful is {outfit:0, outfitItems: 0}
        })
        .catch((err) => {
          if (err) {
            throw err;
          }
        });
    }
  }

  // ------ selectOutfit ---------------------------
  // sets which outfit has been selected.
  // you have 5 seconds to choose next action or it reverts to 0.
  // this saves from accidental delete.
  // -----------------------------------------------
  function selectOutfit() {
    selectedOutfit = this.name;
    console.log('selectedOutfit = ', selectedOutfit);
    setTimeout(function () {
      selectedOutfit = 0;
      console.log('timeout on selected outfit =', selectedOutfit);
    }, 5000);
  }

  // ------ addToPlannerTable ---------------------------
  // searches planner table for the selected date.
  // if date not yet saved create date
  // if date already exists in table update the outfit.
  // ----------------------------------------------------
  function addToPlannerTable() {
    // console.log('addToPlannerTable function called');
    if (selectedOutfit === 0 || calendarDayString === 'noneSelected') {

      console.log('do nothing');
    } else {
      // console.log('adding to calander', selectedOutfit, calendarDayString);
      const outfit = selectedOutfit;
      const date = calendarDayString;

      $.ajax({
        type: 'GET',
        url: '/query/planner/' + date,
      })
        .then((dataReturned) => {
          // console.log('data from calendar GET outfit =', dataReturned);
          // console.log('datareturned.id =', dataReturned.id);

          if (dataReturned.id === 0) {
            $.ajax({
              type: 'POST',
              url: '/create/newDate',
              data: {
                dateString: date,
                outfitID: outfit,
              },
            })
              .then(() => {

                // console.log('data from calendar POST outfit =', dataReturned);
                selectedOutfit = 0;
                calendarDayString = 'noneSelected';
                getOutfitsInPlanner();

              })
              .catch((err) => {
                console.log(err);
                if (err) {
                  throw err;
                }
              });
          } else {
            $.ajax({
              type: 'PUT',
              url: '/update/existingDate',
              data: {
                dateString: date,
                outfitID: outfit,
              },
            })
              .then(() => {


                // console.log('data from calendar PUT outfit =', dataReturned);
                getOutfitsInPlanner();

              })
              .catch((err) => {
                if (err) {
                  throw err;
                }
              });
          }
        })
        .catch((err) => {
          if (err) {
            throw err;
          }
        });
    }
  }


  // ------ remove from planner table ---------------------------
  // remove an outfit from the planner
  // ----------------------------------------------------
  function removeFromPlannerTable() {
    console.log('removeFromPlannerTable clicked');
    if (calendarDayString === 'noneSelected') {
      console.log('do nothing');
    } else {
      const day = $(`#${calendarDayString}`).attr('id');
      console.log('day =', day);

      const child = $(`#${calendarDayString}`).children('h3').text();
      console.log('child =', child, typeof child);

      if (child === '') {
        console.log('no outfit here');

      } else {
        console.log('removing from planner', day);
        $.ajax({
          type: 'DELETE',
          url: '/delete/plannerDate/' + day,
        })
          .then((dataReturned) => {
            console.log('data from DELETE plannerEntry =', dataReturned);
            selectedOutfit = 0;
            calendarDayString ='noneSelected';
            getOutfitsInPlanner();
            // console.log('selectedOutfit =', selectedOutfit);
            // the data returned successful is {outfit:1, outfitItems: 2} where 1 and 2 are the number of items changed/deleted
            // the data returned unsuccessful is {outfit:0, outfitItems: 0}
          })
          .catch((err) => {
            if (err) {
              throw err;
            }
          });
      }
    }
  }

  // end of FUNCTIONS ----------------------------------------------------

  // create event listners
  calendarDay.on('click', 'td', getDayId);
  deleteOutfitBtn.click(deleteOutfit);
  addToCalendar.click(addToPlannerTable);
  removeFromCalendar.click(removeFromPlannerTable);
  $(document).on('click', '.select-outfit', selectOutfit);

  // function calls if needed.
});
