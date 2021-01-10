const Top = require('./Top'); 

class Shirt extends Top {
  constructor(colour, pattern, weight){
    const sleeveStyle = 'long'; 
    const fastening = 'full button placket';
    const neckStyle = 'shirt collar';
    const hemLength = 'lower hips';
    const fit = 'loose'; 
    super(sleeveStyle, fastening, neckStyle, hemLength, fit); 
    this.colour = colour;
    this.pattern = pattern; 
    this.weight = weight;
  }

  getGarmentType(){
    return this.constructor.name;
  }
}

const denimSplashShirt = new Shirt('indigo', 'paint splatter', 'medium'); 
const militaryShirt = new Shirt('olive green', 'plain', 'medium');
const emboideredSymbolsShirt = new Shirt('white', 'embroidered emblems', 'sheer');

const denimCuffedShirt = new Shirt('indigo', 'plain', 'heavy'); 
denimCuffedShirt.hemLength = 'high hips';

const faceShirt = new Shirt('white', 'continuous line faces', 'light'); 
faceShirt.hemLength = 'high hips';

const countryShirt = new Shirt('cream', 'small flowers', 'light'); 
countryShirt.hemLength = 'high hips'; 
countryShirt.neckStyle = 'manderine collar'; 


const myShirts = [
  {
    itemName: 'denimSplashShirt',
    itemType: denimSplashShirt.getGarmentType(),
    itemFabric: denimSplashShirt.setFabric('denim'),
    itemDetails: denimSplashShirt,
  },
  {
    itemName: 'militaryShirt',
    itemType: militaryShirt.getGarmentType(),
    itemFabric: militaryShirt.setFabric('cotton'), 
    itemDetails: militaryShirt,
  },
  {
    itemName: 'denimCuffedShirt',
    itemType: denimCuffedShirt.getGarmentType(),
    itemFabric: denimCuffedShirt.setFabric('denim'),
    itemDetails: denimCuffedShirt,
  },
  {
    itemName: 'emboideredSymbolsShirt',
    itemType: emboideredSymbolsShirt.getGarmentType(),
    itemFabric: emboideredSymbolsShirt.setFabric('cotton'),
    itemDetails: emboideredSymbolsShirt,
  },
  {
    itemName: 'faceShirt',
    itemType: faceShirt.getGarmentType(),
    itemFabric: faceShirt.setFabric('cotton'), 
    itemDetails: faceShirt,
  },
  {
    itemName: 'countryShirt',
    itemType: countryShirt.getGarmentType(),
    itemFabric: countryShirt.setFabric('cotton'),
    itemDetails: countryShirt,
  },
];
  

console.log("myShirts = ", myShirts); 

exports.myShirts = myShirts; 
