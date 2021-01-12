const Bottom = require('./Bottom');


class Skirt extends Bottom {
  constructor(colour, weight, fit){
    const legs = false;
    const hemLength = 'mid thigh';
    const waistband = 'hips';
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
      return 'with base';
      break;

    case 'spring':
      if (layer.month == 'May'){
        return 'remove from wardrobe';
      } else {
        return 'with base';
      }
      break;

    case 'summer':
      return 'remove from wardrobe';
      break;

    case 'autumn':
      if (layer.month == 'Sep'){
        return 'remove from wardrobe';
      } else {
        return 'with base';
      }
      break;

    }
  }

  getRule(){
    return 'not worn alone';
  }
}

const orangeCordSkirt = new Skirt( 'burnt orange', 'heavy', 'a-line');
orangeCordSkirt.fabric = 'cordaroy';

const pinkFlowerSkirt = new Skirt('pink', 'med', 'a-line');
pinkFlowerSkirt.pattern = 'floral';

const sailorSkirt = new Skirt( 'blue', 'med', 'a-line');
sailorSkirt.pattern = 'striped';