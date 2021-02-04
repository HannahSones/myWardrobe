const db = require('../config/database.js');
const { Item, Outfit, OutfitItem } = require('./define.js');

const selectUsersOutfits = async () => {
  return await Outfit.findAll({
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'outfitModel, selectUsersOutfits ': err });
    });
};

const selectUsersOutfitsByID = async (userID) => {
  return await Outfit.findAll({
    where: {
      userID: userID,
    },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'outfitModel, selectUsersOutfitsByID ': err });
    });
};

const selectUsersOutfit = async (outfitID) => {
  return await Outfit.findAll({
    where: {
      id: outfitID,
    },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'outfitModel, selectUsersOutfit ': err });
    });
};

const addNewOutfit = async (name, userID) => {
  return await Outfit.create({
    name: name,
    userID: userID,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'outfitModel, addNewOutfit': err });
    });
};

const addToOutfit = async (itemID, outfitID) => {
  return await OutfitItem.create({
    itemID: itemID,
    outfitID: outfitID,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'outfitModel, addToOutfit': err });
    });
};

const selectOutfitItems = async (userID) => {
  return await Outfit.findAll({
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
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'outfitModel, selectOutfitItems': err });
    });
};

const deleteOutfit = async (outfitID) => {
  return await OutfitItem.destroy({
    where: {
      outfitID: outfitID,
    },
  })
    .then(async (itemsDeleted) => {
      return await Outfit.destroy({
        where: {
          id: outfitID,
        },
      })
        .then((outfitDeleted) => {
          return { outfitItem: itemsDeleted, outfit: outfitDeleted };
        })
        .catch((err) => {
          console.log({ 'outfitModel, deleteOutfit, nested query': err });
        });
    })
    .catch((err) => {
      console.log({ 'outfitModel, deleteOutfit': err });
    });
};

const getOutfitName = async (outfitID) => {
  return await Outfit.findAll({
    attributes: ['name'],
    where: {
      id: outfitID,
    },
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'outfitModel, getOutfitName': err });
    });
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
