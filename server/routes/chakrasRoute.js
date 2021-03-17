const express = require("express");
const router = express.Router();
const fs = require('fs');

function loadChakras(){
    return fs.readFileSync("./data/chakras.json", "utf8");
}

// Route to get all chakras
router.get("/", (req, res) => {
    const chakras = JSON.parse(loadChakras());

    const chakrasMapped = chakras.map((chakra) => {
        return{
            id: chakra.id,
            // title: video.title,
            // image: video.image,
            // channel: video.channel,
        };
    });
    // res.json(videos);
    res.json(chakrasMapped);
});

// Route to get single chakra id
router.get("/:id", (req,res)=> {
    const chakras = JSON.parse(loadChakras());
    const foundChakraIndex = chakras.findIndex((chakra) =>{
        return chakra.id === req.params.id;
    });
    // console.log('foundVideoIndex', foundVideoIndex);
    res.json(chakra[foundChakraIndex]);
});

module.exports = router;