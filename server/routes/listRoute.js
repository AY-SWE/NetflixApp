const auth = require("../auth.js");     //moviesController no need for authentication 
const express = require("express");
const router = express.Router();        // express library's Router method
const listController = require("../controllers/listController.js");

//CREATE
router.post("/", auth.verify, listController.createList)
//DELETE
router.delete("/:id", auth.verify, listController.deleteList)

//GET
router.get("/findRandom", auth.verify, listController.getListRandom)          //no need for auth.verify because everyone should be able to find

module.exports = router;