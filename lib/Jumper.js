const Top = require('./Top');

class Jumper extends Top {
  constructor(colour, pattern, weight, fabric){
    const sleeveStyle = 'long';
    const fastening = 'over the head';
    const neckStyle = 'crew';
    const hemLength = 'hips';
    const fit = 'loose';
    super(sleeveStyle, fastening, neckStyle, hemLength, fit);
    this.colour = colour;
    this.pattern = pattern;
    this.weight = weight;
    this.fabric = fabric;
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
      return 'top';
      break;

    case 'spring':
      return 'top';
      break;

    case 'summer':
      return 'additional';
      break;

    case 'autumn':
      return 'top';
      break;

    }
  }

  getRule(){
    if(this.hemLength == 'cropped'){
      return 'must have bottom or base layer';
    } else {
      return 'no rule applied';
    }
  }

  getRule(){
    if(this.hemLength == 'cropped'){
      return 'must have bottom or base layer';
    } else {
      return 'no rule applied';
    }
  }

}

const croppedWoolWhite = new Jumper ('white', 'plain', 'medium', 'wool knit');
croppedWoolWhite.fastening = 'back zip';
croppedWoolWhite. hemLength = 'cropped';
croppedWoolWhite.neckStyle = 'wide crew';
croppedWoolWhite.fit = 'slim fit';

const japanJumper = new Jumper ('oatmeal', 'graphic', 'light', 'jersy');
const rainbowJumper = new Jumper ('pink', 'graphic', 'light', 'sweatshirt');
const riceWhiteJumper = new Jumper ('rice white', 'plain', 'light', 'sweatshirt');
const redSportJumper = new Jumper ('red', 'graphic logo', 'medium', 'sweatshirt');
const yellowSDJumper = new Jumper ('yellow', 'graphic logo', 'medium', 'sweatshirt');
const blueSDSport = new Jumper ('blue', 'graphic logo', 'medium', 'sweatshirt');

const purpleMarble = new Jumper ('purple', 'marble dye', 'light', 'jersy');
purpleMarble.fit = 'box';

const croppedGreen = new Jumper('olive', 'plain', 'light', 'jersy');
croppedGreen.hemLength = 'cropped';

const croppedCream = new Jumper('cream', 'plain', 'light', 'jersy');
croppedCream.hemLength = 'cropped';


console.log(purpleMarble.getGarmentType());