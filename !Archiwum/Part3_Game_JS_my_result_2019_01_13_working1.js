$("#single").on({click: singlePlayer});
$("#multi").on({click: multiPlayer});

var singleInput = $("#inputSingle");
var multiInput = $("#multiBox input");
var playButton = 	$("#play");
var resetButton = $("#reset");
var newGameButton = $("#newGame");
var squares = $("td div");
var numPlayers;
var moveCounter = 1;

function singlePlayer(){
	alert("Opcja w trakcie rozwoju");
	// numPlayers = 1;
	// $("#multi").prop('disabled', true);
	// singleInput.prop("disabled",false);
	// playButton.prop('disabled', false);
	// playButton.on({click: prepareGame});
}

function multiPlayer(){
	numPlayers = 2;
	$("#single").prop('disabled', true)
	multiInput.prop('disabled', false);
	playButton.prop('disabled', false);
	playButton.unbind("click").on({click: prepareGame});
}

function prepareGame(){
	$("#single").prop('disabled', true);
	$("#multi").prop('disabled', true);
	playButton.prop('disabled', true);
	multiInput.prop('disabled', true);
	singleInput.prop('disabled', true);
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

function checkWinner(mark, TDindex, TRindex, color){
	var winner;
	if (color == "rgb(0, 0, 255)") {
		winner = multiInput.eq(0).val();
	} else if (color == "rgb(255, 0, 0)") {
		winner = multiInput.eq(1).val();
	}

	// console.log(TDindex);
	// console.log(TRindex);
	// console.log(color);

	// Logika wygranej w poziomie.
	// ...
	var qtyDivSameColorInRow = mark.parents("tbody").find("tr").eq(TRindex).find("div").filter(function(index){return $(this).css("background-color") == color}).length;
	// console.log(qtyDivSameColorInRow);
	if (qtyDivSameColorInRow >= 4) {
		// console.log("test");
		var divInSameRow = mark.parents("tbody").find("tr").eq(TRindex).find("div");
		var colorCounter = 0;
	 	for (var i = 0; i < divInSameRow.length; i++) {
		 	// console.log(divInSameRow.eq(i).css("background-color"));
			if (divInSameRow.eq(i).css("background-color") == color) {
				colorCounter += 1;
				if (colorCounter == 4) {
					alert("Wygrał " + winner + "\nTeraz rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
					wyczysc();
				}
			} else {
				colorCounter = 0;
			}
		}
	}

	// Logika wygranej w pionie.
	// ...
	if (TRindex < 3) {
		var divInSameColumn = mark.parents("tbody").find("div").filter(function(index){return $(this).parents("td").index() == TDindex });
		var colorCounter = 0;
		for (var i = TRindex; i < TRindex + 4; i++) {
			if (divInSameColumn.eq(i).css("background-color") == color) {
				colorCounter += 1;
				if (colorCounter == 4) {
					alert("Wygrał " + winner + "\nTeraz rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
					wyczysc();
				}
			}
		}
	}
}

function putMark(){
	if (numPlayers == 1) {
		alert("Opcja w trakcie rozwoju");
	} else {
		if ((moveCounter % 2) != 0) {
			// Logika kolorowania najniższego wolnego pola poprzez kliknęcie kolumny.
			// Do zmiennej currentTdIndex przypisywany jest index klikniętego pola z kolekcji elementów TD których rodzicem jest wiersz tabeli TR.
			// Do zmiennej rowQty przypisana jest ilość wierszy TR występująca w naszej tabeli.
			// Następnie iterujemy przez wszystkie wiersze od samoego dołu, ponieważ kolory będą umieszczane od samego dołu jeżeli pole jest wolne.
			// Z każdym przebiegiem pętli do zmiennej divCSS przypisywane jest pole kolumny w którą kliknęnlismy i najpierw od pola na samym dole.
			// Następnie jest sprawdzany kolor tła pola, jezeli jest on koloru rgb(220, 220, 220) to stawiany jest kolor niebieski lub czerwony. I pętla jest przerywana.
			// Jeżeli jest już kolor niebieski lub czerwony to pętla przechodzi do następnej iteracji.
			// I sprawdzane jest pole następne w góre kolumny.
			var currentTdIndex = $(this).parents("tr").find("td").index($(this).parent());
			var rowQty = $(this).parents("tbody").find("tr").length;
			var blue = "rgb(0, 0, 255)"
			for (var currentTrIndex = rowQty - 1; currentTrIndex >= 0; --currentTrIndex) {
				var divCSS = $(this).parents("tbody").find("tr").eq(currentTrIndex).find("td").eq(currentTdIndex).find("div");
				if (divCSS.css("background-color") == "rgb(220, 220, 220)") {
					divCSS.css("background-color",blue);
					checkWinner($(this),currentTdIndex, currentTrIndex, blue);
					break;
				}
			}
		} else {
			var currentTdIndex = $(this).parents("tr").find("td").index($(this).parent());
			var rowQty = $(this).parents("tbody").find("tr").length;
			var red = "rgb(255, 0, 0)"
			for (var currentTrIndex = rowQty - 1; currentTrIndex >= 0; --currentTrIndex) {
				var divCSS = $(this).parents("tbody").find("tr").eq(currentTrIndex).find("td").eq(currentTdIndex).find("div");
				if (divCSS.css("background-color") == "rgb(220, 220, 220)") {
					divCSS.css("background-color",red);
					checkWinner($(this),currentTdIndex, currentTrIndex, red);
					break;
				}
			}
		}
		moveCounter += 1;
	}
}

function nowaGra(){
	moveCounter = 1;
	wyczysc();
	squares.css("opacity", "0.3")
	squares.off({click: putMark})
	$("#single").prop('disabled', false);
	$("#multi").prop('disabled', false);
	playButton.prop('disabled', true);
	resetButton.prop('disabled', true);
	newGameButton.prop('disabled', true);
	multiInput.prop('disabled', true);
	$("#firstPlayer").html("First player");
	multiInput.eq(0).val("Player One");
	$("#secondPlayer").html("Second Player");
	multiInput.eq(1).val("Player Two");
}

function wyczysc(){
	squares.css("background-color","rgb(220, 220, 220)");
	moveCounter = 1;
}
