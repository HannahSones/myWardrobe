const Top = require('./Top');

class Wooltop extends Top {
  constructor(colour, pattern, fabric){
    const sleeveStyle = 'long';
    const fastening = 'over the head';
    const neckStyle = 'crew neck';
    const hemLength = 'hips';
    const fit = 'fitted';
    super(sleeveStyle, fastening, neckStyle, hemLength, fit);
    this.colour = colour;
    this.pattern = 'striped';
    this.fabric = 'wool';
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
      if (layer.month == 'May'){
        return 'remove from wardrobe';
      } else {
        return 'base';
      }
      break;

    case 'summer':
      return 'remove from wardrobe';
      break;

    case 'autumn':
      return 'base';
      break;

    }
  }

  getRule(){
    if(this.fit == 'fitted'){
      return 'not worn alone with skinny trouser style';
    } else {
      return 'no rule applied';
    }
  }

}


const woolBlueHighNeck = new Wooltop('blue');
woolBlueHighNeck.neckStyle = 'high neck';
woolBlueHighNeck.sleeveStyle = 'short';

const woolOrangeLong = new Wooltop('orange');
woolOrangeLong.pattern = 'ribbed';
woolOrangeLong.hemLength = 'highhips';

const woolBeigeCollar = new Wooltop('beige');
woolBeigeCollar.neckStyle = 'collar';
woolBeigeCollar.pattern = 'ribbed';

const woolBlackAndRed = new Wooltop('black and red');
woolBlackAndRed.sleeveStyle = 'short';
woolBlackAndRed.fit = 'loose';

const woolOrangeStripedT = new Wooltop('orange and cream');
woolOrangeStripedT.fit = 'loose';
woolOrangeStripedT.sleeveStyle = 'short';

const woolBlueStipeLong = new Wooltop('blue');
woolBlueStipeLong.sleeveStyle = 'short';

const woolBlueAndBurgundy = new Wooltop('blue and burgundy');
const woolBlueAndYellow = new Wooltop('blue and yellow');
const woolBurgundy = new Wooltop('burgundy');

console.log(woolBlueAndBurgundy);