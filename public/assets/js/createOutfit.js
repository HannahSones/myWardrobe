$(document).ready(function () {
  // set up elements from html
  const outfitCreator = $('#outfit-creator');
  const createOutfit = $('#create-outfit');
  const carousel = $('.carousel');
  const clearOutfitBtn = $('#clear-outfit');
  const outfitName = $('#outfit-name');

  // global variables

  // FUNCTIONS ----------------------------------------------------

  function sendOutfitToDatabase(name, callback) {
    $.ajax({
      type: 'POST',
      url: '/create/newOutfit',
      data: {
        name: name,
      },
    })
      .then((dataReturned) => {
        // console.log('dataReturned create outfit POST =', dataReturned);
        // console.log(dataReturned.id);
        const outfitID = dataReturned.id;
        callback(outfitID);
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          throw err;
        }
      });
  }

  function addToOutfit(itemID, outfitID) {
    $.ajax({
      type: 'POST',
      url: '/update/addToOutfit',
      data: {
        itemID: itemID,
        outfitID: outfitID,
      },
    })
      .then(() => {
        // console.log('dataReturned add to outfit POST =', dataReturned);
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          throw err;
        }
      });
  }

  function createNewOutfit() {
    const name = outfitName.val();
    const numberOfChildren = outfitCreator.contents().length;
    const children = outfitCreator.find('img');

    if (name === '') {
      outfitName.attr('placeholder', 'NEED A NAME');
    } else if (numberOfChildren === 0) {
      console.log('do nothing');
    } else {
      let itemsInOutfit = [];
      children.each(function (index, element) {
        itemsInOutfit.push($(element).data('id'));
      });

      sendOutfitToDatabase(name, function (outfitID) {
        // console.log('createNewOutfit function callback =', outfitID);
        for (let i = 0; i < itemsInOutfit.length; i++) {
          const itemID = itemsInOutfit[i];
          // console.log('itemID =', itemID);
          addToOutfit(itemID, outfitID);
        }
      });
    }
  }

  // ---- get ItemId --------------------------------
  // on click of item image from carousel,
  // return which item was chosen.
  // ------------------------------------------------
  function addItemToCreator() {
    // console.log('item name =', $(this).attr('alt'));
    const itemName = $(this).attr('alt');
    // console.log('item url =', $(this).attr('src'));
    const itemURL = $(this).attr('src');
    // console.log('itemID =', $(this).attr('data-id'));
    const itemID = $(this).attr('data-id');
    const image = `<img src="${itemURL}" alt="${itemName}" data-id="${itemID}" />`;
    outfitCreator.append(image);
  }

  function clearOutfit() {
    outfitCreator.empty();
  }

  function removeSelectedItem() {
    $(this).remove();
  }

  // End functions -------------------------------------------------

  // create event listeners

  createOutfit.click(createNewOutfit);
  carousel.on('click', 'img', addItemToCreator);
  clearOutfitBtn.click(clearOutfit);
  outfitCreator.on('click', 'img', removeSelectedItem);

  // function calls
});
