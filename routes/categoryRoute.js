const express = require('express');
const router = express.Router();

// required models
const categoryModel = require('../models/category');

// get category id by category name
router.get('/id/:name', async function (req, res) {
  const select = await categoryModel.getCategoryID(req.params.name);
  res.send(select);
});


module.exports = router;
