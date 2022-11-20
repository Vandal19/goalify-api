const express = require("express");
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require("../controllers/goalController")
const { protect } = require("../middleware/authMiddleware")

router.get(("/goals"), protect, getGoals);
router.post("/goals", protect, setGoal);
router.put("/goals/:id", (protect, updateGoal));
router.delete("/goals/:id", (protect, deleteGoal));

module.exports = router;
