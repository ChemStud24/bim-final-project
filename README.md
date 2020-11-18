# bim-final-project

You need to spin up a web server in order to run the code locally.  Run the below python command and then go to localhost:8000 in your browser.

Python 2:

python -m SimpleHTTPServer 8000

Python 3:

python -m http.server 8000

***You have to wait until Stockfish is done calculating the values before switching to another game.***

Things to fix/add:
-- bug stated above
-- moves list looks weird near the control buttons
-- filter out 960 and other variants
-- returns NaN when stockfish finds "mate"