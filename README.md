# SWE Apprenticeship Admissions Assessment - Golf Project
This project was part of an admissions assessment through a program called Multiverse. I DID NOT CODE THIS ENTIRE PROJECT! Multiverse provided a functional game, and my job was to write the function that outputs the player's score 

### My Code
[index.js](index.js) 

## The Function

You need to write the function responsible for outputting the “named” score for the course (Birdie, Bogey, etc). So:

In the file index.js (should be showing by default, as usual), write the function golfScore.  If the code passes the tests, it will work in the game as well!

The function should receive two numbers as parameters.

- par for the course

- strokes for the current course so far.

It should return a string representing the score.

	golfScore(4, 7); // => 'Go Home!'
	golfScore(4, 6); // => 'Double Bogey'
	golfScore(4, 5); // => 'Bogey'
	golfScore(4, 4); // => 'Par'
	golfScore(4, 3); // => 'Birdie'
	golfScore(4, 2); // => 'Eagle'
	golfScore(4, 1); // => 'Hole-in-one!'

	golfScore(3, 1); // => 'Hole-in-one!'
	golfScore(3, 2); // => 'Birdie'
	golfScore(3, 3); // => 'Par'
	golfScore(3, 4); // => 'Bogey'
	golfScore(3, 5); // => 'Double Bogey'
