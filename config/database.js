const Sequelize = require('sequelize');
const ck = require('ckey');

if (process.env.JAWSDB_URL) {
  module.exports = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
} else {
  module.exports = new Sequelize(ck.DB_NAME, ck.DB_USER, ck.DB_PASSWORD, {
    host: ck.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
}
