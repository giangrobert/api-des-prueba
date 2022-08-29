const express = require("express")
const app = express();

let port = process.env.PORT || 3000;
 app.get("/", (req, res) => {
    res.send("HELLO WORLD")
 })

 app.listen(port, () =>{
    console.log("Server on port 3000"); })