const Sequelize = require('sequelize');
const db = require('../config/database.js');
const { User, Category, Item } = require('./define.js');

// Our side not neccessary for user
const insertCategory = async (name) => {
  const create = await Category.create({
    name: name,
    type: type,
  });
  return create;
};

const selectByCategory = async (id) => {
  const select = await Item.findAll({
    where: { categoryID: id },
    raw: true,
  });
  return select;
};

const getCategoryID = async (name) => {
  const select = await Category.findAll({
    attributes: ['id', 'type'],
    where: { name: name },
    raw: true,
  });
  return select;
};

db.insertCategory = insertCategory;
db.selectByCategory = selectByCategory;
db.getCategoryID = getCategoryID;

module.exports = db;
