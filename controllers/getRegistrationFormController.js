module.exports = (req,res) => {
    res.render("register", {userNameAlredyExists : {status :false}, emailAlredyExists : {status :false}});
};