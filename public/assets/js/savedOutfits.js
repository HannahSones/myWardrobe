$(document).ready(function () {

  // Import function from another file
  const {savedOutfitAlerts} = messageData();

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
  function deleteOutfit() {
    // console.log('delete outfit function called');
    if (selectedOutfit === 0) {
      // console.log('do nothing');
      savedOutfitsAlertCall(savedOutfitAlerts.noOutfit);
      setTimeout(displayTips(), 10000);

    } else {
      // console.log('deleting', selectedOutfit);
      $.ajax({
        type: 'DELETE',
        url: '/delete/outfit/' + selectedOutfit,
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
    if (selectedOutfit === 0) {
      // console.log('do nothing');
      savedOutfitsAlertCall(savedOutfitAlerts.noOutfit);
      setTimeout(displayTips(), 10000);

    } else if (calendarDayString === 'noneSelected'){
      savedOutfitsAlertCall(savedOutfitAlerts.noDate);
      setTimeout(displayTips(), 10000);

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
              url: '/update/existingDate',
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
      console.log('day =', day);

      const child = $(`#${calendarDayString}`).children('h3').text();
      console.log('child =', child, typeof child);

      if (child === '') {
        savedOutfitsAlertCall(savedOutfitAlerts.noSave);
        setTimeout(displayTips(), 10000);

      } else {
        // console.log('removing from planner', day);
        savedOutfitsAlertCall(savedOutfitAlerts.removed);
        setTimeout(displayTips(), 10000);

        $.ajax({
          type: 'DELETE',
          url: '/delete/plannerDate/' + day,
        })
          .then((dataReturned) => {
            console.log('data from DELETE plannerEntry =', dataReturned);
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
  deleteOutfitBtn.click(deleteOutfit);
  addToCalendar.click(addToPlannerTable);
  removeFromCalendar.click(removeFromPlannerTable);
  $(document).on('click', '.select-outfit', selectOutfit);

  // function calls if needed.
});


// made redundent by handlebars 

/* $(document).ready(function () {
  // set up elements from html
  const outfits = $('#outfits-container');

  // FUNCTIONS ----------------------------------------------------

  // ------ getOutfitInfo -------------------------
  // how many outfits are there in the outfits table.
  // What is the Outfit id and name.
  // -----------------------------------------------
  function getOutfitInfo(callback) {
    $.ajax({
      type: 'GET',
      url: '/query/outfits',
    })
      .then((dataReturned) => {
        // console.log('data from GET outfits =', dataReturned);
        // const count = dataReturned;
        // console.log('getOutfitCount function: count = ', count);
        callback(dataReturned);
      })
      .catch((err) => {
        if (err){throw err;}
      });
  }

  // ------ fill outfits -------------------------
  // populates showSavedOutfits divs with items from getOutfit Items
  // called from showSavedOutfits function.
  // -------------------------------------------------
  function fillOutfits(outfitID) {
    getOutfitItems(outfitID, function (callback) {
      // console.log('callback', callback);
      const div = $(`#outfit-${callback[0].id}`);
      for (let i = 0; i < callback[0].items.length; i++) {
        let item = `<p>${callback[0].items[i].name}</p>`;
        div.append(item);
      }
      const btn = `<button class="select-outfit" name="${callback[0].id}"> Select Outfit </button>`;
      div.append(btn);
    });
  }

  // ------ showSavedOutfits -------------------------
  // Shows the outfits saved in the outfits table.
  // uses a callback function to get the outfits from the getOutfitInfo function
  // ---- need to fill ----
  // -------------------------------------------------
  function showSavedOutfits() {
    getOutfitInfo(function (outfitData) {
      // console.log('outfitData =', outfitData, typeof outfitData);
      const count = outfitData.length;
      // console.log('showSavedOutfits function: count = ', count);
      outfits.empty();
      // creating the box for each outfit
      for (let i = 0; i < count; i++) {
        let div = `<div id="outfit-${outfitData[i].id}" class="outfit-box"> <h3>${outfitData[i].name}</h3> </div>`;
        outfits.append(div);
      }
      for (let j = 0; j < count; j++) {
        fillOutfits(outfitData[j].id);
      }
    });
  }

  // ------ getOutfitItems -------------------------
  // gets the itemss that make up a chosen outfit specified by id
  // -------------------------------------------------

  function getOutfitItems(outfitID, callback) {
    $.ajax({
      type: 'GET',
      url: '/query/outfit/' + outfitID,
    })
      .then((dataReturned) => {
        // console.log('data from GET items =', dataReturned);
        // const count = dataReturned;
        // console.log('getOutfitCount function: count = ', count);
        callback(dataReturned);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  })();*/

// end of FUNCTIONS ----------------------------------------------------

// create event listners

// function calls
//showSavedOutfits();

//});
