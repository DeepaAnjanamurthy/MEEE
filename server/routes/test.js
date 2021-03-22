const express = require("express");
const router = express.Router();
// const fs = require('fs');


// Route to get all chakras
router.get("/", (req, res) => {
    
    res.json("test endpoint");
});