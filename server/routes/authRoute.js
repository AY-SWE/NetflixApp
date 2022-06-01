
const express = require("express");
const router = express.Router();        // express library's Router method
const authController = require("../controllers/authController");

//REGISTER
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;