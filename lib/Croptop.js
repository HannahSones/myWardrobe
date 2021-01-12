const Top = require('./Top');

class Croptop extends Top {
  constructor(colour, pattern){
    const sleeveStyle = 'capped';
    const fastening = 'over the head';
    const neckStyle = 'crew';
    const hemLength = 'cropped';
    const fit = 'fitted';
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
      return 'remove from wardrobe';
      break;

    case 'spring':
      if(layer.month == 'Mar'){
        return 'remove from wardrobe';
      } else {
        return 'base';
      }
      break;

    case 'summer':
      return 'base';
      break;

    case 'autumn':
      if(layer.month == 'Sep'){
        return 'base';
      } else {
        return 'remove from wardrobe';
      }
      break;

    }
  }

  getRule(){
    return 'must have a second layer';
  }

}



const yellowStripeCrop = new Croptop ('yellow', 'striped');
const bwStripeCrop = new Croptop ('black and white', 'striped');
const greyWoolCrop = new Croptop('grey', 'plain');

const mintBandedCrop = new Croptop ('white', 'plain');
mintBandedCrop.fastening = 'front half zip';
mintBandedCrop.sleeveStyle = 'short';

const armStripeCrop = new Croptop ('grey', 'marl');
armStripeCrop.sleeveStyle = 'long';

const navyStripeCrop = new Croptop('navy and white', 'stripped');
navyStripeCrop.sleeveStyle = 'long';

console.log({
  // garment: navyStripeCrop.getGarmentType(),
  // details: navyStripeCrop,
  // season: navyStripeCrop.getSeason(),
  layer: navyStripeCrop.getLayer(),
});

