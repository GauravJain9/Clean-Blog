//jshint esversion:6

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const bcrypt = require('bcrypt');
const _ = require('lodash');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");

// To remove unecessary warnings
mongoose.set('strictQuery', true);


const conn = mongoose.connect(process.env.DATABASE);
conn.then(() => console.log("Database connection successfull"))
.catch((err) => console.log("Something went wrong " + err));


const app = express();
const homeRouter = require("./routers/home");
const aboutRouter = require("./routers/about");
const contactRouter = require("./routers/contact");
const postRouter = require("./routers/post");
const loginRouter = require("./routers/login");
const readBlogRouter = require("./routers/readblog");
const registerRouter = require("./routers/register");
const logoutRouter = require("./routers/logout");

global.loggedinhai = false;
global.homeCheck = false;

app.set('view engine', 'ejs');   // Helps to parse all the data coming from html form 
app.use(cookieParser()); // To parse the cokie header in the request
app.use(bodyParser.urlencoded({extended: true}));  // Helps to parse all the request having data in json format
app.use(bodyParser.json());  // alternative => app.use(express.json());
app.use(express.static("public")); 
// app.use(function (req, res, next) {
//   res.locals = {
//     status : false
//   };
//   next();
// });
app.use(homeRouter);
app.use(aboutRouter);
app.use(contactRouter);
app.use(postRouter);
app.use(loginRouter);
app.use(readBlogRouter);
app.use(registerRouter);
app.use(logoutRouter);

const User = require('./database/models/User');
const Post = require('./database/models/Post');

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server started on port 3000");
});
