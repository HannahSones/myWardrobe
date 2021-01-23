const express = require('express');
const router = express.Router();

// required models
const itemsModel = require('../models/items');
const categoryModel = require('../models/category');
const outfitModel = require('../models/outfit');
const plannerModel = require('../models/planner');
/* eslint-disable-line no-unused-vars */
const { db } = require('../models/user');

router.get('/:userName/items', async function (req, res) {
  // console.log(req.params);
  const query = await itemsModel.selectItemsByID(req.params.userName);
  res.send(query);
});

/* router.get("/:userID/outfits", async function (req, res) {
  const query = await selectUsersOutfits(req.params.userID);
  res.send(query);
}); */

router.get('/itemByCat', async function (req, res) {
  const select = await categoryModel.selectByCategory(
    req.body.id,
    req.body.userID
  );
  res.send(select);
});

router.get('/catID/:name', async function (req, res) {
  const select = await categoryModel.getCategoryID(req.params.name);
  res.send(select);
});

// get all items in a specified outfit.
router.get('/outfit/:outfitID', async function (req, res) {
  // console.log('outfit/:outfitID req.params =', req.params);
  const select = await outfitModel.selectOutfitItems(req.params.outfitID);
  res.send(select);
});

// checks if an outfit is saved in the palnner.
router.get('/isInPlanner/:outfitID', async function (req, res) {
  // console.log('outfit/:outfitID req.params =', req.params);
  const select = await plannerModel.isInPlanner(req.params.outfitID);
  res.send(select);
});

//  just gets one outfit by specified id
router.get('/plannedOutfit/:outfitID', async function (req, res) {
  console.log('req.body.outfitID =', req.params.outfitID);
  const select = await outfitModel.selectUsersOutfit(req.params.outfitID);
  res.send(select);
});

//  just gets outfits from the outfit table: id and name.
router.get('/outfits', async function (req, res) {
  const select = await outfitModel.selectUsersOutfits();
  res.send(select);
});

router.get('/planner/:dateString&:userId', async function (req, res) {
  // console.log('/planner/:dateString req.params =', req.params);
  const select = await plannerModel.getDate(
    req.params.dateString,
    req.params.userId
  );
  console.log('planner/:dateString: select =', select);
  res.send(select);
});

router.get('/planner/id/:userID', async function (req, res) {
  const userID = req.params.userID;
  if (!userID) {
    return res.send('no user ID');
  }
  const select = await plannerModel.getExisitngDates(userID);
  res.send(select);
});

router.get('/', function (req, res) {
  res.send('hit');
});

module.exports = router;
