const Top = require('./Top'); 

class Polo extends Top {
  constructor(colour, pattern){
    const sleeveStyle = 'short'; 
    const fastening = 'short button placket';
    const neckStyle = 'collar';
    const hemLength = 'lower hips';
    const fit = 'fitted'; 
    super(sleeveStyle, fastening, neckStyle, hemLength, fit); 
    this.colour = colour; 
    this.pattern = pattern; 
  }

  getGarmentType(){
    return this.constructor.name;
  }
}

const bluePlainPolo = new Polo('navy', 'plain'); 

const blueStripePolo = new Polo('navy', 'striped'); 

const coralPolo = new Polo('coral', 'plain'); 

myPoloShirts = [
  {
    itemName: 'bluePlainPolo',
    itemType: bluePlainPolo.getGarmentType(),
    itemDetails: bluePlainPolo,
  }, 
  {
    itemName: 'blueStripePolo',
    itemType: blueStripePolo.getGarmentType(),
    itemDetails: blueStripePolo,
  }, 
  {
    itemName: 'coralPolo',
    itemType: coralPolo.getGarmentType(),
    itemDetails: coralPolo,
  }, 
]