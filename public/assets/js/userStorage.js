$(document).ready(function () {
  /* Function that gets UserID when tab is clicked and serves the specific url with 
that user ID in */
  $('.wardrobeButton').click(async (e) => {
    e.preventDefault();
    const userID = await localStorage.getItem('userID');
    // console.log(userID);
    window.location.href = `/myWardrobe/${userID}`;
  });
  $('.savedOutfitsButton').click(async (e) => {
    e.preventDefault();
    const userID = await localStorage.getItem('userID');
    // console.log(userID);
    window.location.href = `/myOutfits/${userID}`;
  });
  $('.addNewButton').click(async (e) => {
    e.preventDefault();
    const userID = await localStorage.getItem('userID');
    // console.log(userID);
    window.location.href = `/addNew`;
  });
});
