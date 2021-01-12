const Bottom = require('./Bottom'); 

class Jeans extends Bottom {
  constructor(colour, weight, fit){
    const legs = false; 
    const hemLength = 'ankle'; 
    const waistband = 'waist'; 
    const pattern = 'plain'; 
    const fabric = 'denim';
    
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
    return "bottom"; 
  }

  getRule(){
    if(this.fit == "skinny"){
      return "do not match with 'fitted' fit top"; 
    } else {
      return "no rule applied"; 
    }
  }
}



const burgandyJeans = new Jeans('burgundy', 'mid', 'skinny'); 
const tealJeans = new Jeans('teal', 'mid', 'skinny'); 
const skinnyJeans = new Jeans('Dark blue', 'mid', 'skinny'); 
const straightJeans = new Jeans('Dark blue', 'mid', 'straight'); 
straightJeans.hemLength = 'full'; 
const blueCroppedJeans = new Jeans('blue', 'mid', 'straight'); 
blueCroppedJeans.hemLength = 'cropped'; 