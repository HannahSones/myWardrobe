const db = require('../config/database.js');

const streamifier = require('streamifier');

const ck = require('ckey');
const cloudName = ck.cloud_name;
const apiKey = ck.api_key;
const apiSecret = ck.api_secret;

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(
      { folder: 'myWardrobe'},
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

db.uploadFile = uploadFile;

module.exports = db; 