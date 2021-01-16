const Sequelize = require("sequelize");
const db = require("../config/database.js");
const { User, Item, Category } = require("./define.js");

const insertUser = async (name) => {
  const create = await User.create({
    name: name,
  });
  return create;
};

const insertItem = async (type, name, colour, imageURL, categoryID, userID) => {
  const create = await Item.create({
    type: type,
    name: name,
    colour: colour,
    imageURL: imageURL,
    categoryID: categoryID,
    userID: userID,
  });
  return create;
};

const insertCategory = async (name) => {
  const create = await Category.create({ name: name });
  return create;
};
db.insertUser = insertUser;
db.insertItem = insertItem;
db.insertCategory = insertCategory;

module.exports = db;
