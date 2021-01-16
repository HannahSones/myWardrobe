const Sequelize = require("sequelize");
const db = require("../config/database.js");
const { User } = require("./Items.js");

const selectAllUsers = async () => {
  const all = await User.findAll({});
  return all;
};

const selectOneUser = async (userName) => {
  const selection = await User.findAll({ where: { name: userName } });
  return selection;
};

db.selectAllUsers = selectAllUsers;
db.selectOneUser = selectOneUser;
