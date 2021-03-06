var wins = 0;
var losses = 0;
var currentFullness = 0;
var randomNumber;
var cakeNumber;
var lobsterNumber;
var sharkNumber;
var chickenNumber;

$(document).ready(function() {
	
	function initializeGame() {

		currentFullness = 0;
		randomNumber = Math.floor(Math.random() * 101) + 19;
		cakeNumber = Math.floor(Math.random() * 12) + 1;
		lobsterNumber = Math.floor(Math.random() * 12) + 1;
		sharkNumber = Math.floor(Math.random() * 12) + 1;
		chickenNumber = Math.floor(Math.random() * 12) + 1;

		$("#goal-number").text(randomNumber);
		$("#current-fullness").text(currentFullness);
		$("#wins-area").text(wins);
		$("#losses-area").text(losses);
		
	};

	function feedSnorlax(food) {
		
		currentFullness += food;
		$("#current-fullness").text(currentFullness);
		if (currentFullness === randomNumber) {
			wins++;
			$("#result-message").text("You Win!");
			initializeGame();
		}
		else if (currentFullness > randomNumber) {
			losses++;
			$("#result-message").text("You Lose :(");
			initializeGame();
		}
	}
	//function invocation
	//$("#cake").click(feedSnorlax.bind(this, cakeNumber));
	//$("#cake").click(undefined);

	//function declaration
	$("#cake").click(function() {
		feedSnorlax(cakeNumber);
	});

	$("#lobster").click(function() {
		feedSnorlax(lobsterNumber);
	});

	$("#shark").click(function() {
		feedSnorlax(sharkNumber);
	});

	$("#chicken").click(function() {
		feedSnorlax(chickenNumber);
	});

	initializeGame();

});
