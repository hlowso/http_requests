var getHTML = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

var leet_speak_swaps = {};
leet_speak_swaps['er'] = '0r';
leet_speak_swaps['you'] = 'j00';
leet_speak_swaps['ck'] = 'x';
leet_speak_swaps['a'] = '4';
leet_speak_swaps['e'] = '3';
leet_speak_swaps['l'] = '1';
leet_speak_swaps['o'] = '0';
leet_speak_swaps['s'] = '5';
leet_speak_swaps['t'] = '7';

function print1337(html) {
  for(let key in leet_speak_swaps) {
  	html = html.replace(new RegExp(key, 'g'), leet_speak_swaps[key]);
  }
  console.log(html);
}

getHTML(requestOptions, print1337);