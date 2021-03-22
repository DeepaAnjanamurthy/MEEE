const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_KEY= process.env.JWT_KEY;

router.get("/", (req,res) =>{
    res.json('get login route hit');
});


const user = {name: "test", password: "test" };

router.post("/", (req, res)=>{
        // Find user in users json file, if same as req data, send payload
        if(user.name === req.body.username && user.password === req.body.password){
            const payload ={
                // username:req.body.username,
                username: user.name
                //  can use user avatar here, likes 
            }
            const token = jwt.sign(payload, JWT_KEY, {expiresIn: '1hr'});
            res.json({token});
        } else{
            res.json({message: "username and password not found "});
        }
});


module.exports = router;