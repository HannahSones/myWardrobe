const express = require('express');
const router = express.Router();
const db = require('../models/outfit');

// add items to outfit
router.post('/addToOutfit', async function (req, res) {
  console.log('addToOutfit function called');
  console.log('req.body =', req.body);
  const items = req.body;
  console.log('items =', items);
  items.forEach((item) => {
    db.addToOutfit(
      item.itemID,
      item.outfitID
    );
  });
  res.send({ success: true });
});


module.exports = router;