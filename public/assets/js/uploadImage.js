// Initial code for saving outfits, needs work
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

/* $('.wardrobeSubmit').click(async (e) => {
  e.preventDefault();
  console.log('hello');
  const url = await localStorage.getItem('url');
  console.log(url);
  console.log($('.userSelection'));
  const found = $('input').find((el) => el.checked === true);
  console.log(found);
});
 */

function itemType() {
  const inputs = $('.form-check-input');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked == true) {
      return parseInt(inputs[i].dataset.id);
    }
  }
}

// Name form submission
function nameSubmit() {
  const name = $('.nameSubmission').val();
  if (name == '') {
    $('.nameSubmission').addClass('emptyForm');
    return console.log('Empty Name Submission');
  }
  $('.nameSubmission').removeClass('emptyForm');
  return name;
}
// Colour form submission
function colourSubmit() {
  const colour = $('.colourSubmission').val();
  if (colour == '') {
    $('.colourSubmission').addClass('emptyForm');
    return console.log('Empty Colour Submission');
  }
  $('.colourSubmission').removeClass('emptyForm');
  return colour;
}
// Pattern form submission
function patternSubmit() {
  const pattern = $('.patternSubmission').val();
  if (pattern == '') {
    $('.patternSubmission').addClass('emptyForm');
    return console.log('Empty Pattern Submission');
  }
  $('.patternSubmission').removeClass('emptyForm');
  return pattern;
}
// Weight form submission
function weightSubmit() {
  const weight = $('.weightSubmission').val();
  if (weight == '') {
    $('.weightSubmission').addClass('emptyForm');
    return console.log('Empty Weight Submission');
  }
  $('.weightSubmission').removeClass('emptyForm');
  return weight;
}

function imageSubmit() {
  const dataArray = [];
  const dataObject = {};
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
    dataArray.push(res[0].url);
    dataArray.push(nameSubmit());
    dataArray.push(itemType());
    dataArray.push(colourSubmit());
    dataArray.push(patternSubmit());
    dataArray.push(weightSubmit());
    console.log(dataArray);
    if (dataArray.length !== 6) return console.log('no');
    dataObject.imageURL = dataArray[0];
    dataObject.categoryID = dataArray[2];
    dataObject.name = dataArray[1];
    dataObject.colour = dataArray[3];
    dataObject.pattern = dataArray[4];
    dataObject.weight = dataArray[5];
    $.ajax({
      type: 'POST',
      url: 'upload/item',
      data: dataObject,
    }).then((res) => {
      $('.nameSubmission').val('');
      $('.colourSubmission').val('');
      $('.patternSubmission').val('');
      $('.weightSubmission').val('');
    });
  });
}

$('.wardrobeSubmit').click((e) => {
  e.preventDefault();
  imageSubmit();
});
