const express = require('express');
const router = express.Router();

// required models
const outfitModel = require('../models/outfit');
const plannerModel = require('../models/planner');

router.delete('/outfit/:outfitID', async function (req, res) {
  console.log('req.params =', req.params);
  const del = await outfitModel.deleteOutfit(req.params.outfitID);
  res.send(del);
});

router.delete('/plannerDate/:dayID', async function (req, res) {
  console.log('req.params =', req.params);
  const del = await plannerModel.deleteEntry(req.params.dayID);
  console.log('route planner delete =', del);
  if (del === 1) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
