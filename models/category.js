const db = require('../config/database.js');
const { Category, Item } = require('./define.js');

// Our side not neccessary for user
const insertCategory = async (name) => {
  return await Category.create({
    name: name,
    type: type,
  })
    .then((create) => {
      return create;
    })
    .catch((err) => {
      console.log({ 'categoryModel, insertCategory': err });
    });
};

const selectByCategory = async (id) => {
  return await Item.findAll({
    where: { categoryID: id },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'categoryModel, selectByCategory': err });
    });
};

const getCategoryID = async (name) => {
  return await Category.findAll({
    attributes: ['id', 'type'],
    where: { name: name },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'categoryModel, getCategoryID': err });
    });
};

db.insertCategory = insertCategory;
db.selectByCategory = selectByCategory;
db.getCategoryID = getCategoryID;

module.exports = db;
