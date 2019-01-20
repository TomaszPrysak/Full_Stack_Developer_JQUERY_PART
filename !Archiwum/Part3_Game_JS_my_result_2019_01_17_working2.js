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
	// Do zmiennej qtyDivSameColorInRow przypisywana jest kolekcja elementów DIV o tym samym kolorze w tym samym wierszu.
	// Następnie sprawdzana jest ilość elementów w kolekcji qtyDivSameColorInRow. Jeżeli jest więcej lub równo cztery to sprawdzana jest czy kolory te są położone obok siebie po kolei.
	// A więc do zmiennej divInSameRow przypisywana jest kolekcja elementów DIV w tym samym wierszu.
	// Następnie ustawiamy zmienną colorCounter na wartość 0. Zmienna ta będzie wykorzystywana do liczenia ilości takich samych kolorów po kolei w poziomie.
	// W pętli o długości kolekcji divInSameRow iterowane są elementy z tego samego wiersza.
	// W każdym przebiegu sprawdzane jest czy kolor w elemencie jest tego samego koloru co kolor przekazywany do funkcji.
	// Jeżeli jest ten sam kolor to zmienna colorCounter jest inkrementowana o jeden.
	// Natomiast jeżeli jest inny kolor to zmienna colorCounter jest spowrotem ustawiana na 0.
	// Musimy tak zrobić gdyż nie iterujemy tylko przez czerty elementy a przez wszystkie z tego samego wiersza.
	// Jeżeli zmienna colorCounter osiągnie wartość 4 to znaczy, że po kolei są cztery takie same kolory i gra jest przrywana i wyswietlany komunukat o wygranej jednego z graczy.
	var qtyDivSameColorInRow = mark.parents("tbody").find("tr").eq(TRindex).find("div").filter(function(index){return $(this).css("background-color") == color}).length;
	if (qtyDivSameColorInRow >= 4) {
		var divInSameRow = mark.parents("tbody").find("tr").eq(TRindex).find("div");
		var colorCounter = 0;
	 	for (var i = 0; i < divInSameRow.length; i++) {
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
	// Wygrana w pionie i po przekątnej są możliwe tylko jeżeli ilość wypełnionych pól sięga trzeciego rzędu od góry,
	// czyli rzędu o indeksie 2 z kolekcji elementów będących rzędami tabeli.
	if (TRindex < 3) {
		// Do zmiennej divInSameColumn przypisywana jest kolekcja elementów DIV będące w jednej kolumnie.
		// Takimi elementami są elementy DIV którymi rodzicami są elementy TD o tym samym indeksie który jest przekazywany do naszej funkcji w argumencie TDindex.
		// Następnie ustawiamy zmienną colorCounter na wartość 0. Zmienna ta będzie wykorzystywana do liczenia ilości takich samych kolorów po kolei w pionie.
		// W pętli iterowane są elementu z tej samej kolumny. W każdym przebiegu sprawdzane jest czy kolor w elemencie jest tego samego koloru co kolor przekazywany do funkcji.
		// Jeżeli jest ten sam to zmienna colorCounter jest inkrementowana o jeden.
		// Sa tylko cztery przebiegi pętli bo tyle musi być kolorów w pionie aby uznać wygraną.
		// Jeżeli zmienna colorCounter osiągnie wartość 4 to gra jest przrywana i wyswietlany komunukat o wygranej jednego z graczy.
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

	// Logika wygranej po przekątnej.
	// ...
	for (var row = 0; row < 3; row++) {
		// console.log(row);
		for (var col = 0; col < 7; col++) {

			if (col <= 3) {
				var rowForCheckDiagonal = row;
				var colorCounter = 0;
				for (var colForCheckDiagonal = col; colForCheckDiagonal < col + 4; colForCheckDiagonal++) {
					// console.log(mark.parents("tbody").find("tr").eq(rowForCheckDiagonal).find("td").eq(colForCheckDiagonal));
					var divForCheckDiagonal = mark.parents("tbody").find("tr").eq(rowForCheckDiagonal).find("td").eq(colForCheckDiagonal).find("div");
					if (divForCheckDiagonal.css("background-color") == color) {
						colorCounter += 1;
						if (colorCounter == 4) {
							alert("Wygrał " + winner + "\nTeraz rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
							wyczysc();
						}
					}
					rowForCheckDiagonal += 1
				}
				// console.log("koniec");
			}

			if (col >= 3) {
				var rowForCheckDiagonal = row;
				var colorCounter = 0;
			}
			// 	var indexOffsetTD = j;
			// 	var colorCounter = 0;
			// 	for (var k = i; k < j + 4; k++) {
			// 		var currentDIVinDIAGONAL = mark.parents("tbody").find("tr").eq(k).find("td").eq(indexOffsetTD).find("div");
			// 		if (currentDIVinDIAGONAL.css("background-color") == color) {
			// 			console.log(currentDIVinDIAGONAL);
			// 			colorCounter += 1;
			// 			if (colorCounter == 4) {
			// 				alert("Wygrał " + winner + "\nTeraz rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
			// 				wyczysc();
			// 			}
			// 		}
			// 		indexOffsetTD += 1;
			// 	}
			// }

		}
	}

	// if (0 <= TDindex <= 3) {
	// 	var indexOffsetTD = TDindex;
	// 	var colorCounter = 0;
	// 	for (var i = TRindex; i < TRindex + 4; i++) {
	// 		var currentDIVinDIAGONAL = mark.parents("tbody").find("tr").eq(i).find("td").eq(indexOffsetTD).find("div");
	// 		if (currentDIVinDIAGONAL.css("background-color") == color) {
	// 			console.log(currentDIVinDIAGONAL);
	// 			colorCounter += 1;
	// 			if (colorCounter == 4) {
	// 				alert("Wygrał " + winner + "\nTeraz rozpocznie się nowa runda\nAby zagrać nowymi postaciami wybierz NEW GAME");
	// 				wyczysc();
	// 			}
	// 		}
	// 		indexOffsetTD += 1;
	// 	}
	// }
	// if (3 <= TDindex <= 6) {
	// 	for (var i = TRindex; i < TRindex + 4; i++) {
	//
	// 	}
	// }

}

function putMark(){
	if (numPlayers == 1) {
		alert("Opcja w trakcie rozwoju");
	} else {
		if ((moveCounter % 2) != 0) {
			// Logika kolorowania najniższego wolnego pola poprzez kliknęcie kolumny.
			// Do zmiennej currentTdIndex przypisywany jest index klikniętego pola DIV (nie kolumny) z kolekcji elementów TD których rodzicem jest wiersz tabeli TR.
			// Do zmiennej rowQty przypisana jest ilość wierszy TR występująca w naszej tabeli.
			// Następnie iterujemy przez wszystkie wiersze od samoego dołu, ponieważ kolory będą umieszczane od samego dołu jeżeli pole jest wolne.
			// Z każdym przebiegiem pętli do zmiennej div przypisywane jest pole kolumny w którą kliknęnlismy i najpierw od pola na samym dole.
			// Następnie jest sprawdzany kolor tła pola, jezeli jest on koloru rgb(220, 220, 220) (czyli szare) to stawiany jest kolor niebieski lub czerwony. I pętla jest przerywana.
			// Jeżeli pole jest innego koloru niż szary czyli niebieske lub czerwone to pętla przechodzi do następnej iteracji.
			// I potem sprawdzane jest pole następne w góre kolumny.
			// Z każdym przebiegiem pętli wywoływana jest funkcja checkWinner sprawdzająca czy postawiony znak jednocześnie daje zwycięstwo któremuś z graczy.
			// W funkcji przekazywane są nastepujące parametry:
			// $(this) - odwołanie do klikanego elementy
			// currentTdIndex - aktualny indeks elementu TD w wierszu
			// currentTrIndex - aktualny indeks wiersza
			// color - aktualny kolor stawiany w polu
			var currentTdIndex = $(this).parents("tr").find("td").index($(this).parent());
			var rowQty = $(this).parents("tbody").find("tr").length;
			var blue = "rgb(0, 0, 255)"
			for (var currentTrIndex = rowQty - 1; currentTrIndex >= 0; --currentTrIndex) {
				var div = $(this).parents("tbody").find("tr").eq(currentTrIndex).find("td").eq(currentTdIndex).find("div");
				if (div.css("background-color") == "rgb(220, 220, 220)") {
					div.css("background-color",blue);
					checkWinner($(this),currentTdIndex, currentTrIndex, blue);
					break;
				}
			}
		} else {
			var currentTdIndex = $(this).parents("tr").find("td").index($(this).parent());
			var rowQty = $(this).parents("tbody").find("tr").length;
			var red = "rgb(255, 0, 0)"
			for (var currentTrIndex = rowQty - 1; currentTrIndex >= 0; --currentTrIndex) {
				var div = $(this).parents("tbody").find("tr").eq(currentTrIndex).find("td").eq(currentTdIndex).find("div");
				if (div.css("background-color") == "rgb(220, 220, 220)") {
					div.css("background-color",red);
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
