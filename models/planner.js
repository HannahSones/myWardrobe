const db = require('../config/database.js');
const { Planner } = require('./define.js');

const getDate = async (date) => {
  console.log('date =', date, typeof date);
  const name = await Planner.findOne({ where: { date: date }, raw: true });
  if (name === null) {
    return { id: 0 };
  } else {
    console.log(name);
    return name;
  }
};

const updatingOutfit = async (dateString, outfitID) => {
  const update = await Planner.update(
    { outfitID: outfitID },
    {
      where: {
        date: dateString,
      },
    }
  );
  return update;
};

const getExisitngDates = async () => {
  const select = await Planner.findAll({ raw: true });
  return select;
};

const deleteEntry = async (dateID) => {
  const del = await Planner.destroy({
    where: {
      date: dateID,
    },
  });
  // console.log('deleteEntry =', del);
  return del;
};

const isInPlanner = async (outfitID) => {
  const select = await Planner.findAll({
    where: {
      outfitID: outfitID,
    },
  });
  return select;
}

db.getDate = getDate;
db.updatingOutfit = updatingOutfit;
db.getExisitngDates = getExisitngDates;
db.deleteEntry = deleteEntry;
db.isInPlanner = isInPlanner;

module.exports = db;
