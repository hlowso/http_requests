https = require("https");

module.exports = function getHTML (options, callback) {
  https.get(options, function(response) {
  	var output = "";
    response.setEncoding('utf8');
    response.on('data', function (data) {
      output += data;
    });
    response.on('end', function () {
      callback(output);
    });
  });
};