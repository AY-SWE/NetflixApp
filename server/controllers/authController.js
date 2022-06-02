
/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for register/login.
    
    @author Andy Yang
*/

const User = require('../models/User')
//const CryptoJs = require("crypto-js");
const bcrypt = require("bcryptjs");
const auth = require("../auth");

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

        // LOGIN THE USER
      const token = auth.signToken(savedUser._id, savedUser.isAdmin);
      const {...info} = savedUser._doc;
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: true
        }).status(200).json({
          success: true,
          user: {
              email: savedUser.email,
              password: savedUser.passwordHash,
              username: savedUser.username,
          }
        })
        // res.status(200).json({
        //     success: true,
        //     user: {
        //         email: savedUser.email,
        //         password: savedUser.passwordHash,
        //         username: savedUser.username,
        //     }
        // })
    }
    catch (err) {
        console.error(err);
        res.status(500).send();
    }
}

loginUser = async (req, res) => {
    try{
        const { email, password,  } =
      req.body;
      const existingUser = await User.findOne({ email: email });
      if (!existingUser) {
        return res
            .status(401)
            .json({
                errorMessage: "Wrong email provided."
            })
    }
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

      // LOGIN THE USER
      const token = auth.signToken(existingUser._id, existingUser.isAdmin);
      const {...info} = existingUser._doc;
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: true
        }).status(200).json({...info, token})

      // const token = auth.signToken(existingUser._id, existingUser.isAdmin);
      // //console.log(token);

      // const {...info} = existingUser._doc;

      // res.status(200).json({...info, token})
    }
    catch (err) {
        console.error(err);
        res.status(500).send();
      }
}

logoutUser = async (req, res) => {
  res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none"
  }).send();
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};