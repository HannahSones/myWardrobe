const Sequelize = require("sequelize");
const db = require("../config/database.js");
const { User } = require("./Items.js");

const insertUser = (name) => {
  User.create({
    name: name,
  });
};

db.insertUser = insertUser;
