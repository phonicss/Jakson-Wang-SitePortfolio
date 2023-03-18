const {Router} = require("express");
const router = Router();
const mongoose = require("mongoose");
const scripts = require("./scripts/script2.js");



//create a data schema
const noteSchema = {
    email: String,
    message: String
}

const Note = mongoose.model("Note", noteSchema);


router.get("/index", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

router.get("/message", (req,res) => {
    res.sendFile(__dirname + "/message.html");
});


router.post("/index.html", async (req,res) => {
    
    const newNote = new Note({
        email: req.body.emailData,
        message: req.body.messageData
    });

   // await newNote.save();
    res.redirect("/message");
    
    
    
})

module.exports = router;
