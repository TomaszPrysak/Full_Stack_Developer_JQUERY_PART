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
			for (var i = rowQty - 1; i >= 0; --i) {
				var divCSS = $(this).parents("tbody").find("tr").eq(i).find("td").eq(currentTdIndex).find("div");
				if (divCSS.css("background-color") == "rgb(220, 220, 220)") {
					divCSS.css("background-color","blue");
					break;
				}
			}
		} else {
			var currentTdIndex = $(this).parents("tr").find("td").index($(this).parent());
			var rowQty = $(this).parents("tbody").find("tr").length;
			for (var i = rowQty - 1; i >= 0; --i) {
				var divCSS = $(this).parents("tbody").find("tr").eq(i).find("td").eq(currentTdIndex).find("div");
				if (divCSS.css("background-color") == "rgb(220, 220, 220)") {
					divCSS.css("background-color","red");
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
