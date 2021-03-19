const express = require("express");
const router = express.Router();
const fs = require('fs');

function loadUsers(){
    return fs.readFileSync("./data/users.json", "utf8");
}

// create a .get route for a user


// create a .post route for a user
router.post("/", (req, res) => {
    // console.log("req body", req.body);
    // console.log("req ", req);
    if(req.body.username === '' && req.body.password === '') {
        res.status(422).send("please enter username and password");
    } else {
        const users = JSON.parse(loadUsers());
                
        // check if the username and password match
        // videos.push(newVideo);
        // fs.writeFileSync("./data/users.json", JSON.stringify(videos));

        res.json({
            message: "User credentials verified",
        });
    }
}
);

module.exports = router;