var path    = require("path"),
    express = require("express");

var app = express();

// swig
var swig = require("swig");
swig.setDefaults({ cache: false });
app.engine("html", swig.renderFile);
app.set("view engine", "html");

// views
app.set("views", path.join(__dirname, "views"));

// routes
app.use("/", express.static(path.join(__dirname, "/public")))

app.get("/", function(req, res) {
  res.render("index");
});

// port
app.listen(4000);
console.log("listening on port http://localhost:4000");
