const express = require("express");
const router = express.Router();
const {getUser, createUser} = require("../controllers/userController");

router.get("/user", getUser);
router.post("/user", createUser);





module.exports = router;