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

	$("button").eq(6).click(function(){
		$("td:lt(4)").css({background: "yellow"}); // pierwszy sposób stylizowania elementów w jQuery
	});

	$("button").eq(7).click(function(){
		$("td:gt(4)").css("background-color", "green"); // drugi sposób stylizowania elementów w jQuery
	});

	$("button").eq(8).click(function(){
		var x = $("td").not(".komorka").text();
		$("#kolekcje4").text(x);
	});

	$("button").eq(9).click(function(){
		$("td").filter(function(index){
			return index == 1 || $(this).attr("id") == "fifth";
		}).css("border", "3px double red")
	});

	// Funkcje dotyczące rozdziału: "Węzły i relacje między nimi"

	// Ancestor

	$("button").eq(10).click(function(){
		$("#wezly1").parent().css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(11).click(function(){
		$("#wezly1").parents().css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(12).click(function(){
		$("#wezly1").parents("ul").css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(13).click(function(){
		$("#wezly1").parentsUntil("div").css({"border":"2px solid red", "color": "red"});
	});

	// Descendant

	$("button").eq(14).click(function(){
		$(".descendants").children().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(15).click(function(){
		$(".descendants").find("span").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(16).click(function(){
		$(".descendants").find("*").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(17).click(function(){
		$(".descendants").find("p.second").css({"border":"2px solid red", "color": "red"})
	})

	// Siblings

})
