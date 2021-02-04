const db = require('../config/database.js');

const streamifier = require('streamifier');

const ck = require('ckey');
const cloudName = ck.cloud_name;
const apiKey = ck.api_key;
const apiSecret = ck.api_secret;

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: cloudName, /* eslint-disable-line camelcase */
  api_key: apiKey, /* eslint-disable-line camelcase */
  api_secret: apiSecret, /* eslint-disable-line camelcase */
});

const uploadFile = async (file) => {
  return new Promise((resolve, reject) => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(/* eslint-disable-line camelcase */
      { folder: 'myWardrobe' },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
    streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
  }).catch((err) => {
    console.log({ 'uploadModel, uploadFile': err });
  });
};

db.uploadFile = uploadFile;

module.exports = db;
