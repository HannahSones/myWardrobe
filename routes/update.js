const express = require('express');
const router = express.Router();
const outfitModel = require('../models/outfit');
const plannerModel = require('../models/planner');

// add items to outfit
router.post('/addToOutfit', async function (req, res) {
  console.log('req.body =', req.body);
  const items = req.body;
  console.log('items =', items);
  items.forEach((item) => {
    outfitModel.addToOutfit(item.itemID, item.outfitID);
  });
  res.send({ success: true });
});

router.put('/existingDate', async function (req, res) {
  console.log('req.body =', req.body);
  const update = plannerModel.updatingOutfit(
    req.body.dateString,
    req.body.outfitID
  );
  res.send(update);
});

module.exports = router;
