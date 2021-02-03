const express = require('express');
const router = express.Router();

const userModel = require('../models/user');

// add new user
router.post('/addNew', async function (req, res) {
  try {
    const insert = await userModel.addNewUser(req.body.user);
    res.send(insert);
  } catch {
    res.status(401);
    res.end();
  }
});


module.exports = router;