let express = require('express');
let app = express();


console.log("Hello World");

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

// Serve HTML file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// point your browser to your-app-url/json, you should see the message on the screen.
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});


































 module.exports = app;
