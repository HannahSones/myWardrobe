const express = require('express');
const router = express.Router();

// required models
const itemsModel = require('../models/items');
const categoryModel = require('../models/category');
const outfitModel = require('../models/outfit');

router.delete('/outfit/:outfitID', async function (req, res) {
  console.log('req.params =', req.params);
  const del = await outfitModel.deleteOutfit(req.params.outfitID);
  res.send(del);
});

module.exports = router;