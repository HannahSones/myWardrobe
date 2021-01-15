const Sequelize = require('sequelize');
const db = require('../config/database.js');

const Item = db.define('item', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    outfit_id: {
        type: Sequelize.INTEGER
    },
    type: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Item;


/* outfit_id: '',
    type: '',
    layer:'',
    name:'',
    img_url:'',
    category:'' */