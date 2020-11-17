DEPTH = "20";

var stockfish = STOCKFISH();
stockfish.onmessage = function(event) {
	if (event == "uciok") {
		stockfish.postMessage("isready");
	}
	if (event == "readyok") {
		stockfish.postMessage("ucinewgame");
	}
	if (event.includes("info")) {
		res = event.split(" ");
		score = float(res[res.indexOf("cp")+1])/100;
		evals.push(score);
	}
};
stockfish.postMessage("uci");