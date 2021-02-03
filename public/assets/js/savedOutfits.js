$(document).ready(function () {
  // Import function from another file
  const { savedOutfitAlerts } = messageData();

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

  // ------ deleteOutfit ---------------------------
  // an outfit must be selected first
  // outfitID is save to selected outfit
  // function deletes the outfit if there is one selected.
  // -----------------------------------------------
  function deleteOutfit(outfitID) {
    console.log('deleting', selectedOutfit);
    $.ajax({
      type: 'DELETE',
      url: '/outfit/delete/' + outfitID,
    })
      .then(() => {
        // console.log('data from DELETE outfit =', dataReturned);
        selectedOutfit = 0;
        // showSavedOutfits(); -- function made redundent by handlebars
        location.reload();
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

  // ------ checkIfInPlanner ---------------------------
  // checks to see if an item is in the planner.
  // if no, calls delete Outfit above
  // if yes, alerts user to remove from planner first.
  // -----------------------------------------------
  function checkIfInPlanner() {
    if (selectedOutfit === 0) {
      // console.log('do nothing');
      savedOutfitsAlertCall(savedOutfitAlerts.noOutfit);
      // setTimeout(displayTips(), 10000);
    } else {
      const outfitID = selectedOutfit;
      $.ajax({
        type: 'GET',
        url: '/planner/isInPlanner/' + outfitID,
      })
        .then((dataReturned) => {
          console.log('datareturned is in planner =', dataReturned);
          if (dataReturned.length === 0) {
            deleteOutfit(outfitID);
          } else {
            savedOutfitsAlertCall(savedOutfitAlerts.inPlanner);
          }
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
      // console.log('timeout on selected outfit =', selectedOutfit);
    }, 5000);
  }

  // ------ addToPlannerTable ---------------------------
  // searches planner table for the selected date.
  // if date not yet saved create date
  // if date already exists in table update the outfit.
  // ----------------------------------------------------
  function addToPlannerTable() {
    // console.log('addToPlannerTable function called');
    if (selectedOutfit === 0) {
      // console.log('do nothing');
      savedOutfitsAlertCall(savedOutfitAlerts.noOutfit);
      setTimeout(displayTips(), 10000);
    } else if (calendarDayString === 'noneSelected') {
      savedOutfitsAlertCall(savedOutfitAlerts.noDate);
      setTimeout(displayTips(), 10000);
    } else {
      // console.log('adding to calander', selectedOutfit, calendarDayString);
      const outfit = selectedOutfit;
      const date = calendarDayString;
      const userID = localStorage.getItem('userID');
      $.ajax({
        type: 'GET',
        url: `/planner/getDate/${date}&${userID}`,
      })
        .then((dataReturned) => {
          // console.log('data from calendar GET outfit =', dataReturned);
          // console.log('datareturned.id =', dataReturned.id);

          if (dataReturned.id === 0) {
            $.ajax({
              type: 'POST',
              url: '/planner/newDate',
              data: {
                dateString: date,
                outfitID: outfit,
                userID: userID,
              },
            })
              .then(() => {
                // console.log('data from calendar POST outfit =', dataReturned);
                selectedOutfit = 0;
                calendarDayString = 'noneSelected';
                // getOutfitsInPlanner();
                location.reload();
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
              url: '/planner/updateDate',
              data: {
                dateString: date,
                outfitID: outfit,
              },
            })
              .then(() => {
                // console.log('data from calendar PUT outfit =', dataReturned);
                // getOutfitsInPlanner();
                location.reload();
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
    // console.log('removeFromPlannerTable clicked');
    if (calendarDayString === 'noneSelected') {
      savedOutfitsAlertCall(savedOutfitAlerts.noDate);
      setTimeout(displayTips(), 10000);
    } else {
      const day = $(`#${calendarDayString}`).attr('id');
      // console.log('day =', day);

      const child = $(`#${calendarDayString}`).children('h3').text();
      // console.log('child =', child, typeof child);

      if (child === '') {
        savedOutfitsAlertCall(savedOutfitAlerts.noSave);
        setTimeout(displayTips(), 10000);
      } else {
        // console.log('removing from planner', day);
        savedOutfitsAlertCall(savedOutfitAlerts.removed);
        setTimeout(displayTips(), 10000);

        $.ajax({
          type: 'DELETE',
          url: '/planner/deleteDate/' + day,
        })
          .then((dataReturned) => {
            /* eslint-disable-line no-unused-vars */
            // console.log('data from DELETE plannerEntry =', dataReturned);
            selectedOutfit = 0;
            calendarDayString = 'noneSelected';
            // do not call getOutfits in planner as it is auto called on page load.
            // getOutfitsInPlanner();
            location.reload();
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
  // calendarDay.on('click', 'td', addSelectionClass);
  deleteOutfitBtn.click(checkIfInPlanner);
  addToCalendar.click(addToPlannerTable);
  removeFromCalendar.click(removeFromPlannerTable);
  $(document).on('click', '.select-outfit', selectOutfit);

  // function calls if needed.
});
