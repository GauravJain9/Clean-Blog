const User = require("../database/models/User");
const bcrypt = require('bcrypt');

module.exports = async (req,res) => {
    try {
      const providedPassword = req.body.password;
      const user = await User.findOne({email: req.body.email});
      if(user == null) {
      res.render("login", {loginstatus : {status :false}});
      }
      const hashedPassword = user.password;
      const isPassMatch = await bcrypt.compare(providedPassword, hashedPassword);
      if(isPassMatch)  { 
        const result = await user.generateAuthToken();
        await user.save();
        res.cookie("jwt", result.token, {
          expires : new Date(Date.now() + 8309481349),
          // httpOnly : true,
          secure : true
        });
        loggedinhai = true;
        res.redirect("/");
      }
      else {
        res.render("login", {loginstatus : {status :false}});
      }
    }
    catch(err) {
      console.log(err);
    }
  };