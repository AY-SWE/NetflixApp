
/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for register/login.
    
    @author Andy Yang
*/

const User = require('../models/User')
//const CryptoJs = require("crypto-js");
const bcrypt = require("bcryptjs");
const auth = require("../auth.js/index.js");

registerUser = async (req, res) => {
    try{
        const { email, password, username } =
      req.body;

      const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            passwordHash,
            username,
          });
          
        const savedUser = await newUser.save();     //mongoose will save user into our db
        res.status(200).json({
            success: true,
            user: {
                email: savedUser.email,
                password: savedUser.passwordHash,
                username: savedUser.username,
            }
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).send();
    }
}

loginUser = async (req, res) => {
    try{
        const { email, password, username } =
      req.body;
      const existingUser = await User.findOne({ email: email });
      const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.passwordHash
      );

      if (!passwordCorrect) {
        return res.status(401).json({
          success: false,
          errorMessage: "Wrong password",
        });
      }

      res.status(200).json({
        success: true,
        user: {
            email: existingUser.email,
            password: existingUser.password,
            username: existingUser.username,
        }
    })
    }
    catch (err) {
        console.error(err);
        res.status(500).send();
      }
}




module.exports = {
    registerUser,
    loginUser
};