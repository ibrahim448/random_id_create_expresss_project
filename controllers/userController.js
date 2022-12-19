const path = require("path");
const users = require("../models/userModel");
const { v4: uuidv4 } = require('uuid');

exports.getUser = (req,res)=>{
    // res.status(200).json({users})
    res.sendFile(path.join(__dirname + "/../views/index.html"))
};

exports.createUser = (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const createUser = {
        id: uuidv4(),
        name,
        age
    }
    users.push(createUser);
    res.status(201).json(users)
}

