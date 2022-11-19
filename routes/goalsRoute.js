const express = require("express");
const router = express.Router();

router.get('/goals', async (req,res) => {
  try {
    res.status(200).json({message: 'Get goals'})
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
})

module.exports = router;