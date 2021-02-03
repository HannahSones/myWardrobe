const express = require('express');
const router = express.Router();

const userModel = require('../models/user');

// add new user
router.post('/addNew', async function (req, res, next) {
  try {
    const insert = await userModel.addNewUser(req.body.user);
    console.log({ 'POST user/addNew': next });
    res.send(insert);
  } catch {
    res.status(401);
    res.end();
  }
});

module.exports = router;
