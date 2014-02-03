var checkdigit = require('checkdigit');

var imei = {};

imei.isValid = function(i) {
  return i.length === 15 && checkdigit.mod10.isValid(i);
};

imei.next = function(prev, done) {
  if(!imei.isValid(prev)) {
    return done('invalid imei');
  }

  var withoutLuhn = prev.substr(0, 14);
  var nextWithoutLuhn = parseInt(withoutLuhn, 10) + 1;
  var next = checkdigit.mod10.apply(nextWithoutLuhn.toString());

  return done(null, next);
};

module.exports = imei;
