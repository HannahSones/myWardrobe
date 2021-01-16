const Sequelize = require("sequelize");
const db = require("../config/database.js");
const { Item, Outfit } = require("./define.js");

const selectUsersOutfits = async (userID) => {
  const select = await Outfit.findAll({
    where: {
      userID: userID,
    },
    raw: true,
  });
  return select;
};

module.exports = { selectUsersOutfits };
