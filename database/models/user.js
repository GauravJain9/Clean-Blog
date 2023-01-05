const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { use } = require("../../routers/home");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

// Generating a jwt token for each user who registers (statics are used on models and methods on docs)
UserSchema.methods.generateAuthToken = async function() {
    try{
    const jwtToken = await jwt.sign({_id : this._id.toString()}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token : jwtToken});
    console.log("before  " + this);
    // Always check that b4 calling save we are running a pre script which will change the hash of the password
   // await this.save();
   const returnValue = {
    status : true,
    token : jwtToken
   }
    return returnValue;
    }
    catch(err) {
        const returnValue = {
            status : false,
            err : err
           }
        return returnValue;
    }
}

// Converting passwords to hash
UserSchema.methods.hashPassword = async function() {
   // 10 rounds of salt 2^10 hashing iterations
   try{
   const hashedPassword = await bcrypt.hash(this.password, 10);
   this.password = hashedPassword;
   console.log(this.password + " final password hash");
   console.log("after  " + this);
   return true;
   }
   catch(err) {
    console.log(err);
    return false;
   }
}

// Converting passwords to hash
// UserSchema.pre("save", async function(next) {
//     // 10 rounds of salt 2^10 hashing iterations
//     const hashedPassword = await bcrypt.hash(this.password, 10);
//     this.password = hashedPassword;
//     console.log(this.password + " final password hash");
//     console.log("after  " + this);
//     next();
// });

const User = new mongoose.model('User', UserSchema);

module.exports = User;