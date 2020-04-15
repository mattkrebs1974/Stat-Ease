const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express(); 

app.get("/", (req,res) => res.send('INDEX'));


const PORT = process.env.PORT || 8080; 

app.listen(PORT, console.log(`Server started on Port ${PORT}`));

