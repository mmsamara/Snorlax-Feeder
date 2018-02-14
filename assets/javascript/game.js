
$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var currentFullness = 0;

	// function initializeGame() {
		
	// 	$("#current-fullness, #goal-number").empty();
	// };

	var randomNumber = Math.floor(Math.random() * 101) + 19;
	var cakeNumber = Math.floor(Math.random() * 12) + 1;
	var lobsterNumber = Math.floor(Math.random() * 12) + 1;
	var sharkNumber = Math.floor(Math.random() * 12) + 1;
	var chickenNumber = Math.floor(Math.random() * 12) + 1;

	$("#goal-number").text(randomNumber);
	$("#current-fullness").text(currentFullness);
	$("#wins-area").text(wins);
	$("#losses-area").text(losses);

	$("#cake").click(function() {
		currentFullness += cakeNumber;
		$("#goal-number").text(randomNumber);
		$("#current-fullness").text(currentFullness);
		$("#wins-area").text(wins);
		$("#losses-area").text(losses);
		if (currentFullness === randomNumber) {
			wins++;
			$("#result-message").text("You Win!");
		}
		else if (currentFullness > randomNumber) {
			losses++;
			$("#result-message").text("You Lose :(");
			//initializeGame();
		}
	});

	$("#lobster").click(function() {
		currentFullness += lobsterNumber;
		$("#goal-number").text(randomNumber);
		$("#current-fullness").text(currentFullness);
		$("#wins-area").text(wins);
		$("#losses-area").text(losses);
		if (currentFullness === randomNumber) {
			wins++;
			$("#result-message").text("You Win!");
		}
		else if (currentFullness > randomNumber) {
			losses++;
			$("#result-message").text("You Lose :(");
			//initializeGame();
		}
	});

	$("#shark").click(function() {
		currentFullness += sharkNumber;
		$("#goal-number").text(randomNumber);
		$("#current-fullness").text(currentFullness);
		$("#wins-area").text(wins);
		$("#losses-area").text(losses);
		if (currentFullness === randomNumber) {
			wins++;
			$("#result-message").text("You Win!");
		}
		else if (currentFullness > randomNumber) {
			losses++;
			$("#result-message").text("You Lose :(");
			//initializeGame();
		}
	});

	$("#chicken").click(function() {
		currentFullness += chickenNumber;
		$("#goal-number").text(randomNumber);
		$("#current-fullness").text(currentFullness);
		$("#wins-area").text(wins);
		$("#losses-area").text(losses);
		if (currentFullness === randomNumber) {
			wins++;
			$("#result-message").text("You Win!");
		}
		else if (currentFullness > randomNumber) {
			losses++;
			$("#result-message").text("You Lose :(");
			//initializeGame();
		}
	});

	$("#goal-number").text(randomNumber);
		$("#current-fullness").text(currentFullness);
		$("#wins-area").text(wins);
		$("#losses-area").text(losses);
});
