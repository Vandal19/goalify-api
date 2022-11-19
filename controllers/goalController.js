

const getGoals = async (req, res) => {
  try {
    await res.status(200).json({ message: "Get goals" });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
};

const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
     res.status(200).json({ message: "Set Goal" });
};

const updateGoal = async (req, res) => {
  try {
    await res.status(200).json({ message: `Update goals ${req.params.id}` });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
};

const deleteGoal = async (req, res) => {
  try {
    await res.status(200).json({ message: `Delete goals ${req.params.id}` });
  } catch (error) {
    console.error(error.response ? error.response.body : error);
  }
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}