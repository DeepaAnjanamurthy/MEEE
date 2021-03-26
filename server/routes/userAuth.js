const express = require("express");
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

const { JWT_KEY } = process.env;

function loadUsers(){
    return fs.readFileSync("./data/users.json", "utf8");
}

// router.get("/", (req, res) => {
//     const users = JSON.parse(loadUsers());
//     res.json(users);
// });

// Use this route to register new user
router.post("/", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const users = JSON.parse(loadUsers());
        // create a random user id
        const user = {username: req.body.username, password: hashedPassword}
        
        users.push(user);
        fs.writeFileSync("./data/users.json", JSON.stringify(users));
        
        res.status(201).send("new user created");
    } catch{
        res.status(500).send("server error, unable to create user");
    }
});

router.post("/login", async (req,res) => {
    const users = JSON.parse(loadUsers());
    const user = users.find((user) => user.username === req.body.username)
    if (user == null){
        return res.status(400).send('User not found');
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            // res.send("username and password checked - success");
            // send token to browser
            const payload = {username: user.username};
            const token = jwt.sign(payload, JWT_KEY, {expiresIn: '1hr'});
            res.json({token});
        } else {
            res.send("Incorrect username or password, try again");
        }
    }
    catch{
        res.status(500).send("server error");
    }
})

module.exports = router;