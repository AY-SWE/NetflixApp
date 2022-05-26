
const auth = require("../auth.js");
const express = require("express");
const router = express.Router();        // express library's Router method
const movieController = require("../controllers/movieController.js");

//UPDATE
router.put("/:id", auth.verify, movieController.updateUser)

//DELETE
router.delete("/:id", auth.verify, movieController.deleteUser)
//GET
router.get("/find/:id", movieController.getUser)          //no need for auth.verify because everyone should be able to find
//GET ALL
router.get("/", auth.verify, movieController.getAllUser) 
//GET USER STATS
router.get("/stats", movieController.getUserStats) 

module.exports = router;