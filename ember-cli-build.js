/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      "angularfire2/**/*.js",
      "firebase/lib/firebase-web.js"
    ]
  });
  return app.toTree();
}