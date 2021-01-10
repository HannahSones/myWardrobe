const Top = require('./Top'); 

class Jumper extends Top {
  constructor(colour, pattern, weight){
    const sleeveStyle = 'long'; 
    const fastening = 'over the head';
    const neckStyle = 'crew';
    const hemLength = 'hips';
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

const croppedWoolWhite = new Jumper ('white', 'plain', 'medium');
croppedWoolWhite.fastening = 'back zip'; 
croppedWoolWhite. hemLength = 'cropped';
croppedWoolWhite.neckStyle = 'wide crew';
croppedWoolWhite.fit = 'slim fit'; 
croppedWoolWhite.setFabric('wool knit');

const japanJumper = new Jumper ('oatmeal', 'graphic', 'light');
japanJumper.setFabric('jersy');

const rainbowJumper = new Jumper ('pink', 'graphic', 'light'); 
rainbowJumper.setFabric('sweatshirt');

const purpleMarble = new Jumper ('purple', 'marble dye', 'light'); 
purpleMarble.fit = 'box'; 
purpleMarble.setFabric('jersy');

const riceWhiteJumper = new Jumper ('rice white', 'plain', 'light');
riceWhiteJumper.setFabric('sweatshirt');

const redSportJumper = new Jumper ('red', 'graphic logo', 'medium');  
redSportJumper.setFabric('sweatshirt');

const yellowSDJumper = new Jumper ('yellow', 'graphic logo', 'medium'); 
yellowSDJumper.setFabric('sweatshirt');

const blueSDSport = new Jumper ('blue', 'graphic logo', 'medium')
blueSDSport.setFabric('sweatshirt'); 

const croppedGreen = new Jumper('olive', 'plain', 'light');
croppedGreen.hemLength = 'cropped'; 
croppedGreen.setFabric('jersy');

const croppedCream = new Jumper('cream', 'plain', 'light');
croppedCream.hemLength = 'cropped'; 
croppedCream.setFabric('jersy');


myJumpers = [
  {
    itemName: 'croppedWoolWhite',
    itemType: croppedWoolWhite.getGarmentType(),
    itemDetails: croppedWoolWhite,
  }, 
  {
    itemName: 'japanJumper',
    itemType: japanJumper.getGarmentType(),
    itemDetails: japanJumper,
  }, 
  {
    itemName: 'rainbowJumper',
    itemType: rainbowJumper.getGarmentType(),
    itemDetails: rainbowJumper,
  }, 
  {
    itemName: 'purpleMarble',
    itemType: purpleMarble.getGarmentType(),
    itemDetails: purpleMarble,
  }, 
  {
    itemName: 'riceWhiteJumper',
    itemType: riceWhiteJumper.getGarmentType(),
    itemDetails: riceWhiteJumper,
  }, 
  {
    itemName: 'redSportJumper',
    itemType: redSportJumper.getGarmentType(),
    itemDetails: redSportJumper,
  }, 
  {
    itemName: 'yellowSDJumper',
    itemType: yellowSDJumper.getGarmentType(),
    itemDetails: yellowSDJumper,
  }, 
  {
    itemName: 'blueSDSport',
    itemType: blueSDSport.getGarmentType(),
    itemDetails: blueSDSport, 
  },
  {
    itemName: 'croppedGreen',
    itemType: croppedGreen.getGarmentType(),
    itemDetails: croppedGreen,
  },
  {
    itemName: 'croppedCream',
    itemType: croppedCream.getGarmentType(),
    itemDetails: croppedCream, 
  },
];

console.log("myJumpers =", myJumpers); 