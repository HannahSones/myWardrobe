$(document).ready(function () {
  // set up elements from html
  const outfits = $('#outfits-container');

  // FUNCTIONS ----------------------------------------------------

  // ------ getOutfitCount -------------------------
  // how many outfits are there in the outfits table.
  // -----------------------------------------------
  function getOutfitCount(callback) {
    $.ajax({
      type: 'GET',
      url: '/query/outfits',
    })
      .then((dataReturned) => {
        console.log('data from GET outfits =', dataReturned);
        const count = dataReturned.length;
        console.log('count = ', count);
        callback(count);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  function showSavedOutfits() {
    const count = getOutfitCount();
    console.log('showSavedOutfits function: count = ', count);
    outfits.empty();
    // creating the box for each outfit
    for (let i = 0; i < count; i++) {
      let box = document.createElement('div');
      box.attr('class', 'outfit-box');
      outfits.append(cell);
    }
  }

  // end of FUNCTIONS ----------------------------------------------------

  // create event listners

  // function calls
  showSavedOutfits();

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
});
