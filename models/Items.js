const db = require('../config/database.js');
const { Item, User } = require('./define.js');

// searches DB, users table for name, then returns user ID and searches items table for their items
const selectItemsByID = async (userName) => {
  const name = await User.findOne({ where: { name: userName }, raw: true });
  const userID = name.id;
  const sel = await Item.findAll({ where: { userID: userID }, raw: true });
  return sel;
};

db.selectItemsByID = selectItemsByID;

module.exports = db;
