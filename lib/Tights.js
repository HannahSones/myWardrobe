const Bottom = require('./Bottom'); 

class Tights extends Bottom {
  constructor(colour, weight){
    const legs = true; 
    const hemLength = null; 
    const waistband = 'waist'; 
    const pattern = 'plain'; 
    const fabric = 'synth';
    
    super(legs, hemLength, waistband, pattern, fabric)
    this.colour = colour; 
    this.weight = weight;  
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
      if(this.weight >= 100){
        return "base";
      } else {
        return "remove from wardrobe";
      }
      break;

      case "summer":
        if(this.weight >= 100){
          return "remove from wardrobe";
        } else {
          return "base";
        } 
      break;

      default: 
      return "base"; 
      break; 
      
    }
  }

  getRule(){
    return "not worn alone";
  }
}

const whiteTights = new Tights("white", 100); 

const blackTights = new Tights("white", 100); 