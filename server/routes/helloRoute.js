const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');
// const fs = require('fs');

const JWT_KEY= process.env.JWT_KEY;

router.get("/", (req,res) => {
    res.json('hello route hit');
});




module.exports = router;