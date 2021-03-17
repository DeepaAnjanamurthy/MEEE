const express = require("express");
const router = express.Router();
const fs = require('fs');

function loadUsers(){
    return fs.readFileSync("./data/users.json", "utf8");
}

// create a .get route for a user


// create a .post route for a user

module.exports = router;