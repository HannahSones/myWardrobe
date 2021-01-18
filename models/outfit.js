const db = require("../config/database.js");
const { Outfit, OutfitItem } = require("./define.js");

const selectUsersOutfits = async (userID) => {
  const select = await Outfit.findAll({
    where: {
      userID: userID,
    },
    raw: true,
  });
  return select;
};

const addItemToOutfit = async (itemID, outfitID) => {
  const add = await OutfitItem.create({
    itemID = itemID,
    outfitID = outfitID
  })
  return add;
};

db.selectUsersOutfits = selectUsersOutfits;
db.addItemToOutfit = addItemToOutfit; 

module.exports = db;
  
