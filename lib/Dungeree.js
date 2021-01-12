const Overall = require('./Overall'); 

class Dungeree extends overall {
  constructor(colour, weight, fit){
    const legs = true; 
    const sleeveStyle = false; 
    const fastening = 'side zip';
    const neckStyle = false;
    const hemLength = 'mid thigh';
    const fit = 'fitted'; 
    const pattern = 'plain'; 
    const fabric = 'denim'; 

    super(legs, sleeveStyle, fastening, neckStyle, hemLength, pattern, fabric);
    this.colour = colour; 
    this.weight = weight;  
    this.fit = fit; 
  }

  getGarmentType(){
    return {
      style: this.constructor.name, 
      type: Object.getPrototypeOf(this.constructor).name, 
      rule: this.getRule(),
    }
  }

  getLayer(){
    const layer = this.getSeason(); 
    switch(layer.season){
      case "summer": 
      if (this.weight == "heavy" || this.legs == false){
        return "remove from wardrobe"
      } else {
        return "over all"; 
      }
      break;

      default: 
      return "over all";
      break;

    }
  }

  getRule(){
    return "must have a Top layer"; 
  }
}

const cordDungeree = new Dungeree('dark blue', 'heavy', 'straight'); 
cordDungeree.hemLength = 'cropped'; 
cordDungeree.fabric = 'cordaroy';

const tightDungeree = new Dungeree('dark blue', 'medium', 'bootleg'); 

const denimSkirtDungeree = new Dungeree('blue', 'medium', 'straight'); 
denimSkirtDungeree.legs = false; 
denimSkirtDungeree.hemLength = 'above knee';
denimSkirtDungeree.fastening = 'half front zip'; 

const yellowDungeree = new Dungeree('yellow and black', 'heavy', 'straight');
yellowDungeree.legs = false;
yellowDungeree.hemLength = 'above knee'; 
yellowDungeree.fabric = 'cotton'; 
yellowDungeree.pattern = 'check'; 
yellowDungeree.fastening = 'front zip';


