const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { selectUserByName } = require('../models/user');

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
  // selecting all outfit items with user id
  const outfits = await db.selectOutfitItems(1);
  /* console.log(outfits[0].dataValues.items); */
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

router.post('/', async function (req, res) {
  const user = req.body.user;
  const select = await selectUserByName(user);
  res.send(select);
});

router.get('/', async function (req, res) {
  res.render('myAccount', {
    layouts: 'main',
  });
});

module.exports = router;
