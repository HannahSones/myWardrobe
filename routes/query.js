const express = require('express');
const router = express.Router();
const db = require('../models/items');
const catModel = require('../models/category');
const outModel = require('../models/outfit');
// const { selectUsersOutfits } = require('../models/outfit');

router.get('/:userID/items', async function (req, res) {
  console.log(req.params);
  const query = await db.selectItemsByID(req.params.userID);
  res.send(query);
});

/* router.get("/:userID/outfits", async function (req, res) {
  const query = await selectUsersOutfits(req.params.userID);
  res.send(query);
}); */

router.get('/itemByCat', async function (req, res) {
  const select = await catModel.selectByCategory(req.body.id, req.body.userID);
  res.send(select);
});

router.get('/catID', async function (req, res) {
  const select = await db.getCategoryID(req.body.name);
  res.send(select);
});

// get all items in a specified outfit.
router.get('/outfit/:outfitID', async function (req, res) {
  console.log('outfit/:outfitID req.params =', req.params);
  const select = await outModel.selectOutfitItems(req.params.outfitID);
  res.send(select);
});

router.get('/', function (req, res) {
  res.send('hit');
});



module.exports = router;
