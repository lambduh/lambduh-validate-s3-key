var expect = require('chai').expect;

var validate = require('../');

describe('validateS3Key', function() {
  it('should exist', function() {
    expect(validate).to.exist;
  });

  it('should return a function', function() {
    expect(validate()).to.be.a('function');
  });

  it('should return a function that returns a promise', function() {
    expect(validate()().then).to.exist
  });

  it('should resolve the options object if no settings are inputted', function(done) {
    var options = {
      key: 'val'
    }
    validate()(options).then(function(opts) {
      if (opts) {
        expect(opts).to.equal(options)
        done()
      } else {
        done(new Error("Expected options object to be resolved."))
      }
    }, function() {
      done(new Error("Expected options object to be resolved."))
    })
  });

  it('should reject with an err if no options are inputted but requirements are set', function(done) {
    var settings = {
      srcKey: true
    }
    validate(settings)().then(function(opts) {
      done(new Error("Expected scenario to fail."))
    }, function(err) {
      expect(err).to.exist
      done()
    })
  });


});
