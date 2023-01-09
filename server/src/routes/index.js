const router = require("express").Router();

router.use("/animal", require("./animal.routes"));

router.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = router;
