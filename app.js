const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 3003;
const app = express();


app.use("/public", express.static("public"));
app.use("/scripts", express.static("scripts"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(routes);

async function startServer(){
    try{
        await mongoose.connect("mongodb+srv://admin:1234@scrollsitedata.vtn3epm.mongodb.net/scrollSite1", {
            useNewUrlParser: true,  
        });
        app.listen(PORT, ()=>{
            console.log(`We are connected to PORT:${PORT}\n127.0.0.1:${PORT}/index`)
        })
    } catch (err){
        console.log(err);
    }
};

startServer();