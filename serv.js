const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
app.set('view engine', 'ejs');
const request = require("request");
app.use(bodyParser.urlencoded({extended: true}));

// =================== =================== ===================
// ===================       /INDEX      ===================
// =================== =================== ===================

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/view/index.html");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port: 3000");
});