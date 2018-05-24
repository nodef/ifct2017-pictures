function pictures(id) {
  if((id[0]>='M' && id[0]<'P') || id[0]>='T') return null;
  return `https://unpkg.com/@ifct2017/pictures@0.2.0/${id}.jpeg`;
};
module.exports = pictures;
