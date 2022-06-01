const jwt = require("jsonwebtoken");


function authManager(){
    verify = function (req, res, next) {
        const authHeader = req.headers.token;
        if(authHeader){
          const token = authHeader.split(" ")[1];

          jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
              if(err){
                res.status(403).json({
                  loggedIn: false,
                  user: null,
                  errorMessage: "Unauthorized, token invalid"
                });
              }
              req.user = user;
              next(); // go to actual router
          });
        }
        else{
          return res.status(401).json("You are not authorized, authManager.verify ");
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
    
      signToken = (userId, isAdmin) => {
        return jwt.sign({
            userId: userId, isAdmin: isAdmin
        }, process.env.JWT_SECRET);
    }
    
      return this;
}
const auth = authManager(); //save function to a constant named auth 
module.exports = auth;