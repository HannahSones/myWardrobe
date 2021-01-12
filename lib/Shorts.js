const Bottom = require('./Bottom');


class Shorts extends Bottom {
  constructor(colour, weight, fit){
    const legs = true;
    const hemLength = 'mid thigh';
    const waistband = 'high hips';
    const pattern = 'plain';
    const fabric = 'cotton';

    super(legs, hemLength, waistband, pattern, fabric);
    this.colour = colour;
    this.weight = weight;
    this.fit = fit;
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
    console.log('croptop get layer function season =', season);
    switch(this.getLayer.season){
    case 'winter':
      return 'remove from wardrobe';
      break;

    case 'spring':
      if (this.hemLength == 'knee'){
        return 'bottom';
      } else {
        return 'remove from wardrobe';
      }
      break;

    case 'summer':
      return 'bottom';
      break;

    case 'autumn':
      if (this.hemLength == 'knee'){
        return 'bottom';
      } else {
        return 'remove from wardrobe';
      }
      break;

    }
  }

  getRule(){
    return 'no rule applied';
  }
}

const whiteShorts = new Shorts ('white', 'light', 'straight');
whiteShorts.pattern = 'striped';

const pinkShorts = new Shorts ('pink', 'light', 'straight');

const blueShorts = new Shorts ('blue', 'mid', 'skinny');
blueShorts.hemLength = 'knee';
blueShorts.fabric = 'denim';

const darkBlueShorts = new Shorts('dark blue', 'mid', 'skinny');
darkBlueShorts.hemLength = 'knee';
darkBlueShorts.fabric = 'denim';

const pinkSportShorts = new Shorts('pink', 'light', 'fitted');
pinkSportShorts.hemLength = 'short';
pinkSportShorts.fabric = 'jersey';
