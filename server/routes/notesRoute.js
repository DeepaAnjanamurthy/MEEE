const express = require("express");
const router = express.Router();
const fs = require('fs');

function loadNotes(){
    return fs.readFileSync("./data/notes.json", "utf8");
}

// Create Route to get all notes for single user
router.get("/:id", (req,res) => {
    const notes = JSON.parse(loadNotes());
    console.log(req.params.id);
    // console.log(notes);
    const filteredNotes = notes.filter((usernotes) =>{
        return usernotes.id == req.params.id;
    });
    // res.json(notes);
    res.json(filteredNotes);
});

// Create .post route for adding notes for a user


// Create .put route for editing notes for a user


module.exports = router;