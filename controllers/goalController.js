const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
  try {
    await res.status(200).json({ message: "Get goals" });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
});

const setGoal = asyncHandler(async(req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
     res.status(200).json({ message: "Set Goal" });
});

const updateGoal = asyncHandler(async (req, res) => {
  try {
    await res.status(200).json({ message: `Update goals ${req.params.id}` });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
});

const deleteGoal = asyncHandler(async (req, res) => {
  try {
    await res.status(200).json({ message: `Delete goals ${req.params.id}` });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}