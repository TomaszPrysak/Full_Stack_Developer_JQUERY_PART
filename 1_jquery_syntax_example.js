$(function() {

	// Funkcje dotyczące rozdziału: "Metody dostepowe do elementów HTML"

	$("button").eq(0).click(function(){
		$("p").eq(1).text("Wjeżdża jQuery :D");
	});

	$("button").eq(1).click(function(){
		$("#p1").text("Dżej Dżej... Okocza xD");
	});

	$("button").eq(2).click(function(){
		$(".klasa1").eq(2).text("diDżejka xP");
	});

	// Funkcje dotyczące rozdziału: "Odwołania do kolekcji elementów HTML"

	$("button").eq(3).click(function(){
		var x = $("td").eq(4).text();
		$("#kolekcje1").text(x);
	});

	$("button").eq(4).click(function(){
		var x = $("td").first().text();
		$("#kolekcje2").text(x);
	});

	$("button").eq(5).click(function(){
		var x = $("td").last().text();
		$("#kolekcje3").text(x);
	});

})
