const fileupload = require("express-fileupload");
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

router.post("/", upload.single("image"), (req, res) => {
  const cld_upload_stream = cloudinary.uploader.upload_stream(
    {
      folder: "myWardrobe",
    },
    (err, result) => {
      if (err)
        return res.status(500).json({
          success: false,
          payload: { message: "Unable to upload image" },
        });
      return res.json({ success: true, payload: result });
    }
  );
  streamifier.createReadStream(req.files.image.data).pipe(cld_upload_stream);
});

module.exports = router;
