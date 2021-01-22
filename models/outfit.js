const db = require('../config/database.js');
const { Item, Outfit, OutfitItem } = require('./define.js');

const selectUsersOutfits = async () => {
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
    itemID: itemID,
    outfitID: outfitID,
  });
  return add;
};

const selectOutfitItems = async () => {
  console.log('selectOutfitItems function called');
  const select = await Outfit.findAll({
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
  console.log('deleteOutfit function called');

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

db.selectUsersOutfits = selectUsersOutfits;
db.selectUsersOutfit = selectUsersOutfit;
db.addToOutfit = addToOutfit;
db.selectOutfitItems = selectOutfitItems;
db.deleteOutfit = deleteOutfit;

module.exports = db;
