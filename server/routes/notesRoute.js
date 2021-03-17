const express = require("express");
const router = express.Router();
const fs = require('fs');

function loadNotes(){
    return fs.readFileSync("./data/notes.json", "utf8");
}

// Create Route to get all notes for single user
router.get("/:id", (req,res)=> {
    const notes = JSON.parse(loadNotes());
    const foundNoteIndex = notes.findIndex((note) =>{
        return note.id === req.params.id;
    });
    // console.log('foundVideoIndex', foundVideoIndex);
    res.json(note[foundNoteIndex]);
});

// Create .post route for adding notes for a user


// Create .put route for editing notes for a user


module.exports = router;