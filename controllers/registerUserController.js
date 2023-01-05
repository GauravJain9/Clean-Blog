const { json } = require("body-parser");
const User = require("../database/models/User");
const bcrypt = require('bcrypt');


module.exports = async(req,res) => {
    try {
        const user = new User(req.body);
        const userNameAlredyExists = await User.findOne({username: user.username});
        const emailAlredyExists = await User.findOne({email: user.email});
        if(userNameAlredyExists != null && emailAlredyExists != null) {
        res.render("register", {userNameAlredyExists : {status :true}, emailAlredyExists : {status :true}});
        }
        else if(userNameAlredyExists != null) {
          console.log("adfdffa from user");
        res.render("register", {userNameAlredyExists : {status :true}, emailAlredyExists : {status :false}});
        }
        else if(emailAlredyExists != null) {
        res.render("register", {userNameAlredyExists : {status :false}, emailAlredyExists : {status :true}});
        }
        else{
        const tokenGenerationSuccessfull = await user.generateAuthToken();
        if(tokenGenerationSuccessfull.status) {
        res.cookie("jwt", tokenGenerationSuccessfull.token, {
          expires : new Date(Date.now() + 8309481349),
          httpOnly : true});
        const hashedPasswordSuccessfully = await user.hashPassword();
        if(hashedPasswordSuccessfully) {
        await user.save();
        }
        else {
          console.log("Generation of hashed password failed");
        }
        console.log("user registered successfully");
        loggedinhai = true;
        res.redirect("/");
      }
       else {
        console.log("Token Generation Failed");
        res.redirect("/");
       }
    }
      }
      catch(err) {
        console.log(err);
        res.redirect("/");
      }
};