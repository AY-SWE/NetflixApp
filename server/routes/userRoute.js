
const auth = require("../auth.js");
const express = require("express");
const router = express.Router();        // express library's Router method
const userController = require("../controllers/userController");

//UPDATE
router.put("/:id", auth.verify, userController.updateUser)

//DELETE
router.delete("/:id", auth.verify, userController.deleteUser)
//GET
router.get("/find/:id", userController.getUser)          //no need for auth.verify because everyone should be able to find
//GET ALL
router.get("/", auth.verify, userController.getAllUser) 
//GET USER STATS
router.get("/stats", userController.getUserStats) 

module.exports = router;