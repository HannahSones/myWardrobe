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
    return {
      style: this.constructor.name, 
      type: Object.getPrototypeOf(this.constructor).name, 
      rule: this.getRule(),
    }
  }

  getLayer(){
    const layer = this.getSeason(); 
    console.log("croptop get layer function season =", season); 
    switch(layer.season){
      case "winter": 
      return "remove from wardrobe"
      break;

      case "spring": 
      if(layer.month == "Mar"){
        return "remove from wardrobe"
      } else {
        return "bottom"; 
      }
      break;

      case "summer": 
      return "bottom"; 
      break;

      case "autumn": 
      if(layer.month == "Sep"){
        return "bottom";
      } else {
        return "remove from wardrobe"; 
      }
      break;

    }
  }

  getRule(){
    return "no rule applied"; 
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