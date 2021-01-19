const db = require('../config/database.js');
const { Planner } = require('./define.js');

const getDate = async (date) => {
  console.log('date =', date, typeof(date));
  const name = await Planner.findOne({ where: { date: date }, raw: true });
  if (name === null){
    return { id : 0 }; 
  } else {
    console.log(name); 
    return name;
  }
};

const updatingOutfit = async (dateString, outfitID) => {
  const update = await Planner.update({ outfitID: outfitID}, {
    where: {
      date: dateString,
    }
  });
  return update;

}

db.getDate = getDate; 
db.updatingOutfit = updatingOutfit;

module.exports = db;