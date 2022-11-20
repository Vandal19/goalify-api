const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const result = await Goal.find( { user: req.user.id });
  res.status(200).json(result);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const result = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(result);
});

const updateGoal = asyncHandler(async (req, res) => {
  const result = await Goal.findById(req.params.id);
  if (!result) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedResult = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedResult);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const result = await Goal.findById(req.params.id);
  if (!result) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await result.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
