const express = require("express");
const router = express.Router();
const getApiInfo = require("../controller/dietController");
router.get("/", async (req, res) => {
  try {
    const data = await getApiInfo();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
