const Sequelize = require('sequelize');
const ck = require('ckey');
const { config } = require('dotenv/types');

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

if (config.use_env_variable) {
  const sequelize = new Sequelize (process.env[config.use_env_variable]);
} else {
  const sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// if (process.env.JAWSDB_URL) {
//   module.exports = new Sequelize('sams-wardrobe', password, {
//     dialect: 'mysql',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   });
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: password,
//     dialect: 'mysql',
//     database: 'sams-wardrobe'
//   });
// }; 