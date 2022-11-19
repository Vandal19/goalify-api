const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/userController");

router.post("/users", registerUser);
router.post("/users/login", loginUser);
router.get("/users/me", getMe);

module.exports = router;
