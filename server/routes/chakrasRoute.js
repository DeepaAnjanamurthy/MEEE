const express = require("express");
const router = express.Router();
const fs = require('fs');

function loadChakras(){
    return fs.readFileSync("./data/chakras.json", "utf8");
}

// Route to get all chakras
router.get("/", (req, res) => {
    const chakras = JSON.parse(loadChakras());
    res.json(chakras);
});

// Route to get single chakra id
router.get("/:id", (req,res)=> {
    // console.log(req.params.id);
    const chakras = JSON.parse(loadChakras());
    const foundChakra = chakras.find((chakra) =>
        chakra.id == req.params.id
    );
    res.json(foundChakra);
});

module.exports = router;