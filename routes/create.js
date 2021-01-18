const express = require('express');
const router = express.Router();
const db = require('../models/addNew');

// add new user
router.post('/user', async function (req, res) {
  try {
    const insert = await db.addNewUser(req.body.name);
    res.send(insert);
  } catch {
    res.status(401);
    res.end();
  }
});

// add new outfit
router.post('/newOutfit', async function (req, res) {
  console.log('req.body=', req.body); 
  try {
    const add = await db.addNewOutfit(req.body.name);
    res.send(add);
  } catch {
    res.status(401);
    res.end();
  }
}); 

module.exports = router;