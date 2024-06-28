const argon2 = require("argon2");
const tables = require ("../../database/tables")

const {encodeJWT} = require("../helpers/jwtHelper"); 


const login = async (req, res) => {
  
      const { email, password } = req.body;
      const [user] = await tables.user.searchByEmail(email);

      if (!user){
        return res.status(404).json({
            message: "Email and password do not match"
        })
      }
      
      const verified = await argon2.verify(user.password, password);
  
      if (!verified){
        return res.status(404).json({
            message: "Email and password do not match"
        })
      }

      delete user.password;

      const token = encodeJWT(user); 
      res.cookie("auth_token", token, {httpOnly : true, secure: false}); 

      return res.send("You are connected"); 

    };

const logout = (req, res) => {
    res.clearCookie("auth").sendStatus(200);
}






module.exports = {login, logout}