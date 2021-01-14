const Top = require('./Top');

class Shirt extends Top {
  constructor(colour, pattern, weight, fabric){
    const sleeveStyle = 'long';
    const fastening = 'full button placket';
    const neckStyle = 'shirt collar';
    const hemLength = 'lower hips';
    const fit = 'loose';
    super(sleeveStyle, fastening, neckStyle, hemLength, fit);
    this.colour = colour;
    this.pattern = pattern;
    this.weight = weight;
    this.fabric = 'cotton';
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
      if(this.weight == 'sheer'){
        return 'remove from wardrobe';
      } else {
        return 'bottom';
      }
      break;

    case 'spring':
      if(this.weight == 'sheer' && layer.month == 'Mar'){
        return 'remove from wardrobe';
      } else if (this.weight == 'sheer' && layer.month != 'Mar'){
        return 'with base';
      } else {
        return 'bottom';
      }
      break;

    case 'summer':
      if(this.weight == 'sheer'){
        return 'with base';
      } else {
        return 'bottom';
      }
      break;

    case 'autumn':
      if(this.weight == 'sheer'){
        return 'remove from wardrobe';
      } else {
        return 'bottom';
      }
      break;

    }
  }

  getRule(){
    return 'no rule applied';
  }
}

const denimSplashShirt = new Shirt('indigo', 'paint splatter', 'medium');
denimSplashShirt.fabric = 'denim';
const militaryShirt = new Shirt('olive green', 'plain', 'medium');
const emboideredSymbolsShirt = new Shirt('white', 'embroidered logos', 'sheer');

const denimCuffedShirt = new Shirt('indigo', 'plain', 'heavy');
denimCuffedShirt.hemLength = 'high hips';
denimCuffedShirt.fabric = 'denim';

const faceShirt = new Shirt('white', 'continuous line faces', 'light');
faceShirt.hemLength = 'high hips';

const countryShirt = new Shirt('cream', 'small flowers', 'light');
countryShirt.hemLength = 'high hips';
countryShirt.neckStyle = 'manderine collar';


console.log( countryShirt.getGarmentType()); 