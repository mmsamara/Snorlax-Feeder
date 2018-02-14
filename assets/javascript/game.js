var wins = 0;
var losses = 0;
var currentFullness = 0;

$(document).ready(function() {
	var randomNumber = Math.floor(Math.random() * 101) + 19;
	var cakeNumber = Math.floor(Math.random() * 12) + 1;
	var lobsterNumber = Math.floor(Math.random() * 12) + 1;
	var sharkNumber = Math.floor(Math.random() * 12) + 1;
	var chickenNumber = Math.floor(Math.random() * 12) + 1;

	$("#goal-number").text(randomNumber);
	$("#current-fullness").text(currentFullness);


	$("#cake").click(function() {
		currentFullness += cakeNumber;
		$("#current-fullness").text(currentFullness);
	});

	$("#lobster").click(function() {
		currentFullness += lobsterNumber;
		$("#current-fullness").text(currentFullness);
	});

	$("#shark").click(function() {
		currentFullness += sharkNumber;
		$("#current-fullness").text(currentFullness);
	});

	$("#chicken").click(function() {
		currentFullness += chickenNumber;
		$("#current-fullness").text(currentFullness);
	});

	
});
