const Sequelize = require("sequelize");
const db = require("../config/database.js");
const { User, Category, Item } = require("./define.js");

// Our side not neccessary for user
const insertCategory = async (name) => {
  const create = await Category.create({ name: name });
  return create;
};

const selectByCategory = async (id, userID) => {
  const select = await Item.findAll({
    where: { categoryID: id, userID: userID },
    raw: true,
  });
  return select;
};

db.insertCategory = insertCategory;
db.selectByCategory = selectByCategory;
module.exports = db;
