const db = require('../config/database.js');
const { Planner } = require('./define.js');

const getDate = async (date, userID) => {
  const name = await Planner.findOne({
    where: { date: date, userID: userID },
    raw: true,
  });
  if (name === null) {
    return { id: 0 };
  } else {
    return name;
  }
};

const addNewCalanderEntry = async (date, outfit, userID) => {
  const add = await Planner.create({
    date: date,
    outfitID: outfit,
    userID: userID,
  });
  return add;
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

const getExisitngDates = async (userID) => {
  const select = await Planner.findAll({
    where: { userID: userID },
    raw: true,
  });
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
};

db.getDate = getDate;
db.addNewCalanderEntry = addNewCalanderEntry;
db.updatingOutfit = updatingOutfit;
db.getExisitngDates = getExisitngDates;
db.deleteEntry = deleteEntry;
db.isInPlanner = isInPlanner;

module.exports = db;
