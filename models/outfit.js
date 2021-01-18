const Sequelize = require('sequelize');
const db = require('../config/database.js');
const { Item, Outfit, OutfitItem } = require('./define.js');

const selectUsersOutfits = async (userID) => {
  console.log('selectUsersOutfits function called');
  const select = await Outfit.findAll({
    
    raw: true,
  });
  return select;
};

const addToOutfit = async (itemID, outfitID) => {
  console.log('addToOutfit function called');
  const add = await OutfitItem.create({
    itemID: itemID,
    outfitID: outfitID,
  });
  return add;
};

const selectOutfitItems = async (outfitID) => {
  console.log('selectOutfitItems function called');
  const select = await Outfit.findAll({
    attributes: ['id', 'name'],
    where: {
      id: outfitID,
    },
    include: [
      {
        model: Item,
        attributes: ['id', 'name'],
        through: { attributes: [] },
        required: true,
      },
    ],
  });
  return select;
};

db.selectUsersOutfits = selectUsersOutfits;
db.addToOutfit = addToOutfit;
db.selectOutfitItems = selectOutfitItems;

module.exports = db;
