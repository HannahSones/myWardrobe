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
  const outfits = await db.selectOutfitItems(1);
  /* console.log(outfits[0].dataValues.items); */
  console.log(outfits[0].dataValues.items[0]);
  outfits.for;
  res.render('myOutfits', {
    layouts: 'main',
    outfits: outfits,
  });
});
router.get('/addNew', async function (req, res) {
  res.render('newItem', {
    layouts: 'main',
  });
});
router.get('/myAccount', async function (req, res) {
  res.render('myAccount', {
    layouts: 'main',
  });
});

module.exports = router;
