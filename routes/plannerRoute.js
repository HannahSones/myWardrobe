const express = require('express');
const router = express.Router();

// required models
const plannerModel = require('../models/planner');

// get item in planner by id
// checks if an outfit is saved in the planner.
router.get('/isInPlanner/:outfitID', async function (req, res, next) {
  // console.log('outfit/:outfitID req.params =', req.params);
  const select = await plannerModel.isInPlanner(req.params.outfitID);
  console.log({ 'GET planner/isInPlanner/:outfitID': next });
  res.send(select);
});

// gets the planner date from the planner table
router.get('/getDate/:dateString&:userId', async function (req, res, next) {
  // console.log('/planner/:dateString req.params =', req.params);
  const select = await plannerModel.getDate(
    req.params.dateString,
    req.params.userId
  );
  console.log({ 'GET planner/getDate/:dateString&:userId': next });
  res.send(select);
});

// add new date to planner table
router.post('/newDate', async function (req, res, next) {
  try {
    const add = await plannerModel.addNewCalanderEntry(
      req.body.dateString,
      req.body.outfitID,
      req.body.userID
    );
    console.log({ 'POST planner/newDate': next });
    res.send(add);
  } catch {
    res.status(401);
    res.end();
  }
});

// update existing date in planner
router.put('/updateDate', async function (req, res, next) {
  // console.log('req.body =', req.body);
  const update = await plannerModel.updatingOutfit(
    req.body.dateString,
    req.body.outfitID
  );
  console.log({ 'PUT planner/updateDate': next });
  res.send(update);
});

// delete date from planner
router.delete('/deleteDate/:dayID', async function (req, res, next) {
  // console.log('req.params =', req.params);
  const del = await plannerModel.deleteEntry(req.params.dayID);
  // console.log('route planner delete =', del);
  console.log({ 'DELETE planner/deleteDate/:dayID': next });
  if (del === 1) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
