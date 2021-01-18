const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { Item, Outfit, OutfitItem } = require('../models/define.js');

// add items to outfit
router.post('/addItemToOutfit', async function (req, res) {
  console.log('addItemToOutfit function called');
  console.log('req.body =', req.body);
  const items = req.body;
  console.log('items =', items);
  items.forEach((item) => {
    db.addNewItem(
      item.itemID,
      item.outfitID
    );
  });
  res.send({ success: true });

});

module.exports = router;
