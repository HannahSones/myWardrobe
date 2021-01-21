// set up elements from html ---------------
const savedOutfits = $('#saved-outfits-message');

// Export functions
function messageData(){ /* eslint-disable-line no-unused-vars */
  const savedOutfitTips = [
    'Tip: Message alerts apear here to guide you through mis-actions. ',
    'Tip: Selections Timeout after 5 seconds, you may need to reselect and try again.',
    'Tip: Click on the calander day to select it. ',
    'Tip: You must select a day and an outfit to add the outfit to the calendar',
    'Tip: You can remove items from the calendar by selecting the day first. ', 
    'Tip: You can delete outfits you do not want any more. ',
    'Tip: Scroll to see more outfits. ',
    'Tip: Outfits you create in My Wardrobe are saved here. ',
  ];

  const savedOutfitAlerts = {
    noDate: 'There is no date selected for this action. Click on a day in the calendar and try again.',
    noOutfit: 'You need to select an outfit to make this action.', 
    noSave: 'There is no saved outfit for this day.',
    delete: 'Your outfit has been perminantly deleted.',
    removed: 'Your outfit has been removed from the calander.'
  }

  return {savedOutfitTips, savedOutfitAlerts};
}

function savedOutfitsAlertCall(action){
  savedOutfits.empty();
  const message = `<p>${action}</p>`;
  savedOutfits.append(message); 
}



$(document).ready(function(){

  

  //  global variables ----------------------
  

  // functions -------------------------------
  


  // event listeners -------------------------



  // function calls ---------------------------


});