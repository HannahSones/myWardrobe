// set up elements from html ---------------
const savedOutfitsMessage = $('#saved-outfits-message');
const myWardrobeMessage = $('#my-wardrobe-message');
const {
  savedOutfitAlerts,
  savedOutfitTips,
  myWardrobeAlerts,
  myWardrobeTips,
} = messageData();

// Export functions
function messageData() {
  /* eslint-disable-line no-unused-vars */
  const savedOutfitTips = [
    'Tip: Message alerts apear here to guide you through mis-actions. ',
    'Tip: Selections Timeout after 5 seconds, you may need to reselect and try again.',
    'Tip: Click on the calander day to select it. ',
    'Tip: You must select a day and an outfit to add the outfit to the calendar',
    'Tip: You can remove items from the calendar by selecting the day first. ',
    'Tip: You can delete outfits you do not want any more. ',
    'Tip: Scroll to see more outfits. ',
    'Tip: Outfits you create in My Wardrobe are saved here. ',
    'Tip: You must remove outfits from the planner before deleting them.',
  ];

  const savedOutfitAlerts = {
    noDate:
      'There is no date selected for this action. Click on a day in the calendar and try again.',
    noOutfit: 'You need to select an outfit to make this action.',
    noSave: 'There is no saved outfit for this day.',
    delete: 'Your outfit has been perminantly deleted.',
    removed: 'Your outfit has been removed from the calander.',
    inPlanner: 'You need to remove this outfit from the planner first.',
  };

  const myWardrobeTips = [
    'Tip: Click on a chosen item to remove it from the creator.',
    'Tip: Click clear outfit to start creating again.',
    'Tip: You can find your outfit in the Saved Outfits tab once you have created it.',
    'Tip: Click on items from the carousels to create your outfit.',
    'Tip: Five items will be visible in the creator, but it will hold more.',
    'Tip: The filter menu will show you specific category items like skirts',
    'Tip: Filter view all to get the full wardrobe back again.',
  ];

  const myWardrobeAlerts = {
    noItems:
      'There are no items in the creator. Choose your outfit before creating.',
    noName:
      'You have not named your outfit. Please fill in the Outfit Name field and try agian.',
    filter: 'This is just placeholder text, please choose another option.',
  };

  return {
    savedOutfitTips,
    savedOutfitAlerts,
    myWardrobeTips,
    myWardrobeAlerts,
  };
}

function displayTips() {
  /* eslint-disable-line no-unused-vars */
  displaySavedOutfitTip();
  displayMyWardrobeTip();
}

function savedOutfitsAlertCall(action) {
  savedOutfitsMessage.empty();
  const message = `<p>${action}</p>`;
  savedOutfitsMessage.append(message);
}

function myWardrobeAlertCall(action) {
  myWardrobeMessage.empty();
  const message = `<p>${action}</p>`;
  myWardrobeMessage.append(message);
}

function displaySavedOutfitTip() {
  savedOutfitsMessage.empty();
  const max = savedOutfitTips.length;
  // console.log('SO max =', max);
  const min = 0;
  const getTipIndex = Math.floor(Math.random() * (max - min) + min);
  // console.log('SO getTipIndex =', getTipIndex);
  const action = savedOutfitTips[getTipIndex];
  // console.log('SO action =', action);
  const message = `<p>${action}</p>`;
  savedOutfitsMessage.append(message);
}

function displayMyWardrobeTip() {
  myWardrobeMessage.empty();
  const max = myWardrobeTips.length;
  const min = 0;
  const getTipIndex = Math.floor(Math.random() * (max - min) + min);
  const action = myWardrobeTips[getTipIndex];
  const message = `<p>${action}</p>`;
  myWardrobeMessage.append(message);
}

$(document).ready(function () {
  // document variables

  // functions -------------------------------
  function init() {
    setInterval(displaySavedOutfitTip, 30000);
    setInterval(displayMyWardrobeTip, 30000);
  }

  // event listeners -------------------------

  // function calls ---------------------------
  init();
  displaySavedOutfitTip();
  displayMyWardrobeTip();
});
