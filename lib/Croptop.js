const Top = require('./Top'); 

class Croptop extends Top {
  constructor(colour, pattern){
    const sleeveStyle = 'capped'; 
    const fastening = 'over the head';
    const neckStyle = 'crew';
    const hemLength = 'cropped';
    const fit = 'fitted'; 
    super(sleeveStyle, fastening, neckStyle, hemLength, fit); 
    this.colour = colour; 
    this.pattern = pattern; 
  }

  getGarmentType(){
    return this.constructor.name;
  }

  createObject(name, variable){
    console.log("inside createObject =", name, '=', variable); 
    return {
      itemName: name, 
      itemType: variable.getGarmentType(),
      itemDetails: this, 
    }; 
  }
}

const yellowStripeCrop = new Croptop ('yellow', 'striped'); 
const bwStripe = new Croptop ('black and white', 'striped'); 
const greyWoolCrop = new Croptop('grey', 'plain'); 

const mintBandedCrop = new Croptop ('white', 'plain');
mintBand.fastening = 'front half zip'; 
mintBand.sleeveStyle = 'short'; 

const armStripeCrop = new Croptop ('grey', 'marl'); 
greyArmStripe.sleeveStyle = 'long'; 

const navyStripeCrop = new Croptop('navy and white', 'stripped'); 
navyStripe.sleeveStyle = 'long';


// console.log("this test = ",yellowCrop.createObject('yellowCrop', yellowCrop));  

const myCroptops = [];
myCroptops.push(mintBanded.createObject('mintBanded', mintBanded)) ; 

const croptopArray = [{yellowCrop}, {blackCrop}, {mintBanded}]; 

function createMyCroptops(Array){
  Array.forEach(top => {
    console.log("Object.key()=", Object.keys(top));
    const variable = Object.keys(top);
    console.log("Variable = ", variable.toString(), typeof(variable));
    const name = Object.keys(top).toString();
    console.log("name = ", name, typeof(name));
    const object = top;
    console.log("top =", top); 
    console.log("top 2 =", top.yellowCrop); 
    console.log("top 3 =", top.variable); 

    // console.log("top =", top.yellowCrop.sleeveStyle);
    console.log("top =", top[variable].sleeveStyle); 

    console.log("Object", Object()); 
    console.log("this", this); 

    // myCroptops.push(top[variable].createObject(name, top)); 
  });
}

// createMyCroptops(croptopArray); 

console.log("myCroptops = ", myCroptops); 