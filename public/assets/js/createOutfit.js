$(document).ready(function(){
  
  // set up elements from html
  const outfitCreator = $('#outfit-creator');
  const createOutfit = $('#create-outfit');
  const carousel = $('.carousel');
  const clearOutfitBtn = $('#clear-outfit');
  const outfitName = $('#outfit-name');

  // global variables
  

  // FUNCTIONS ----------------------------------------------------

  function createNewOutfit(){
    const numberOfChildren = outfitCreator.contents().length;
    console.log('outfitCreator.contents()', outfitCreator.contents());
    const contents = outfitCreator.contents();
    console.log('numberOfChildren =', numberOfChildren)
    const children = outfitCreator.children('img').attr('data-id'); 
    console.log('children =', children); 
    console.log('outfitName.val() =', outfitName.val(), typeof(outfitName.val()));

    for(let i = 0; i < numberOfChildren; i++){
      console.log('contents[i] =', contents[i]);
    }
  }

  // ---- get ItemId --------------------------------
  // on click of item image from carousel,
  // return which item was chosen.
  // ------------------------------------------------
  function addItemToCreator(){
    console.log('item name =', $(this).attr('alt'));
    const itemName = $(this).attr('alt');
    console.log('item url =', $(this).attr('src'));
    const itemURL = $(this).attr('src'); 
    console.log('itemID =', $(this).attr('data-id'));
    const itemID = $(this).attr('data-id');
    const image = `<img src="${itemURL}" alt="${itemName}" data-id="${itemID}" />`;
    outfitCreator.append(image);

  }

  function clearOutfit(){
    outfitCreator.empty();
  }

  // End functions -------------------------------------------------

  // create event listeners 

  createOutfit.click(createNewOutfit);
  carousel.on('click', 'img', addItemToCreator);
  clearOutfitBtn.click(clearOutfit); 


  // function calls 





});