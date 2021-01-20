const db = require('../config/database.js');
const { Item, Outfit, OutfitItem } = require('./define.js');

const selectUsersOutfits = async (userID) => {
  console.log('selectUsersOutfits function called');
  const select = await Outfit.findAll({
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

const addToOutfit = async (itemID, outfitID) => {
  console.log('addToOutfit function called');
  console.log('itemID =', itemID);
  console.log('outfitID =', outfitID);
  const add = await OutfitItem.create({
    outfitID: outfitID,
    itemID: itemID,
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

const deleteOutfit = async (outfitID) => {
  console.log('deleteOutfit function called');
  const outfit = await Outfit.destroy({
    where:{
      id: outfitID,
    }
  });
  const outfitItems = await OutfitItem.destroy({
    where:{
      outfitID: outfitID,
    }
  });

  return { outfit , outfitItems};
};

db.selectUsersOutfits = selectUsersOutfits;
db.selectUsersOutfit = selectUsersOutfit;
db.addToOutfit = addToOutfit;
db.selectOutfitItems = selectOutfitItems;
db.deleteOutfit = deleteOutfit;

module.exports = db;
