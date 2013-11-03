var browserify  = require("browserify"),
    shim        = require("browserify-shim"),
    path        = require("path"),
    fs          = require("fs");

var outputFile = path.resolve(__dirname, "../public/js/app.js");

var bundle = shim(browserify(), {
  jquery: {
    path:     "../vendor/jquery/jquery-2.0.3.js",
    exports:  "jQuery",
  },
  backbone: {
    path:     require.resolve("backbone"),
    exports:  "Backbone",
    depends:  {jquery: "jQuery"},
  },
});

bundle.require(require.resolve("../lib/app.js"), {entry: true});

bundle.bundle(function (err, src) {
  if (err) {
    return console.warn(err);
  }

  fs.writeFileSync(outputFile, src);
});
