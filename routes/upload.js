const express = require("express");
const router = express.Router();
const db = require("../config/database");

const streamifier = require("streamifier");
const multer = require("multer");
const ck = require("ckey");
const cloudName = ck.cloud_name;
const apiKey = ck.api_key;
const apiSecret = ck.api_secret;
const upload = multer();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        folder: "myWardrobe",
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
    streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
  });
};

// add new image of new item
router.post("/", upload.array("image", 5), async (req, res) => {
  const files = req.files;
  const resArray = [];
  for (const file of files) {
    const upload = await uploadFile(file);
    resArray.push(upload);
  }
  res.send(resArray);
});

//  add new item of clothing to wardrobe.
router.post("/item", async function (req, res) {
  const items = req.body;
  console.log("items =", items);
  items.forEach((item) => {
    db.addNewItem(
      item.name,
      item.colour,
      item.pattern,
      item.weight,
      item.imageURL,
      item.categoryID,
      item.userID
    );
  });
  res.send({ success: true });
});

module.exports = router;
