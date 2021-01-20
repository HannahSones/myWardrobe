const button = $('.myForm');
const fileInput = $('#myFile');
const uploadArray = [];
button.click((e) => {
  localStorage.setItem('url', '');
  e.preventDefault();
  const theFile = $('#myFile')[0].files;
  if (theFile.length > 1 || theFile.length == 0) {
    return console.log('nooo');
  }
  console.log(theFile);
  const formData = new FormData();
  Object.keys(theFile).forEach((key) => {
    formData.append('image', theFile[key]);
  });
  $.post({
    url: '/upload',
    data: formData,
    processData: false,
    contentType: false,
  }).then((res) => {
    console.log(res);
    localStorage.setItem('url', res[0].url);
  });
});

$('select').change(function () {
  const selection = document.getElementById('typeSelection').value;
  if (selection === 'Top') {
    $('#topTypeSelected').css('display', 'block');
    $('#bottomTypeSelected').css('display', 'none');
    $('#overallTypeSelected').css('display', 'none');
  } else if (selection === 'Bottom') {
    $('#topTypeSelected').css('display', 'none');
    $('#bottomTypeSelected').css('display', 'block');
    $('#overallTypeSelected').css('display', 'none');
  } else if (selection === 'Overall') {
    $('#topTypeSelected').css('display', 'none');
    $('#bottomTypeSelected').css('display', 'none');
    $('#overallTypeSelected').css('display', 'block');
  }
});

$('.wardrobeSubmit').click(async (e) => {
  e.preventDefault();
  console.log('hello');
  const url = await localStorage.getItem('url');
  console.log(url);
  console.log($('.userSelection'));
});
