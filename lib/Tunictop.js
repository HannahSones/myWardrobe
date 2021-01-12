const Top = require('./Top');

class Tunictop extends Top {
  constructor(colour, pattern, fabric){
    const sleeveStyle = 'long';
    const fastening = 'full button placket';
    const neckStyle = 'shirt collar';
    const hemLength = 'waist';
    const fit = 'loose';
    super(sleeveStyle, fastening, neckStyle, hemLength, fit);
    this.colour = colour;
    this.pattern = pattern;
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
    return 'middle';

  }

  getRule(){
    return 'must have bottom or base layer';
  }
}

const pinkCollarOT = new Tunictop('pink', 'plain', 'synth');
const bwCollarOT = new Tunictop('black and white', 'stripe', 'synth');
const militaryOT = new Tunictop('burnt orange', 'plain', 'cotton');
const checkOT = new Tunictop('beige', 'check', 'cotton');
const blueTunic = new Tunictop('navy', 'plain', 'synth');
blueTunic.neckStyle = 'wide neck';