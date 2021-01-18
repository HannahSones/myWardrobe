const db = require('../config/database.js');
const { Item } = require('./define.js');

const selectItemsByID = async (userID) => {
  const sel = Item.findAll({ where: { userID: userID }, raw: true });
  return sel;
};

db.selectItemsByID = selectItemsByID;
module.exports = db;
