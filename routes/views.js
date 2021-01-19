const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const db = require('../config/database');
const { Item } = require('../models/define');

router.get('/myWardrobe', async function (req, res) {
  const tops = await db.selectTopsByID('corey');
  const bottoms = await db.selectBottomsByID('corey');
  const overalls = await db.selectOverallsByID('corey');
  res.render('myWardrobe', {
    layouts: 'main',
    tops: tops,
    bottoms: bottoms,
    overalls: overalls,
  });
});

router.get('/myOutfits', async function (req, res) {
  const outfits = await db.selectUsersOutfits(1);
  console.log(outfits);
  const outfitItems = await db.selectOutfitItems(outfits.id);
  res.render('myOutfits', {
    layouts: 'main',
    outfits: outfits,
  });
});

module.exports = router;
