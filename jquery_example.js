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

	// Funkcje dotyczące rozdziału: "Manipulowanie elementami HTML DOM"

	// Zwracanie zawartości - Get / Ustawianie zawartości - Set

	$("#wezZawartoscButton").click(function(){
		alert("Zawartość akapitu to: '" + $("#wezZawartoscP").text() + "'" );
	});

	$("#zmienZawartoscButton").click(function(){
		$("#zmienZawartoscP").text("lllll - no to teraz mam równą grzyweczkę, dziękuję !!!");
	})

	$("#wezZawartoscHTMLButton").click(function(){
		alert("Zawartość akapitu to: '" + $("#wezZawartoscHTMLP").html() + "'" );
	});

	$("#zmienZawartoscHTMLButton").click(function(){
		$("#zmienZawartoscHTMLP").html("<b>JESTEM GRUBY</b>, dzięki za nakarmienie mnie !");
	});

	$("#zmienZawartoscInputButton").click(function(){
		$("#zmienZawartoscInput").val("Wisła Kraków");
	});

	$("#wezZawartoscInputButton").click(function(){
		var x = $("#wezZawartoscInput").val()
		if (x == "") {
			alert("Ponieważ nic nie wpisałeś to rozumiem, że chcesz być świnią !!! >:/");
			$("#wezZawartoscInput").val("");
		} else {
			alert("Chciałbyś być: " + x);
			$("#wezZawartoscInput").val("");
		}
	});

	$("#wezAtrybutButton").click(function(){
		alert("Strona na której są numery które padną w dużym lotku:\n" + $("#wezAtrybutA").attr("href"));
	});

	$("#zmienAtrybutButton").click(function(){
		$("#zmienAtrybutA").attr({
			"href":"http://www.plotek.pl",
			"title":"Get Free BitCoins"
		});
	});

	$("#zmienZawartoscFunkcjaButton").click(function(){
		$("#zmienZawartoscFunkcjP").text(function(i, oldText){
			alert("Stara zawartość to: " + oldText + "\nNowa zawatość to: Nowa zawartość");
			return "Nowa zawartość"
		});
	});

	$("#zmianaAtrybutuFunkcjaButton").click(function(){
		$("#zmianaAtrybutuFunkcjaA").attr("href", function(i, oldValue){
			alert("Stara wartość href to: " + oldValue + "\nNowa wartość href to: http://www.interia.pl");
			return "http://www.interia.pl"
		}).text(function(i, oldText){
			return "Interia.pl"
		});
	});

	// Dodawanie nowych elementów, zawartości - Add

	$("#dodajDoMnieButtonEnd").click(function(){
		$("#dodajDoMniePEnd").append("<b> BIAŁA GWIAZDA !!!</b>");
	});

	$("#dodajDoMnieButtonBeginning").click(function(){
		$("#dodajDoMnieOLBeginning").prepend("<li>Triumph Thruxton R</li>");
	});

	$("#porownanieADDHTMLButton").click(function(){
		var porownanie = "<li>Zostałem utworzony z HTML</li>";
		var text = "Już nie jestem pusta ... xD";
		$("#porownanieADD").text(text).append(porownanie);
	});

	$("#porownanieADDjQueryButton").click(function(){
		var porownanie = $("<li></li>").text("Zostałem utworzony z jQuery");
		var text = "Już nie jestem pusta ... xD"
		$("#porownanieADD").text(text).append(porownanie)
	})

	$("#porownanieADDdomButton").click(function(){
		var porownanieElement = document.createElement("li");
		var porownanieText = document.createTextNode("Zostałem utworzony z HTML DOM - przypomocy .createTextNode -> .appendChild");
		porownanieElement.appendChild(porownanieText);
		// porownanieElement.innerHTML = "Zostałem utworzony z HTML DOM - przy pomocy .innerHTML"
		var text = "Już nie jestem pusta ... xD"
		$("#porownanieADD").text(text).append(porownanieElement);
	})

	$("#porownanieADDManyArg").click(function(){
		var newElementHTML = "<li>Zostałem utworzony z HTML</li>";
		var newElementjQuery = $("<li></li>").text("Zostałem utworzony z jQuery");
		var newElementDOM = document.createElement("li");
		newElementDOM.innerHTML = "Zostałem utworzony z HTML DOM - przy pomocy .innerHTML";
		var text = "Już nie jestem pusta ... xD"
		$("#porownanieADD").text(text).append(newElementHTML, newElementjQuery, newElementDOM);
	});

	$("#dodajAkapitPrzedButton").click(function(){
		$("#dodajPrzedPo").before($("<p></p>").text("Na obrazku poniżej można zaobserwować radosną, a tym samym pewną postawe naszego wodza podczas negocjacji granic po II Wojenie Światowej. Cały naród raduje się razem z nim !!! Hip Hip hurra Jarku !!!"));
	});

	$("#dodajAkapitPoButton").click(function(){
		$("#dodajPrzedPo").after($("<p></p>").text("Czego drzesz ryja Jarku !!!"));
	});

	// Funkcje dotyczące rozdziału: "Węzły i relacje między nimi"

	// Ancestor

	$("button").eq(28).click(function(){
		$("#wezly1").parent().css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(29).click(function(){
		$("#wezly1").parents().css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(30).click(function(){
		$("#wezly1").parents("ul").css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(31).click(function(){
		$("#wezly1").parentsUntil("div").css({"border":"2px solid red", "color": "red"});
	});

	// Descendant

	$("button").eq(32).click(function(){
		$(".descendants").children().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(33).click(function(){
		$(".descendants").find("span").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(34).click(function(){
		$(".descendants").find("*").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(35).click(function(){
		$(".descendants").find("p.second").css({"border":"2px solid red", "color": "red"})
	})

	// Siblings

	$("button").eq(36).click(function(){
		$(".siblings h2").siblings().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(37).click(function(){
		$(".siblings h2").siblings(".siblings h6").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(38).click(function(){
		$(".siblings h3").next().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(39).click(function(){
		$(".siblings h3").nextAll().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(40).click(function(){
		$(".siblings h3").nextUntil(".siblings p").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(41).click(function(){
		$(".siblings h3").prev().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(42).click(function(){
		$(".siblings h3").prevAll().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(43).click(function(){
		$(".siblings h3").prevUntil(".siblings p").css({"border":"2px solid red", "color": "red"})
	})

	// Funkcje dotyczące rozdziału: "Zdarzenia"

	$("#kliknijMnie").click(function(){
		$(this).text("I gdzie te numery ???? Nie ma ??? buahahahah");
	})

	$("#podwojnieKliknijMnie").dblclick(function(){
		$(this).hide();
		alert("Uppppssss.... czyżby to oznaczało, że nie będzie szczęścia... a może wręcz coś przeciwnego ??? buahahahaha")
	})

	$("#najedzMnie").mouseenter(function(){
		$(this).text("łaskoczeeeeeee !!!!")
	})

	$("#zjedzZeMnie").mouseleave(function(){
		$(this).text("Dziękuję za pomoc")
	})

	$("#wcisnijMnie").mousedown(function(){
		$(this).text("Ehhhhh nie potrzafisz :(")
	})

	$("#puscMnie").mouseup(function(){
		$(this).text("Alllleeeeee ulga, teraz jestem piękny ;)")
	})

	$("#wcisnijPuscMnie").hover(function(){
		$(this).text("w mucholocie")
	},
	function(){
		$(this).text("Lata mucha...")
	})

	$("#skupSie").focus(function(){
		$(this).css({"background-color": "black", "color": "white"})
	})

	$("#rozluznijSie").blur(function(){
		$(this).css({"background-color": "white", "color": "black"})
	})

	$("#wielokrotneZdarzenia").on({
		mousedown: function(){
			$(this).css({"background-color": "red", "color": "white"});
			$(this).text("BIAŁO-CZERWONI !!!");
		},
		mouseup: function(){
			$(this).css({"background-color": "white", "color": "red"});
			$(this).text("POLSKA !!!");
		}
	});

})
