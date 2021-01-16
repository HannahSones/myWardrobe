const router = require("./item");
const db = require("../models/items");
const { selectUsersOutfits } = require("../models/outfit");

router.get("/:userID/items", async function (req, res) {
  console.log(req.params);
  const query = await db.selectItemsByID(req.params.userID);
  res.send(query);
});

/* router.get("/:userID/outfits", async function (req, res) {
  const query = await selectUsersOutfits(req.params.userID);
  res.send(query);
}); */

router.get("/itemByCat", async function (req, res) {
  const select = await db.selectByCategory(req.body.id, req.body.userID);
  res.send(select);
});

router.get("/", function (req, res) {
  res.send("hit");
});

module.exports = router;
