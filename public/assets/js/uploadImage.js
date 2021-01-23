$('#typeSelection').change(function () {
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

function itemType() {
  const inputs = $('.form-check-input');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      return parseInt(inputs[i].dataset.id);
    }
  }
}

// Name form submission check to see if valid input
function nameSubmit() {
  const name = $('.nameSubmission').val();
  if (name === '') {
    $('.nameSubmission').addClass('emptyForm');
    return console.log('Empty Name Submission');
  }
  $('.nameSubmission').removeClass('emptyForm');
  return name;
}
// Colour form submission check to see if valid input
function colourSubmit() {
  const colour = $('.colourSubmission').val();
  if (colour === '') {
    $('.colourSubmission').addClass('emptyForm');
    return console.log('Empty Colour Submission');
  }
  $('.colourSubmission').removeClass('emptyForm');
  return colour;
}
// Pattern form submission check to see if valid input
function patternSubmit() {
  const pattern = $('.patternSubmission').val();
  if (pattern === '') {
    $('.patternSubmission').addClass('emptyForm');
    return console.log('Empty Pattern Submission');
  }
  $('.patternSubmission').removeClass('emptyForm');
  return pattern;
}
// Weight form submission check to see if valid input
function weightSubmit() {
  const weight = $('.weightSubmission').val();
  if (weight === '') {
    $('.weightSubmission').addClass('emptyForm');
    return console.log('Empty Weight Submission');
  }
  $('.weightSubmission').removeClass('emptyForm');
  return weight;
}

/* Lets the User know if the item saved successfully */
function itemSaved() {
  setTimeout(function () {
    $('.uploadAlert').addClass('displayNone');
  }, 5000);
  $('.uploadAlert').removeClass('displayNone');
}
function badUpload() {
  setTimeout(function () {
    $('.badUpload').addClass('displayNone');
  }, 5000);
  $('.badUpload').removeClass('displayNone');
}
/*On submitting the Form the checks are made to see if form is correct then posts
to Cloudinary followed by the Database*/
function imageSubmit() {
  const userID = localStorage.getItem('userID');
  if (!userID) {
    return (window.location.href = '/myWardrobe');
  }
  const dataArray = [];
  const dataObject = {};
  const theFile = $('#myFile')[0].files;
  if (theFile.length > 1 || theFile.length === 0) {
    return badUpload();
  }
  /* Form to send the file in to Cloudinary */
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
    dataArray.push(res[0].url);
    dataArray.push(nameSubmit());
    dataArray.push(itemType());
    dataArray.push(colourSubmit());
    dataArray.push(patternSubmit());
    dataArray.push(weightSubmit());
    console.log(dataArray);
    if (dataArray.length !== 6 || dataArray.includes(undefined)) {
      return badUpload();
    }
    dataObject.imageURL = dataArray[0];
    dataObject.categoryID = dataArray[2];
    dataObject.name = dataArray[1];
    dataObject.colour = dataArray[3];
    dataObject.pattern = dataArray[4];
    dataObject.weight = dataArray[5];
    $.ajax({
      /* Posts Entry to our Database */
      type: 'POST',
      url: `upload/item/${userID}`,
      data: dataObject,
    }).then(() => {
      $('#myFile').val('');
      $('.nameSubmission').val('');
      $('.colourSubmission').val('');
      $('.patternSubmission').val('');
      $('.weightSubmission').val('');
      itemSaved();
      $('.userSelection').load(location.href + ' .userSelection');
    });
  });
}

$('.wardrobeSubmit').click((e) => {
  e.preventDefault();
  imageSubmit();
});
