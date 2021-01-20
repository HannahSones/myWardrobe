console.log('hello');
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

  // ------ getOutfitItems -------------------------
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

  // EXAMPLE ajax call on page load calls items from DB and displays using image url
  /*(async function itemCheck() {
    // ignore commented code thats my testing
        const get = await localStorage.getItem('User');
    console.log(get);
    if (get == 'corey') {} 
    const select = await $.get('query/Corey/items').then((res) => {
      res.forEach((item) => {
        $('.exampleDiv').append(
          `<img width="100" height="100" src='${item.imageURL}'></img>`
        );
      });
    });

  })();*/

// end of FUNCTIONS ----------------------------------------------------

// create event listners

// function calls
//showSavedOutfits();

//});
