const path = require('path');
function pictures(cod) {
  if(cod[0]>='M' && cod[0]<'P') return null;
  return path.join(__dirname, cod+'.jpeg');
};
function unpkg(cod) {
  if(cod[0]>='M' && cod[0]<'P') return null;
  return `https://unpkg.com/@ifct2017/pictures/assets/${cod}.jpeg`;
};
function jsdelivr(cod) {
  if(cod[0]>='M' && cod[0]<'P') return null;
  return `https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/${cod}.jpeg`;
};
pictures.unpkg = unpkg;
pictures.jsdelivr = jsdelivr;
module.exports = pictures;
