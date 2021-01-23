const db = require('../config/database.js');
const { Item, User } = require('./define.js');

// searches DB, users table for name, then returns user ID and searches items table for their items
const selectItemsByID = async (userName) => {
  const name = await User.findOne({ where: { name: userName }, raw: true });
  const userID = name.id;
  const sel = await Item.findAll({
    where: { userID: userID },
    raw: true,
  });
  return sel;
};

/* Selects all items with corresponding category ID's , giving only a select
range of items */

const selectTopsByID = async (userID) => {
  const sel = await Item.findAll({
    where: { userID: userID, categoryID: [1, 2, 6, 7, 8, 9, 14, 15, 16, 17] },
    raw: true,
  });
  return sel;
};

const selectBottomsByID = async (userID) => {
  const sel = await Item.findAll({
    where: { userID: userID, categoryID: [5, 10, 11, 12, 13] },
    raw: true,
  });
  return sel;
};

const selectOverallsByID = async (userID) => {
  const sel = await Item.findAll({
    where: { userID: userID, categoryID: [3, 4] },
    raw: true,
  });
  return sel;
};

const selectTopsByCatID = async (userID, catID) => {
  const sel = await Item.findAll({
    where: { userID: userID, categoryID: catID },
    raw: true,
  });
  return sel;
};

const selectBottomsByCatID = async (userID, catID) => {
  const sel = await Item.findAll({
    where: { userID: userID, categoryID: catID },
    raw: true,
  });
  return sel;
};

const selectOverallsByCatID = async (userID, catID) => {
  const sel = await Item.findAll({
    where: { userID: userID, categoryID: catID },
    raw: true,
  });
  return sel;
};

db.selectItemsByID = selectItemsByID;
db.selectTopsByID = selectTopsByID;
db.selectBottomsByID = selectBottomsByID;
db.selectOverallsByID = selectOverallsByID;
db.selectTopsByCatID = selectTopsByCatID;
db.selectBottomsByCatID = selectBottomsByCatID;
db.selectOverallsByCatID = selectOverallsByCatID;

module.exports = db;
