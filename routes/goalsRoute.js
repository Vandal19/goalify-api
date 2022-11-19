const express = require("express");
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require("../controllers/goalController")

router.get("/goals", getGoals);

router.post("/goals", setGoal);

router.put("/goals/:id", updateGoal);

router.delete("/goals/:id", deleteGoal);

module.exports = router;
