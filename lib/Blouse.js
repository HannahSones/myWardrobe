const Top = require('./Top'); 

class Blouse extends Top {
  constructor(colour, pattern, weight, fabric){
    const sleeveStyle = 'short'; 
    const fastening = 'full button placket';
    const neckStyle = 'shirt collar';
    const hemLength = 'upper hips';
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
    }
  }

  getLayer(){
    const layer = this.getSeason(); 
    console.log("croptop get layer function season =", season); 
    switch(this.getLayer.season){
      case "winter": 
      if(this.weight == 'sheer'){
        return "remove from wardrobe"; 
      } else {
        return "bottom"; 
      }
      break;

      case "spring": 
      if(this.weight == 'sheer' && layer.month == 'Mar'){
        return  "remove from wardrobe";
      } else if (this.weight == 'sheer' && layer.month != 'Mar'){
        return "with base"; 
      } else {
        return "bottom"; 
      }
      break;

      case "summer": 
      if(this.weight == 'sheer'){
        return "with base"; 
      } else {
        return "bottom"; 
      }
      break;
      
      case "autumn": 
      if(this.weight == 'sheer'){
        return "remove from wardrobe"; 
      } else {
        return "bottom"; 
      }
      break;

    }
  }

  getRule(){
    if(this.weight == "sheer"){
      return "must have bottom or base layer"; 
    } else {
      return "no rule applied"; 
    }
  }
}

const whiteSheerBlouse = new Blouse("white", "plain" ,"sheer", "synth" );
whiteSheerBlouse.hemLength = "waiste"; 

const whiteCottonBlouse = new Blouse("white", "plain" ,"sheer", "cotton" );
whiteCottonBlouse.fastening = "over the head";
whiteCottonBlouse.neckStyle = "stand collar"; 

const yellowBlouse = new Blouse ("yellow", "embroidered", "light", "cotton");
yellowBlouse.sleeveStyle = "frill capped"; 
