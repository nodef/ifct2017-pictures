const assert = require('assert');
const pictures = require('./');




function testAll() {
  var a = pictures.unpkg('A001');
  var b = 'https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg';
  assert.deepStrictEqual(a, b);

  var a = pictures.jsDelivr('A001');
  var b = 'https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/A001.jpeg';
  assert.deepStrictEqual(a, b);
}
testAll();
