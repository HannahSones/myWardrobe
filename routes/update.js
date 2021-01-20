const express = require('express');
const router = express.Router();
const outfitModel = require('../models/outfit');
const plannerModel = require('../models/planner');

// add items to outfit
router.post('/addToOutfit', async function (req, res) {
  console.log('req.body =', req.body);
  const post = await outfitModel.addToOutfit(
      req.body.itemID,
      req.body.outfitID,
    );  
  res.send(post);
});

router.put('/existingDate', async function (req, res) {
  console.log('req.body =', req.body);
  const update = await plannerModel.updatingOutfit(
    req.body.dateString, 
    req.body.outfitID
  );
  res.send(update);
})


module.exports = router;