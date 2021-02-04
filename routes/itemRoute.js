const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

// required models
const itemsModel = require('../models/items');
const uploadModel = require('../models/upload');

//  add new item of clothing to wardrobe.
router.post('/addNew/:id', async function (req, res, next) {
  const item = req.body;
  const userID = req.params.id;
  itemsModel.addNewItem(
    item.name,
    item.colour,
    item.pattern,
    item.weight,
    item.imageURL,
    item.categoryID,
    userID
  );
  console.log({ 'POST item/addNew/:id': next });
  res.send({ success: true });
});

// add new image of new item
router.post('/addImage', upload.array('image', 5), async (req, res, next) => {
  const files = req.files;
  const resArray = [];
  for (const file of files) {
    const upload = await uploadModel.uploadFile(file);
    resArray.push(upload);
  }
  console.log({ 'POST item/addImage': next });
  res.send(resArray);
});

module.exports = router;
