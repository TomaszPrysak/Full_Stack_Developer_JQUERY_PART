$("#single").on({click: singlePlayer});
$("#multi").on({click: multiPlayer});

var singleInput = $("#inputSingle");
var multiInput = $("#multiBox input");
var playButton = 	$("#play");
var resetButton = $("#reset");
var resetButton = $("#reset");
var newGameButton = $("#newGame");
var squares = $("td");
var numPlayers;

// Prosty sposób w JavaScript na sprawdzenie czy wartośc znajduje się w tabeli:
// if (row3.indexOf(7) == "-1") {
// 	console.log("nie ma w tabeli");
// }else{
// 	console.log(row1.indexOf(1));
// }

var moveCounter = 1;

function singlePlayer(){
	alert("Opcja w trakcie rozwoju");
	// if (multiInput[0].disabled == false) {
	// 	alert('Wybrano rodzaj rozgrywki Multi-player')
	// }else{
	//  numPlayers = 1;
	// 	singleInput.disabled = false;
	// 	playButton.prop('disabled', false);
	// 	playButton.on({click: prepareGame});
	// }
}

function multiPlayer(){
	if (singleInput.attr("disabled") == false) {
		alert('Wybrano rodzaj rozgrywki Single-player')
	} else {
		numPlayers = 2;
		for (var i = 0; i < multiInput.length; i++) {
			multiInput.eq(i).prop('disabled', false);
		}
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
		document.querySelector("#firstPlayer").textContent = multiInput[0].value;
		document.querySelector("#secondPlayer").textContent = "Computer";
	} else {
		$("#firstPlayer").html(multiInput.eq(0).val() + " (<span style='color:blue;font-weight:bold;'>BLUE</span>)");
		$("#secondPlayer").html(multiInput.eq(1).val() + " (<span style='color:red;font-weight:bold;'>RED</span>)");
	}
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", putMark);
	}
}

function putMark(){
	if (numPlayers == 1) {
		alert("Opcja single-player nie jest jeszcze rozwinięta");
	} else {
		if (this.innerHTML == "") {
			if ((moveCounter % 2) != 0) {
				this.innerHTML = "X"
			} else {
				this.innerHTML = "O"
			}
			moveCounter += 1
			if (moveCounter > 5) {
					if (checkWinner(this.innerHTML, this.id) == this.innerHTML) {
						alert("wygrana " + this.innerHTML + "\nPo kliknięciu OK rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
						wyczysc();
					}
				}
			// 	}
			// setTimeout(function(){showWin()}, 3000);
			// function showWin(x){
			// 	if (moveCounter > 5) {
			// 		if (checkWinner(this.innerHTML, this.id) == this.innerHTML) {
			// 			alert("wygrana " + this.innerHTML);
			// 			wyczysc();
			// 		}
			// 	}
			// }
		} else {
			alert("Nie możesz tutaj postawić znaku");
		}
	}
	if (moveCounter == 10) {
		alert("Remis\nPo kliknięciu OK rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
		wyczysc();
	}
}

function checkWinner(mark, id){
	var intID = parseInt(id)
	for (variable1 of rowColArray) {
		if (variable1.indexOf(intID) != "-1") {
			var markCounter = 0;
			for (variable2 of variable1) {
				if (document.getElementById(variable2).innerHTML == mark) {
					markCounter += 1;
				}
				if (markCounter == 3) {
					return mark;
				}
			}
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
