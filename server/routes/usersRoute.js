const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_KEY = process.env.JWT_KEY;

// create a .get route for a user
router.get("/",
    (req, res) =>{
        console.log(req.headers);
        const tokenData = req.headers.authorization ? req.headers.authorization : '';
        
        const token = tokenData.split(' ')[1];
        jwt.verify(token, JWT_KEY, (err, decodedData) =>{
            if(err){
                res.status(403).json({error: 'Token not authorized or it has expired'});
            } else {
                res.json(decodedData);
            }
        })
    })

router.post("/", (req, res) => {
        console.log(req.body);
        // add user info to users.json
        res.send('request to add user recieved');
    })


// // create a .post route for a user
// router.post("/", (req, res) => {
//     // console.log("req body", req.body);
//     // console.log("req ", req);
//     if(req.body.username === '' && req.body.password === '') {
//         res.status(422).send("please enter username and password");
//     } else {
//         const users = JSON.parse(loadUsers());
                
//         // check if the username and password match
//         // videos.push(newVideo);
//         // fs.writeFileSync("./data/users.json", JSON.stringify(videos));

//         res.json({
//             message: "User credentials verified",
//         });
//     }
// }
// );

module.exports = router;