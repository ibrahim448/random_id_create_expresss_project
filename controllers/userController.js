const path = require("path");
const users = require("../models/userModel");


exports.getUser = (req,res)=>{
    res.status(200).json({users})
    // res.sendFile(path.join(__dirname + "/../views/index.html"))
};

