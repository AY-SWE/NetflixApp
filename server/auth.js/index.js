const jwt = require("jsonwebtoken");


function authManager(){
    verify = function (req, res, next) {
        try {
          const token = req.cookies.token;
          if (!token) {
            return res.status(401).json({
              loggedIn: false,
              user: null,
              errorMessage: "You're not Unauthorized",
            });
          }
    
          const verified = jwt.verify(token, process.env.JWT_SECRET);
          req.userId = verified.userId;
    
          next();   //go to actual router
        } catch (err) {
          console.error(err);
          return res.status(401).json({
            errorMessage: "Unauthorized",
          });
        }
      };
    
      verifyUser = (req) => {
        try {
          const token = req.cookies.token;
          if (!token) {
            return null;
          }
    
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
          return decodedToken.userId;
        } catch (err) {
          return null;
        }
      };
    
      signToken = (userId) => {
        return jwt.sign({
            userId: userId
        }, process.env.JWT_SECRET);
    }
    
      return this;
}
const auth = authManager(); //save function to a constant named auth 
module.exports = auth;