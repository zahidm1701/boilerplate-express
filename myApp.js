require('dotenv').config();

let express = require('express');
let app = express();


console.log("Hello World");

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

// Serve HTML file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// point your browser to your-app-url/json, you should see the message on the screen.
app.get("/json", function(req, res) {
  let message = "Hello Jsoni";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  res.json({ message: "message" });
});
































 module.exports = app;
