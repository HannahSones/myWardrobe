const db = require('../config/database.js');
const { Planner } = require('./define.js');

const getDate = async (date) => {
  console.log('date =', date, typeof(date));
  const name = await Planner.findOne({ where: { date: date }, raw: true });
  if (name === null){
    console.log("none found");
  } else {
    console.log(name); 
  }
  // return name;
};

db.getDate = getDate; 

module.exports = db;