
const express = require("express");
const router = express.Router();        // express library's Router method


//REGISTER
router.post("/register", UserController.registerUser);

module.exports = router;