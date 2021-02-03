const db = require('../config/database.js');
const { Item, Outfit, OutfitItem } = require('./define.js');

const selectUsersOutfits = async () => {
  console.log('selectUsersOutfits function called');
  const select = await Outfit.findAll({
    raw: true,
  });
  return select;
};
const selectUsersOutfitsByID = async (userID) => {
  console.log('selectUsersOutfits function called');
  const select = await Outfit.findAll({
    where: {
      userID: userID,
    },
    raw: true,
  });
  return select;
};

const selectUsersOutfit = async (outfitID) => {
  console.log('selectUsersOutfit function called');
  const select = await Outfit.findAll({
    where: {
      id: outfitID,
    },
    raw: true,
  });
  return select;
};

const addNewOutfit = async (name, userID) => {
  console.log('addNewOutfit function called');
  const add = await Outfit.create({
    name: name,
    userID: userID,
  });
  return add;
};

const addToOutfit = async (itemID, outfitID) => {
  console.log('addToOutfit function called');
  const add = await OutfitItem.create({
    itemID: itemID,
    outfitID: outfitID,
  });
  return add;
};

const selectOutfitItems = async (userID) => {
  console.log('selectOutfitItems function called');
  const select = await Outfit.findAll({
    where: {
      userID: userID,
    },
    attributes: ['id', 'name'],
    include: [
      {
        model: Item,
        attributes: ['id', 'name', 'imageURL'],
        through: { attributes: [] },
        required: true,
      },
    ],
  });
  return select;
};

const deleteOutfit = async (outfitID) => {
  const outfitItems = await OutfitItem.destroy({
    where: {
      outfitID: outfitID,
    },
  });
  const outfit = await Outfit.destroy({
    where: {
      id: outfitID,
    },
  });
  return { outfit, outfitItems };
};

const getOutfitName = async (outfitID) => {
  const outfitName = await Outfit.findAll({
    attributes: ['name'],
    where: {
      id: outfitID,
    },
  });
  return outfitName;
};


db.selectUsersOutfits = selectUsersOutfits;
db.selectUsersOutfit = selectUsersOutfit;
db.selectUsersOutfitsByID = selectUsersOutfitsByID;

db.addNewOutfit = addNewOutfit;
db.addToOutfit = addToOutfit;
db.selectOutfitItems = selectOutfitItems;
db.deleteOutfit = deleteOutfit;
db.getOutfitName = getOutfitName;

module.exports = db;
