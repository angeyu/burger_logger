const express = require("express");
const exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public")); //gotta use dis

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
