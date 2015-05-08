Splitweet
=========

A  small library for splitting text into tweet size chucks, spliting on spaces and adding ellipsis or any other delimiter

## Installation

  npm install splitweet --save

## Usage
	var splitweet = require('splitweet')
	ss = splitweet.split;
	
	var long = "Lorem ipsum dolor sit amet, sit an dicat fabellas, ne legere legimus pri. Ad rebum volumus corrumpit vix, tibique urbanitas cu his. Ornatus sententiae an mea. Eum ut quando aeterno, odio nullam labore qui no."
	
	console.log(ss(long, 140, '...'));
  	
This returns  

`[ 'Lorem ipsum dolor sit amet, sit an dicat fabellas, ne legere legimus pri. Ad rebum volumus corrumpit vix, tibique urbanitas cu his....', 'Ornatus sententiae an mea. Eum ut quando aeterno, odio nullam labore qui no.' ]`

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.
