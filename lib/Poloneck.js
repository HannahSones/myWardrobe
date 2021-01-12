const Top = require('./Top');

class Poloneck extends Top {
  constructor(colour, pattern){
    const sleeveStyle = 'full';
    const fastening = 'over the head';
    const neckStyle = 'polo-neck';
    const hemLength = 'hips';
    const fit = 'fitted';
    super(sleeveStyle, fastening, neckStyle, hemLength, fit);
    this.colour = colour;
    this.pattern = 'ribbed';
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
      return 'base';
      break;

    case 'spring':
      if(layer.month == 'Mar'){
        return 'base';
      } else {
        return 'remove from wardrobe';
      }
      break;

    case 'summer':
      return 'remove from wardrobe';
      break;

    case 'autumn':
      if(layer.month == 'Sep'){
        return 'remove from wardrobe';
      } else {
        return 'base';
      }
      break;

    }
  }

  getRule(){
    return 'must have upper layer';
  }

}

const pinkPoloneck = new Poloneck('pink');
const whitePoloneck = new Poloneck('white');
const burgundyPoloneck = new Poloneck('burgundy');
const tealPoloneck = new Poloneck('teal');
const orangePoloneck = new Poloneck('orange');
orangePoloneck.fit = 'loose';
orangePoloneck.pattern = 'tiedye';
const greyPoloneck = new Poloneck('grey');