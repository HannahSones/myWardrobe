$('.wardrobeButton').click(async (e) => {
  e.preventDefault();
  console.log('hello');
  const userID = await localStorage.getItem('userID');
  console.log(userID);
  window.location.href = `/myWardrobe/${userID}`;
});
$('.savedOutfitsButton').click(async (e) => {
  e.preventDefault();
  console.log('hello');
  const userID = await localStorage.getItem('userID');
  console.log(userID);
  window.location.href = `/myOutfits/${userID}`;
});
$('.addNewButton').click(async (e) => {
  e.preventDefault();
  console.log('hello');
  const userID = await localStorage.getItem('userID');
  console.log(userID);
  window.location.href = `/addNew`;
});
