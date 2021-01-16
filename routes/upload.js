const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const multer = require("multer");
const ck = require("ckey");
const cloud_name = ck.cloud_name;
const api_key = ck.api_key;
const api_secret = ck.api_secret;

const upload = multer();

const router = require("./item");
cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
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

router.post("/", upload.array("image", 5), async (req, res) => {
  const files = req.files;
  const resArray = [];
  for (const file of files) {
    const upload = await uploadFile(file);
    resArray.push(upload);
  }
  res.send(resArray);
});

module.exports = router;
