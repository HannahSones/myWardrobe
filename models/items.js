const db = require('../config/database.js');
const { Item, User } = require('./define.js');

const addNewItem = async (
  name,
  colour,
  pattern,
  weight,
  imageURL,
  categoryID,
  userID
) => {
  // console.log('addNewItem function called');
  return await Item.create({
    name: name,
    colour: colour,
    pattern: pattern,
    weight: weight,
    imageURL: imageURL,
    categoryID: categoryID,
    userID: userID,
  })
    .then((create) => {
      return create;
    })
    .catch((err) => {
      console.log({ 'itemsModel, addNewItem': err });
    });
};

// searches DB, users table for name, then returns user ID and searches items table for their items
const selectItemsByID = async (userName) => {
  return await User.findOne({
    where: {
      name: userName,
    },
    raw: true,
  })
    .then(async (item) => {
      const userID = item.name.id;

      return await Item.findAll({
        where: { userID: userID },
        raw: true,
      })
        .then((select) => {
          return select;
        })
        .catch((err) => {
          console.log({ 'itemsModel, selectItemsByID, nested query': err });
        });
    })
    .catch((err) => {
      console.log({ 'itemsModel, selectItemsByID': err });
    });
};

/* Selects all items with corresponding category ID's , giving only a select
range of items */

const selectTopsByID = async (userID) => {
  return await Item.findAll({
    where: { userID: userID, categoryID: [1, 2, 6, 7, 8, 9, 14, 15, 16, 17] },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'itemsModel, selectTopsByID': err });
    });
};

const selectBottomsByID = async (userID) => {
  return await Item.findAll({
    where: { userID: userID, categoryID: [5, 10, 11, 12, 13] },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'itemsModel, selectBottomsByID': err });
    });
};

const selectOverallsByID = async (userID) => {
  return await Item.findAll({
    where: { userID: userID, categoryID: [3, 4] },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'itemsModel, selectOverallsByID ': err });
    });
};

const selectTopsByCatID = async (userID, catID) => {
  return await Item.findAll({
    where: { userID: userID, categoryID: catID },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'itemsModel, selectTopsByCatID ': err });
    });
};

const selectBottomsByCatID = async (userID, catID) => {
  return await Item.findAll({
    where: { userID: userID, categoryID: catID },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'itemsModel, selectBottomsByCatID ': err });
    });
};

const selectOverallsByCatID = async (userID, catID) => {
  return await Item.findAll({
    where: { userID: userID, categoryID: catID },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'itemsModel, selectOverallsByCatID ': err });
    });
};

db.addNewItem = addNewItem;

db.selectItemsByID = selectItemsByID;

db.selectTopsByID = selectTopsByID;
db.selectBottomsByID = selectBottomsByID;
db.selectOverallsByID = selectOverallsByID;

db.selectTopsByCatID = selectTopsByCatID;
db.selectBottomsByCatID = selectBottomsByCatID;
db.selectOverallsByCatID = selectOverallsByCatID;

module.exports = db;
