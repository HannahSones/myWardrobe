const Sequelize = require("sequelize");
const db = require("../config/database.js");
const { User } = require("./define.js");

const selectAllUsers = async () => {
  const all = await User.findAll({});
  return all;
};

const selectUserByName = async (userName) => {
  const selection = await User.findAll({
    where: { name: userName },
    raw: true,
  });
  return selection;
};

const selectUserByID = async (userID) => {
  const selection = await User.findAll({ where: { id: userID }, raw: true });
  return selection;
};

db.selectAllUsers = selectAllUsers;
db.selectUserByName = selectUserByName;
db.selectUserByID = selectUserByID;

module.exports = db;
