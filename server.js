const express = require("express");
const fileupload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const multer = require("multer");

const upload = multer();
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload());
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", function (req, res) {
  res.sendFile("views/index.html", { root: __dirname });
});

/* app.post("/upload", function (req, res) {
  console.log(req.files.image);
  res.send(req.files);
}); */

cloudinary.config({
  cloud_name: "dqqklkmfr",
  api_key: "539677936931998",
  api_secret: "M0QzGqFUWeOFOO_kMMUrgUxh7eM",
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.files);
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
      return res.json({ success: false, payload: result });
    }
  );
  streamifier.createReadStream(req.files.image.data).pipe(cld_upload_stream);
});

app.listen(PORT, function () {
  console.log("Hello and welcome to project 2 express server");
  console.log("I am running on port", PORT);
});
