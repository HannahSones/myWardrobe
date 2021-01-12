const Bottom = require('./Bottom'); 

class Trouser extends Bottom {
  constructor(colour, weight, fit){
    const legs = true; 
    const hemLength = 'full'; 
    const waistband = 'waist'; 
    const pattern = 'plain'; 
    const fabric = 'cotton';
    
    super(legs, hemLength, waistband, pattern, fabric)
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
    console.log("croptop get layer function season =", season); 
    switch(this.getLayer.season){
      case "winter": 
      if (this.weight == 'light'){
        return "remove from wardrobe"; 
      } else {
        return "bottom"; 
      }
      break;

      default: 
      return "bottom"; 
      break;


    }
  }

  getRule(){
    if(this.fit == "wide leg"){
      return "do not match with 'loose' fit top"; 
    } else {
      return "no rule applied"; 
    }
  }
}

const smartCheckTrouser = new Trouser ('beige and blue', 'mid', 'straight'); 
smartCheckTrouser.pattern = 'check'; 

const beigePleatedTrouser = new Trouser ('beige', 'light', 'wide leg'); 

const militaryTrouser = new Trouser ('green', 'mid', 'wide leg'); 
militaryTrouser.hemLength = '7/8s'; 

const camoTrouser = new Trouser ('khaki', 'mid', 'wide leg'); 
camoTrouser.hemLength = 'cropped'; 
camoTrouser.pattern = 'camoflauge'; 
