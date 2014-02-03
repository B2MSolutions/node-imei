# node-imei

[![Build Status](https://secure.travis-ci.org/B2MSolutions/node-imei.png)](http://travis-ci.org/B2MSolutions/node-imei)

## Description
node-imei is a helper module for IMEI validation and creation.


## Installation
    $ npm install imei

## Usage
``` javascript
var imei = require('imei');

var IMEI = '352099001761481';
var isValid = imei.isValid(IMEI); // returns true

imei.next(IMEI, function(e, next) {
    console.log(next); // logs '352099001761499' (the next IMEI in the range)
});
```

### isValid(IMEI)
Returns a boolean denoting whether the IMEI is valid see the [standards](http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity). 
In practice this means a 15 digit number with a correct luhn digit.

### next(prevIMEI, callback)
Yields the next valid IMEI after prevIMEI. You can use this method to iterate up through valid IMEIs.
It yields an error if either the prevIMEI is invalid or you have come to the end of the TAC range.

## Contributors
Pair programmed by [Roy Lines](http://roylines.co.uk) and [James Bloomer](https://github.com/jamesbloomer).
