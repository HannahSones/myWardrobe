const Overall = require('./Overall');

class Dress extends Overall {
  constructor(colour, style, fit, weight){
    const legs = false;
    const sleeveStyle = 'long';
    const fastening = 'over the head';
    const neckStyle = 'crew';
    const hemLength = 'mid thigh';
    const pattern = 'plain';
    const fabric = 'sweatshirt';

    super(legs, sleeveStyle, fastening, neckStyle, hemLength, pattern, fabric);
    this.colour = colour;
    this.style = style;
    this.fit = fit;
    this.weight = weight;
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
    case 'spring':
      if(this.weight == 'thick'){
        return 'remove from wardrobe';
      } else {
        return 'over all';
      }
      break;

    case 'summer':
      if (this.style == 'jumper'){
        return 'remove from wardrobe';
      } else {
        return 'over all';
      }
      break;

    default:
      return 'over all';
      break;

    }
  }

  getRule(){
    if(this.style == 'jumper' || this.hemLength == 'low hips'){
      return 'must have \'bottom\' layer NOT \'base\' layer';
    } else {
      return 'no rule applied';
    }
  }
}

const yellowJumpDress = new Dress ('yellow', 'jumper', 'fitted', 'thick');
yellowJumpDress.neckStyle = 'hood';

const oatmealjumpDress = new Dress ('oatmeal','jumper', 'fitted', 'thick');
oatmealjumpDress.hemLength = 'above knee';

const tokyoJumpDress = new Dress('grey','jumper', 'boxy', 'medium');
tokyoJumpDress.pattern = 'embosed';

const woolDress = new Dress ('oatmeal', 'jumper', 'oversized', 'light');
woolDress.fabric = 'wool';
woolDress.neckStyle = 'wide neck';

const denimtunic = new Dress('blue', 'shirt tunic', 'boxy', 'heavy');
const bwtunic = new Dress('black and white', 'shirt tunic', 'boxy', 'light');
bwtunic.hemLength = 'low hips';

