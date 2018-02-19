var getHTML = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  console.log(html);
  var rev = String(html);
  var arr = rev.split("");
  arr.reverse();
  rev = arr.join("");
  console.log(rev);

}

getHTML(requestOptions, printReverse);