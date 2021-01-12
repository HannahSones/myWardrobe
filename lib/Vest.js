const Top = require('./Top'); 

class Vest extends Top {
  constructor(colour, pattern){
    const sleeveStyle = false; 
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
    }
  }

  getLayer(){
    const layer = this.getSeason(); 
    switch(layer.season){
      case "winter": 
      return "remove from wardrobe"
      break;

      case "spring": 
      if(layer.month == "Mar"){
        return "remove from wardrobe"
      } else {
        return "base"; 
      }
      break;

      case "summer": 
      return "base"; 
      break;

      case "autumn": 
      if(layer.month == "Sep"){
        return "base";
      } else {
        return "remove from wardrobe"; 
      }
      break;

    }
  }

  getRule(){
    return "not worn alone"; 
  }

}

const kharkiVest = new Vest("karki", "ribbed"); 
const whiteVest = new Vest("white", "plain");
const orangeVest = new Vest("orange", "ribbed"); 
const ribbedVest = new Vest("white", "ribbed"); 