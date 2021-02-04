const db = require('../config/database.js');
const { Planner } = require('./define.js');

const getDate = async (date, userID) => {
  return await Planner.findOne({
    where: { date: date, userID: userID },
    raw: true,
  })
    .then((name) => {
      if (name === null) {
        return { id: 0 };
      } else {
        return name;
      }
    })
    .catch((err) => {
      console.log({ 'plannerModel, getDate': err });
    });
};

const addNewCalanderEntry = async (date, outfit, userID) => {
  return await Planner.create({
    date: date,
    outfitID: outfit,
    userID: userID,
  })
    .then((add) => {
      return add;
    })
    .catch((err) => {
      console.log({ 'plannerModel, addNewCalanderEntry': err });
    });
};

const updatingOutfit = async (dateString, outfitID) => {
  return await Planner.update(
    { outfitID: outfitID },
    {
      where: {
        date: dateString,
      },
    }
  )
    .then((add) => {
      return add;
    })
    .catch((err) => {
      console.log({ 'plannerModel, updatingOutfit': err });
    });
};

const getExisitngDates = async (userID) => {
  return await Planner.findAll({
    where: { userID: userID },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'plannerModel, updatingOutfit': err });
    });
};

const deleteEntry = async (dateID) => {
  return await Planner.destroy({
    where: {
      date: dateID,
    },
  })
    .then((del) => {
      return del;
    })
    .catch((err) => {
      console.log({ 'plannerModel, deleteEntry': err });
    });
};

const isInPlanner = async (outfitID) => {
  return await Planner.findAll({
    where: {
      outfitID: outfitID,
    },
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'plannerModel, isInPlanner': err });
    });
};

db.getDate = getDate;
db.addNewCalanderEntry = addNewCalanderEntry;
db.updatingOutfit = updatingOutfit;
db.getExisitngDates = getExisitngDates;
db.deleteEntry = deleteEntry;
db.isInPlanner = isInPlanner;

module.exports = db;
