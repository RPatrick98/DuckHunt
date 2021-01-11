
var duck = document.getElementById('duck');
var miss = document.getElementById('stage');

var directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
var posLeft = 450;
var posTop = 250;
var counterduck = 0;
var countermiss = 0;
var counter = counterduck + countermiss;






function fly() {
	var randomItem = directions[Math.floor(Math.random() * directions.length)];
	
	
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

	

}

function teller() {
	duck.addEventListener("click", function() {
			counterduck++;
			if(counterduck == 5) {
				alert('hit');
			}
			
	});

	miss.addEventListener("click", function() {
			countermiss++;
			if(countermiss == 5) {
				alert('miss');
			}				
			
	});
	if(counter === 20) {
		alert('hi');
	}

}


function timefly() {
	setInterval(function(){ fly(); }, 100);
	teller();

}
timefly();













