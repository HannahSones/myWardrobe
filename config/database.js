const Sequelize = require('sequelize');
const ck = require('ckey');

const password = ck.DB_PASSWORD;

module.exports = new Sequelize('sams-wardrobe', 'root', password, {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});