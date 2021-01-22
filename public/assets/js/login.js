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

// function sameName(name) {
//   return `
//     <div class=''>
//     <h1>Uh Oh</h1>
//     <h3> </h3>
//     </div>
//     `;
// }

(async function () {
  const storageObject = {};
  console.log('hello');
  const user = localStorage.getItem('user');
  storageObject.user = user;
  $.post({
    url: '/',
    data: storageObject,
  }).then((res) => {
    console.log(res.length);
    if (res.length > 0) {
      console.log(res);
      const userID = res[0].id;
      console.log(userID);
      localStorage.setItem('userID', userID);
      $('.welcomeDiv').addClass('displayNone');
      $('.welcomeContent').append(welcomeBack(res[0].name));
    } else if (res.length === 0) {
      console.log('noo');
    }
  });
})();

$('.signIn').submit((e) => {
  const userData = {};
  e.preventDefault();
  const user = $('.userNameInput').val();
  console.log(user);
  if (user === '') {
    return $('.userNameInput').addClass('emptyForm');
  }
  userData.user = user;
  $.post({
    url: '/',
    data: userData,
  }).then((res) => {
    if (res.length > 0) {
      console.log(res);
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
        console.log(res);
        console.log(user);
        console.log(res.id);
        localStorage.setItem('user', user);
        localStorage.setItem('userID', res.id);
        $('.welcomeDiv').addClass('displayNone');
        $('.welcomeContent').append(welcomeFirstTime(user));
      });
    }
  });
});

$(document).on('click', '.signOut', (e) => {
  e.preventDefault();
  console.log('clicked');
  localStorage.setItem('user', '');
  localStorage.setItem('userID', '');
  window.location = window.location;
});
