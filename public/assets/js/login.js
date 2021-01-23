/* Functions that return Welcome messages depending on if the user is new or existing */

function welcomeBack(name) {
  return `
    <div class='welcomeBack'>
    <h1>Welcome Back ${name}!</h1>
    <h3> Pick up where you last left off!</h3>
    <button class='signOut'>Sign Out</button>
    </div>
    `;
}

function welcomeFirstTime(name) {
  return `
   <div class='welcomeFirst'>
    <h1>Welcome ${name}!</h1>
    <h3> Add Your Items to get started!</h3>
    </div>
   `;
}

/*  IIFE that checks for a user in local storage and decides what to return to the UI */
(async function () {
  const storageObject = {};
  const user = localStorage.getItem('user');
  storageObject.user = user;
  $.post({
    url: '/',
    data: storageObject,
  }).then((res) => {
    if (res.length > 0) {
      const userID = res[0].id;
      localStorage.setItem('userID', userID);
      $('.welcomeDiv').addClass('displayNone');
      $('.welcomeContent').append(welcomeBack(res[0].name));
    } else if (res.length === 0) {
      console.log('noo');
    }
  });
})();

/* This function runs when the user presses the sign in button, sets the local storage
 and makes a call to the DB to check for the users name  */

$('.signIn').submit((e) => {
  const userData = {};
  e.preventDefault();
  const user = $('.userNameInput').val();
  if (user === '') {
    /* If the user does not input a name */
    return $('.userNameInput').addClass('emptyForm');
  }
  userData.user = user;
  $.post({
    url: '/',
    data: userData,
  }).then((res) => {
    if (res.length > 0) {
      localStorage.setItem('user', user);
      localStorage.setItem('userID', res.id);
      $('.welcomeDiv').addClass('displayNone');
      $('.welcomeContent').append(welcomeBack(user));
      window.location = window.location;
    } else {
      $.post({
        url: '/create/user',
        data: userData,
      }).then((res) => {
        localStorage.setItem('user', user);
        localStorage.setItem('userID', res.id);
        $('.welcomeDiv').addClass('displayNone');
        $('.welcomeContent').append(welcomeFirstTime(user));
      });
    }
  });
});

/* Function to sign the user out if the button is pressed, removing local storage */
$(document).on('click', '.signOut', (e) => {
  e.preventDefault();
  localStorage.setItem('user', '');
  localStorage.setItem('userID', '');
  window.location = window.location;
});
