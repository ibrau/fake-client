const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const server = app.listen(0, () => {
  console.log('Listening on port:', server.address().port);
});

// server css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var subName = req.body.yourname
  var subEmail = req.body.youremail;
 res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
});

app.get("/esign", (req,res) => {
  console.log(__dirname)
  res.sendFile(__dirname + "/esign.html");
});