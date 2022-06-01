
/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for users
    
    @author Andy Yang
*/

const User = require('../models/User')
//const CryptoJs = require("crypto-js");
const bcrypt = require("bcryptjs");
const auth = require("../auth.js/index.js");

updateUser = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update user',
        })
    }
    const {password} = req.body;
    if(req.user.id === req.params.id || req.user.isAdmin){
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHash = await bcrypt.hash(password, salt);

        if(password){
            password = passwordHash;
        }

        try{
            console.log("user._id: " + user._id);
            console.log("req.userId: " + req.userId);
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}); //update first, then return new user 
            console.log("SUCCESS updated user");
            res.status(200).json(updatedUser);
        }
        catch(err){
            console.error(err);
            res.status(500).send({errorMessage: req.params.id});
        }
    }
    else{
        res.status(403).json({errorMessage: "You can only update your account"});
    }
}


deleteUser = async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        
        try{
            console.log("user._id: " + user._id);
            console.log("req.userId: " + req.userId);
            const deletedUser = await User.findByIdAndDelete(req.params.id); 
            console.log("SUCCESS deleted user");
            res.status(200).json("user has been deleted: " + {deletedUser});
        }
        catch(err){
            console.error(err);
            res.status(500).send();
        }
    }
    else{
        res.status(403).json({errorMessage: "You can only delete your account"});
    }
}

getUser = async (req, res) => {
    try{
        console.log("user._id: " + user._id);
        console.log("req.userId: " + req.userId);
        var id = new mongoose.Types.ObjectId(req.params.id)
        const getUser = await User.findById(id); 
        console.log("SUCCESS found user");
        res.status(200).json("user has been found: " + {getUser});
    }
    catch(err){
        console.error(err);
        res.status(500).send({errorMessage: req.params.id});
    } 
}

getAllUser = async (req, res) => {
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            console.log("user._id: " + user._id);
            console.log("req.userId: " + req.userId);
            const allUsers = query? await User.find().limit(10): await User.find(); //if query, return last 10, else return all user
            console.log("SUCCESS all users");
            res.status(200).json("userS has been found: " + {allUsers});
        }
        catch(err){
            console.error(err);
            res.status(500).send();
        }
    }
    else{
        res.status(403).json({errorMessage: "You're not allowed to see all users"});
    }
}

getUserStats =  async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);
    const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    try{
        const data = await User.aggregate([
            {
                $project:{
                    month: {$month: "$createdAt"}
                }
            },{
                $group:{
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ]);
        return res.status(200).json(data);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getAllUser,
    getUserStats
};