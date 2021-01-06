
var duck = document.getElementById('duck');
var miss = document.getElementById('container');
var directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
var posLeft = 450;
var posTop = 250;

var countermiss = 0;





function fly() {
	var randomItem = directions[Math.floor(Math.random() * directions.length)];
	var counterduck = 0;
	if(randomItem == "e") {
		posLeft = posLeft + 75;
		duck.style.left = posLeft + "px";
	}
	else if (randomItem == "w") {
		posLeft = posLeft - 75;
		duck.style.left = posLeft + "px";
	}
	else if (randomItem == "n") {
		posTop = posTop - 75;
		duck.style.top = posTop + "px";
	}
	else if(randomItem == "ne") {
		posLeft = posLeft + 75;
		posTop = posTop - 75;
		duck.style.left = posLeft + "px";
		duck.style.top = posTop + "px";
	}

	else if(randomItem == "nw") {
		posLeft = posLeft - 75;
		posTop = posTop - 75;
		duck.style.left = posLeft + "px";
		duck.style.top = posTop + "px";
	}

	else if(randomItem == "se") {
		posLeft = posLeft + 75;
		posTop = posTop + 75;
		duck.style.left = posLeft + "px";
		duck.style.top = posTop + "px";
	}

	else if(randomItem == "sw") {
		posLeft = posLeft - 75;
		posTop = posTop + 75;
		duck.style.left = posLeft + "px";
		duck.style.top = posTop + "px";
	}
	
	else {
		posTop = posTop + 75;
		duck.style.top = posTop + "px";
	}

	duck.addEventListener("click", function() {
			counterduck++
	});

	miss.addEventListener("click", function() {
			counterduck++
	});

	
}


function timefly() {
		setInterval(function(){ fly(); }, 500);
}
timefly();








