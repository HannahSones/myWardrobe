const Top = require('./Top');

class Tshirt extends Top {
  constructor(colour, pattern){
    const sleeveStyle = 'short';
    const fastening = 'none';
    const neckStyle = 'crew';
    const hemLength = 'lower hips';
    const fit = 'loose';
    super(sleeveStyle, fastening, neckStyle, hemLength, fit);
    this.colour = colour;
    this.pattern = pattern;
  }

  getGarmentType(){
    return {
      style: this.constructor.name,
      type: Object.getPrototypeOf(this.constructor).name,
      rule: this.getRule(),
    };
  }

  getLayer(){
    const layer = this.getSeason();
    switch(layer.season){
    case 'winter':
      if (this.sleeveStyle == 'long'){
        return 'bottom';
      } else {
        return 'remove from wardrobe';
      }
      break;

    case 'spring':
      if(this.fit == 'fitted'){
        return 'bottom';
      } else {
        return 'middle';
      }
      break;

    case 'summer':
      if (this.sleeveStyle == 'long'){
        return 'remove from wardrobe';
      } else {
        return 'bottom';
      }
      break;

    case 'autumn':
      if(this.fit == 'fitted'){
        return 'bottom';
      } else {
        return 'middle';
      }
      break;

    }
  }

  getRule(){
    if(this.hemLength == 'cropped'){
      return 'must have bottom or base layer';
    } else if (this.fit == 'fitted'){
      return 'no base layer';
    } else {
      return 'no rule applied';
    }
  }
}

const greyGraphiT = new Tshirt ('grey', 'transfer');
const whiteGraphiT = new Tshirt ('white', 'transfer');
const yellowLogoT = new Tshirt ('yellow', 'large SD logo');

const mustardT = new Tshirt ('mustard yellow', 'plain');
mustardT.sleeveStyle = 'long';

const baseballT = new Tshirt ('navy', 'large SD logo');
baseballT.sleeveStyle = 'long';

const yellowCollarT = new Tshirt ('black and white', 'striped');
yellowCollarT.hemLength = 'upper hips';
yellowCollarT.fit = 'box';

const blueSportT = new Tshirt ('blue', 'banded stripe');
blueSportT.fit = 'fitted';


// const myTshirts = {
//   greyGraphi,
//   whiteGraphi,
//   yellowLogoT,
//   mustardT,
//   baseballT,
//   yellowCollarT,
// }

const myTshirts = [
  {
    itemName: 'greyGraphiT',
    itemType: greyGraphiT.getGarmentType(),
    itemDetails: greyGraphiT,
  },
  {
    itemName: 'whiteGraphiT',
    itemType: whiteGraphiT.getGarmentType(),
    itemDetails: whiteGraphiT,
  },
  {
    itemName: 'yellowLogoT',
    itemType: yellowLogoT.getGarmentType(),
    itemDetails: yellowLogoT,
  },
  {
    itemName: 'mustardT',
    itemType: mustardT.getGarmentType(),
    itemDetails: mustardT,
  },
  {
    itemName: 'baseballT',
    itemType: baseballT.getGarmentType(),
    itemDetails: baseballT,
  },
  {
    itemName: 'yellowCollarT',
    itemType: yellowCollarT.getGarmentType(),
    itemDetails: yellowCollarT,
  },
  {
    itemName: 'blueSportT',
    itemType: blueSportT.getGarmentType(),
    itemDetails: blueSportT,
  },
];


// console.log("myTshirts =", myTshirts);
// console.log(" Diving =", myTshirts[0].itemType);
// console.log(" Diving further =", myTshirts[0].itemType.fastening);
// console.log("garment type = ", greyGraphi.getGarmentType());

function countItems(top, type){
  let counter = 0;
  for (let i = 0; i < top.length; i++) {
    if(top[i].itemType == type){
      counter++;
    }

  }
  return counter;
}

console.log('Tshirt count', countItems(myTshirts, 'Tshirt'));

function countShortSleeves(top){
  let counter = 0;
  for (let i = 0; i < top.length; i++) {
    if(top[i].itemDetails.sleeveStyle == 'short'){
      counter++;
    }

  }
  return counter;
}

console.log('Short sleeve count', countShortSleeves(myTshirts));

function getLongSleeveTops(top){
  let longSleeveTops = [];
  for (let i = 0; i < top.length; i++) {
    if(top[i].itemDetails.sleeveStyle == 'long'){
      longSleeveTops.push(top[i].itemName);
    }

  }
  return longSleeveTops ;
}

console.log('Long sleeve tops', getLongSleeveTops(myTshirts));
console.log(baseballT.getLayer());
console.log(whiteGraphiT.getLayer());

exports.Tshirt = Tshirt;
exports.myTshirts = myTshirts;