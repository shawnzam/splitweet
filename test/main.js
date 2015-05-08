var should = require('chai').should(),
    splitweet = require('../main'),
    splitweet_split = splitweet.split;

var long = "Lorem ipsum dolor sit amet, sit an dicat fabellas, ne legere legimus pri. Ad rebum volumus corrumpit vix, tibique urbanitas cu his. Ornatus sententiae an mea. Eum ut quando aeterno, odio nullam labore qui no. Lorem ipsum dolor sit amet, sit an dicat fabellas, ne legere legimus pri. Ad rebum volumus corrumpit vix, tibique urbanitas cu his. Ornatus sententiae an mea. Eum ut quando aeterno, odio nullam labore qui no."
describe('#split', function() {
  it('splits a short tweet to an array', function() {
    splitweet_split('foo').should.eql(['foo']);
  });

  it('splits a long tweet to a non empty array', function() {
    splitweet_split(long).should.not.be.empty;
  });

  it('splits a long tweet to an array of short tweets', function() {
    splitweet_split("12345 12456", 9, '...').should.eql([ '12345...', '12456' ]);
  });

  it('splits a long tweet to an array of short tweets, with an alt delimiter', function() {
    splitweet_split("12345 12456", 9, '!!').should.eql([ '12345!!', '12456' ]);
  });

   it('splits a long spaceless tweet to an array of short tweets, with an alt delimiter', function() {
    splitweet_split("11111111", 4, '||').should.eql([ '11||', '11||', '11||', '11' ]);
  });

  it('handle empty string', function() {
    splitweet_split("", 4, '||').should.eql([ '' ]);
  });

  it('handle long string', function() {
    splitweet_split(long, 140, '...').length.should.equal(4);
  });

  it('end in correct delimiter', function() {
    splitweet_split(long, 140, '...')[0].should.match(/.*\.\.\.$/);
  });

  it('be less the param length', function() {
    splitweet_split(long, 140, '...')[0].length.should.be.below(141);
  });

});