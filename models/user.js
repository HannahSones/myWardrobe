const db = require('../config/database.js');
const { User } = require('./define.js');

const addNewUser = async (name) => {
  return await User.create({
    name: name,
  })
    .then((create) => {
      return create;
    })
    .catch((err) => {
      console.log({ 'userModel, selectUserByName': err });
    });
};

const selectAllUsers = async () => {
  return await User.findAll({})
    .then((all) => {
      return all;
    })
    .catch((err) => {
      console.log({ 'userModel, selectAllUsers': err });
    });
};

const selectUserByName = async (userName) => {
  return await User.findAll({
    where: { name: userName },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'userModel, selectUserByName': err });
    });
};

const selectUserByID = async (userID) => {
  return await User.findAll({
    where: { id: userID },
    raw: true,
  })
    .then((select) => {
      return select;
    })
    .catch((err) => {
      console.log({ 'userModel, selectUserByID': err });
    });
};

db.addNewUser = addNewUser;

db.selectAllUsers = selectAllUsers;
db.selectUserByName = selectUserByName;
db.selectUserByID = selectUserByID;

module.exports = { db, selectUserByName };
