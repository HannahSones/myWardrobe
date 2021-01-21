const express = require('express');
const router = express.Router();
const addModel = require('../models/addNew');

// add new user
router.post('/user', async function (req, res) {
  try {
    const insert = await addModel.addNewUser(req.body.user);
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
    const add = await addModel.addNewOutfit(req.body.name);
    res.send(add);
  } catch {
    res.status(401);
    res.end();
  }
});

// add new date
router.post('/newDate', async function (req, res) {
  console.log('req.body=', req.body);
  try {
    const add = await addModel.addNewCalanderEntry(
      req.body.dateString,
      req.body.outfitID
    );
    res.send(add);
  } catch {
    res.status(401);
    res.end();
  }
});

module.exports = router;
