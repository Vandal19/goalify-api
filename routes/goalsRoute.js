const express = require("express");
const router = express.Router();

router.get("/goals", async (req, res) => {
  try {
    res.status(200).json({ message: "Get goals" });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
});

router.post("/goals", async (req, res) => {
  try {
    res.status(200).json({ message: "Set Goal" });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
});

router.put("/goals/:id", async (req, res) => {
  try {
    res.status(200).json({ message: `Update goals ${req.params.id}` });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
});

router.delete("/goals/:id", async (req, res) => {
  try {
    res.status(200).json({ message: `Delete goals ${req.params.id}` });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
});

module.exports = router;
