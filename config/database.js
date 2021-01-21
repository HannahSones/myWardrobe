const Sequelize = require('sequelize');
const ck = require('ckey');
const env       = process.env.NODE_ENV || 'development';
const { config } = require(__dirname + '/../config/config.js')[env];

const password = ck.DB_PASSWORD;

// module.exports = new Sequelize('sams-wardrobe', 'root', password, {
//   host: 'localhost',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// });

// if (process.env.JAWSDB_URL) {
//   const sequelize = new Sequelize (process.env[config.use_env_variable], config);
// } else {
//   const sequelize = new Sequelize(config.database, config.username, config.password, config);
// }


if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {});
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    dialect: 'mysql',
    database: 'sams-wardrobe'
  });
};