const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { selectUserByName } = require('../models/user');

router.get('/myWardrobe/:id', async function (req, res) {
  const userID = req.params.id;
  console.log('USER ID ====', userID);
  const tops = await db.selectTopsByID(userID);
  const bottoms = await db.selectBottomsByID(userID);
  const overalls = await db.selectOverallsByID(userID);
  res.render('myWardrobe', {
    layouts: 'main',
    tops: tops,
    bottoms: bottoms,
    overalls: overalls,
  });
});

router.get('/myOutfits/:id', async function (req, res) {
  // selecting all outfit items with user id
  const outfits = await db.selectOutfitItems(req.params.id);
  /* console.log(outfits[0].dataValues.items); */
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
