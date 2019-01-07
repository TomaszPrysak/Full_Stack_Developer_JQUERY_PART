$("#single").on({click: singlePlayer});
$("#multi").on({click: multiPlayer});

var singleInput = $("#inputSingle");
var multiInput = $("#multiBox input");
var playButton = 	$("#play");
var resetButton = $("#reset");
var resetButton = $("#reset");
var newGameButton = $("#newGame");
var squares = $("td div");
var numPlayers;
var moveCounter = 1;

// Prosty sposób w JavaScript na sprawdzenie czy wartośc znajduje się w tabeli:
// if (row3.indexOf(7) == "-1") {
// 	console.log("nie ma w tabeli");
// }else{
// 	console.log(row1.indexOf(1));
// }



function singlePlayer(){
	alert("Opcja w trakcie rozwoju");
	if (multiInput.eq(0).prop("disabled") == false) {
		alert('Wybrano rodzaj rozgrywki Multi-player')
	}
	// if (multiInput.eq(0).prop("disabled") == false) {
	// 	alert('Wybrano rodzaj rozgrywki Multi-player')
	// }else{
	// 	numPlayers = 1;
	// 	singleInput.prop("disabled",false);
	// 	playButton.prop('disabled', false);
	// 	playButton.on({click: prepareGame});
	// 	 alert("Opcja w trakcie rozwoju\nBrak możliwości rozgrywki\nOdśwież stronę");
	// }
}

function multiPlayer(){
	if (singleInput.prop("disabled") == false) {
		alert('Wybrano rodzaj rozgrywki Single-player')
	} else {
		numPlayers = 2;
		multiInput.prop('disabled', false);
		playButton.prop('disabled', false);
		playButton.on({click: prepareGame});
	}
}

function prepareGame(){
	playButton.prop('disabled', true);
	resetButton.prop('disabled', false);
	newGameButton.prop('disabled', false);
	resetButton.on({click: wyczysc});
	newGameButton.on({click: nowaGra});
	if (numPlayers == 1) {
		$("#firstPlayer").html(singleInput.eq(0).val() + " (<span style='color:blue;font-weight:bold;'>BLUE</span>)");
		$("#secondPlayer").html("Computer (<span style='color:red;font-weight:bold;'>RED</span>)");
	} else {
		$("#firstPlayer").html(multiInput.eq(0).val() + " (<span style='color:blue;font-weight:bold;'>BLUE</span>)");
		$("#secondPlayer").html(multiInput.eq(1).val() + " (<span style='color:red;font-weight:bold;'>RED</span>)");
	}
	squares.css("opacity", "1");
	squares.on({click: putMark});
}

function putMark(){
	if (numPlayers == 1) {
		alert("Opcja w trakcie rozwoju");
	} else {
		if ($(this).css("background-color") == "rgb(220, 220, 220)") {
			if ((moveCounter % 2) != 0) {
				$(this).css("background-color","blue");
			} else {
				$(this).css("background-color","red");
			}
			moveCounter += 1;
		}
	}
}

function nowaGra(){
	moveCounter = 1;
	wyczysc();
	for (var i = 0; i < squares.length; i++) {
		squares[i].removeEventListener("click", putMark);
	};
	playButton.disabled = true;
	resetButton.disabled = true;
	newGameButton.disabled = true;
	for (var i = 0; i < multiInput.length; i++) {
		multiInput[i].disabled = true;
	}
	document.querySelector("#firstPlayer").textContent = "First player";
	multiInput[0].value = "Player One";
	document.querySelector("#secondPlayer").textContent = "Second Player";
	multiInput[1].value = "Player Two";
	// singleInput.disabled = true;
}

function wyczysc(){
	var x = document.querySelectorAll('td').length;
	for (var i = 0; i < x; i++) {
		document.querySelectorAll('td')[i].textContent = "";
	}
	moveCounter = 1;
}
