const Sequelize = require("sequelize");
const db = require("../config/database.js");
const { User, Item, Category } = require("./define.js");

const insertUser = async (name) => {
  const create = await User.create({
    name: name,
  });
  return create;
};

const insertItem = async (name, colour, pattern, weight, imageURL, categoryID, userID) => {
  const create = await Item.create({
    name: name,
    colour: colour,
    pattern: pattern,
    weight: weight, 
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
