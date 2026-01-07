let express = require('express');
let app = express();


console.log("Hello World");

// Serve static files from /public
app.use(express.static(__dirname + "/public"));

// Serve HTML file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});



































 module.exports = app;
