const Sequelize = require('sequelize');
const db = require('../config/database.js');

const Category = db.define('category', {
  name: {
    // format of clothing eg jumper, trousers
    type: Sequelize.STRING,
  },
  type: {
    // type of garment eg top, bottom, overall.
    type: Sequelize.STRING,
  },
});

const Selected = db.define('selected', {
  itemID: {
    // ref item ID
    type: Sequelize.INTEGER,
  },
  dateSelected: {
    type: Sequelize.DATE,
  },
});

const Outfit = db.define('outfit', {
  name: {
    type: Sequelize.STRING,
  },
});

const OutfitItem = db.define('outfitItem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  outfitID: {
    // ref outfit ID
    type: Sequelize.INTEGER,

    primaryKey: false,
    references: {
      model: 'outfit',
      key: 'id',
    },

  },
  itemID: {
    // ref item ID
    type: Sequelize.INTEGER,

    primaryKey: false,
    references: {
      model: 'item',
      key: 'id',
    },

  },
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
  },
});

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
  },
  colour: {
    type: Sequelize.STRING,
  },
  pattern: {
    type: Sequelize.STRING,
  },
  weight: {
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

const Planner = db.define('planner', {
  date: {
    type: Sequelize.STRING,
  },
  outfitID: {
    // ref outfit ID
    type: Sequelize.INTEGER,
  },
});

Item.belongsTo(Category, { foreignKey: 'categoryID' });
Selected.belongsTo(Item, { foreignKey: 'itemID' });
Item.belongsTo(User, { foreignKey: 'userID' });
Planner.belongsTo(Outfit, { foreignKey: 'outfitID' });

// Outfit.belongsToMany(Item, {
//   // foreignKey: 'itemID',
//   through: OutfitItem,
// });
// Item.belongsToMany(Outfit, {
//   foreignKey: 'outfitID',
//   through: OutfitItem,
// });

OutfitItem.belongsTo(Outfit, {
  foreignKey: 'outfitID',
  targetKey: 'id',
  as: 'outfit',
});
OutfitItem.belongsTo(Item, {
  foreignKey: 'itemID',
  targetKey: 'id',
  as: 'item',
});


Item.belongsToMany(Outfit, { through: OutfitItem, foreignKey: 'itemID' });

Outfit.belongsToMany(Item, { through: OutfitItem, foreignKey: 'outfitID' });


module.exports = {
  Category,
  Selected,
  Outfit,
  OutfitItem,
  Item,
  User,
  Planner,
};
