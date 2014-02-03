var assert = require('assert'),
  imei = require('../index.js');

describe('imei', function() {
  describe('isValid', function() {
    it('should return true for valid imeis', function() {
      assert(imei.isValid('352099001761481'));
    });
    it('should return false for valid imeis', function() {
      assert(!imei.isValid('352099001761482')); // wrong luhn
      assert(!imei.isValid('52099001761484'));  // too short
    });
  });

  describe('next', function() {
    it('should return next one for valid imei', function(done) {
      imei.next('352099001761481', function(e, next) {
        assert.equal(next, '352099001761499');
        return done(e);
      });
    });
    it('should return error for invalid imei', function(done) {
      imei.next('352099001761482', function(e, next) {
        assert.equal(e, 'invalid imei');
        return done();
      });
    });
  });
});
