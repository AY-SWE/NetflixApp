
const auth = require("../auth.js");
const express = require("express");
const router = express.Router();        // express library's Router method
const userController = require("../controllers/userController");

//REGISTER
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;