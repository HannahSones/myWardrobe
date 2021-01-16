const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Category = db.define("category", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    // /type pf clothing eg top, trousers
    type: Sequelize.STRING,
  },
});

const Selected = db.define("selected", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  itemID: {
    // ref item ID
    type: Sequelize.INTEGER,
  },
  dateSelected: {
    type: Sequelize.DATE,
  },
});

const Outfit = db.define("outfit", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

const Item = db.define("item", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  type: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  colour: {
    type: Sequelize.STRING,
  },
  imageURL: {
    // url for each image
    type: Sequelize.STRING,
  },
  categoryID: {
    type: Sequelize.INTEGER,
    // FOREIGN KEY FROM CATEGORY
  },
  timesSelected: {
    type: Sequelize.INTEGER,
  },
  userID: {
    //ref user id
    type: Sequelize.INTEGER,
  },
});

Item.belongsTo(Category, { foreignKey: "categoryID" });
Selected.belongsTo(Item, { foreignKey: "itemID" });
Outfit.belongsToMany(Item, { through: "outfitItem" });
Item.belongsToMany(Outfit, { through: "outfitItem" });
Item.belongsToMany(Outfit, { through: "outfitItem" });
Item.belongsTo(User, { foreignKey: "userID" });

module.exports = { Category, Selected, Outfit, Item, User };
