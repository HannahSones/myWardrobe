const Top = require('./Top'); 

class Wooltop extends Top {
  constructor(colour){
    const sleeveStyle = 'long'; 
    const fastening = 'over the head';
    const neckStyle = 'crew neck';
    const hemLength = 'hips';
    const fit = 'fitted'; 
    const pattern = 'striped'; 
    super(sleeveStyle, fastening, neckStyle, hemLength, fit, pattern); 
    this.colour = colour; 
  }

  getGarmentType(){
    return this.constructor.name;
  }

  setFabric(){
      return 'wool'; 
  }

}


const woolBlueHighNeck = new Wooltop('blue');
woolBlueHighNeck.neckStyle = 'high neck'; 
woolBlueHighNeck.sleeveStyle = 'short'; 

const woolOrangeLong = new Wooltop('orange'); 
woolOrangeLong.pattern = 'ribbed'; 
woolOrangeLong.hemLength = 'highhips'; 

const woolBeigeCollar = new Wooltop('beige');
woolBeigeCollar.neckStyle = 'collar'; 
woolBeigeCollar.pattern = 'ribbed'; 

const woolBlackAndRed = new Wooltop('black and red'); 
woolBlackAndRed.sleeveStyle = 'short'; 
woolBlackAndRed.fit = 'loose'; 

const woolOrangeStripedT = new Wooltop('orange and cream');
woolOrangeStripedT.fit = 'loose'; 
woolOrangeStripedT.sleeveStyle = 'short'; 

const woolBlueStipeLong = new Wooltop('blue'); 
woolBlueStipeLong.sleeveStyle = 'short'; 

const woolBlueAndBurgundy = new Wooltop('blue and burgundy'); 
const woolBlueAndYellow = new Wooltop('blue and yellow'); 
const woolBurgundy = new Wooltop('burgundy'); 