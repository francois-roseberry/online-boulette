# online-boulette
Boulette game where words are picked at random and you try to guess them

## Gameplay

When you connect, you have a textfield where you enter your name

after, you have x textboxes to input words
on the side, it shows the people connected, and the number of words

when done, you're shown the same side panel, you have a start and reset (kicks the players and erases words) button

Players are separated randomly into teams

after start, pick the first player in the first team:
	wait 5 seconds for players to be ready
	show a random word, with the buttons 'Guessed', or 'Pass', and a 1 minute countdown
	if 'Pass' is clicked, the player loses a point, put the word back in the bucket and show another random one
	Repeat (with the first player in all teams, then the second, etc.) until 1 minute is up or there are no more words

If words are remaining, pick up the next player and do the same

when there are no more words, round is over

there are 3 rounds, 1st: description, 2nd: synonym, 3rd: mime

after three rounds, scores are shown: array of player names and scores
and a button to start again with the same players

if one player quits the game before the end, game is cancelled and everyone is kicked. Simple
