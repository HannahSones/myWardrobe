const express = require('express');
const router = express.Router();
// required models

const userModel = require('../models/user');
const outfitModel = require('../models/outfit');
const plannerModel = require('../models/planner');

//  just gets one outfit by specified id
router.get('/getName/:outfitID', async function (req, res) {
  console.log('req.body.outfitID =', req.params.outfitID);
  const select = await outfitModel.selectUsersOutfit(req.params.outfitID);
  res.send(select);
});

// gets all planned outfits for user
router.get('/inPlanner/:userID', async function (req, res) {
  const userID = req.params.userID;
  if (!userID) {
    return res.send('no user ID');
  }
  const select = await plannerModel.getExisitngDates(userID);
  res.send(select);
});

// add new outfit
router.post('/newOutfit', async function (req, res) {
  const user = await userModel.selectUserByName(req.body.userID);
  try {
    const add = await outfitModel.addNewOutfit(req.body.name, user[0].id);
    res.send(add);
  } catch {
    res.status(401);
    res.end();
  }
});

// add items to outfit
router.post('/addItems', async function (req, res) {
  console.log('req.body =', req.body);
  const post = await outfitModel.addToOutfit(
    req.body.itemID,
    req.body.outfitID,
    req.body.userID
  );
  res.send(post);
});

// delete outfit
router.delete('/delete/:outfitID', async function (req, res) {
  console.log('req.params =', req.params);
  const del = await outfitModel.deleteOutfit(req.params.outfitID);
  res.send(del);
});



module.exports = router;
