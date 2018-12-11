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

	// // Zwracanie zawartości - Get / Ustawianie zawartości - Set

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

	// // Dodawanie nowych elementów, zawartości - Add

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

	$("#porownanieADDHTMLButton2").click(function(){
		var porownanie = "<b>Głową </b>"
		$("#porownanieADD2").before(porownanie)
	})

	$("#porownanieADDjQueryButton").click(function(){
		var porownanie = $("<li></li>").text("Zostałem utworzony z jQuery");
		var text = "Już nie jestem pusta ... xD";
		$("#porownanieADD").text(text).append(porownanie)
	})

	$("#porownanieADDjQueryButton2").click(function(){
		var porownanie = $("<i></i>").text("ten jebany ");
		$("#porownanieADD2").before(porownanie)
	})

	$("#porownanieADDdomButton").click(function(){
		var porownanieElement = document.createElement("li");
		var porownanieText = document.createTextNode("Zostałem utworzony z HTML DOM - przypomocy .createTextNode -> .appendChild");
		porownanieElement.appendChild(porownanieText);
		// porownanieElement.innerHTML = "Zostałem utworzony z HTML DOM - przy pomocy .innerHTML"
		var text = "Już nie jestem pusta ... xD"
		$("#porownanieADD").text(text).append(porownanieElement);
	})

	$("#porownanieADDdomButton2").click(function(){
		$("#porownanieADD2").append(" ");
		var porownanieElement = document.createElement("u");
		var porownanieText = document.createTextNode(" przebiłem !!!");
		porownanieElement.appendChild(porownanieText);
		// porownanieElement.innerHTML = " przebiłwm !!!"
		$("#porownanieADD2").after(porownanieElement);
	})

	$("#porownanieADDManyArg").click(function(){
		var newElementHTML = "<li>Zostałem utworzony z HTML</li>";
		var newElementjQuery = $("<li></li>").text("Zostałem utworzony z jQuery");
		var newElementDOM = document.createElement("li");
		newElementDOM.innerHTML = "Zostałem utworzony z HTML DOM - przy pomocy .innerHTML";
		var text = "Już nie jestem pusta ... xD"
		$("#porownanieADD").text(text).append(newElementHTML, newElementjQuery, newElementDOM);
	});

	$("#porownanieADDManyArg2").click(function(){
		var newElementHTML = "<b>Głową (HTML) </b>";
		var newElementjQuery = $("<i></i>").text("ten jebany (jQuery) ");
		$("#porownanieADD2").append(" ");
		var newElementDOM = document.createElement("u");
		newElementDOM.innerHTML = "przebiłem !!! (DOM)"
		$("#porownanieADD2").before(newElementHTML, newElementjQuery);
		$("#porownanieADD2").after(newElementDOM);
	});

	$("#dodajAkapitPrzedButton").click(function(){
		$("#dodajPrzedPo").before($("<p></p>").text("Na obrazku poniżej można zaobserwować radosną, a tym samym pewną postawe naszego wodza podczas negocjacji granic po II Wojenie Światowej. Cały naród raduje się razem z nim !!! Hip Hip hurra Jarku !!!"));
	});

	$("#dodajAkapitPoButton").click(function(){
		$("#dodajPrzedPo").after($("<p></p>").text("Czego drzesz ryja Jarku !!!"));
	});

	// // Usuwanie elementów bądź ich zawartości - Remove

	$("#wymazListeMarzeButton").click(function(){
		$("#wymazListeMarzen").remove();
		alert("JESTEŚ NIEUDACZNIKIEM !!! A TACY JAK TY NIE MAJĄ MARZEŃ - GIŃ !!!");
	});

	$("#wymazElementListyMarzeButton").click(function(){
		$("#wymazDziewczyne").remove();
		alert("JESTEŚ NIEUDACZNIKIEM !!! A TAKIMI JAK TY ŻADNA DZIEWCZYNA SIĘ NIE ZAINTERESUJE - GIŃ !!!")
	});

	$("#wymazElementyListyMarzeButton").click(function(){
		$("li").remove("#wymazDziewczyne, #wymazDom, #wymazBMW");
		alert("JESTEŚ TAK ŻAŁOSNY, ŻE AŻ MI CIĘ SZKODA. I NA PEWNO NIE ZASŁUGUJESZ NA DOM POD WARSZAWĄ W KTÓRYM BĘDZIESZ MIESZKAĆ ZE SWOJĄ DZIEWCZYNĄ I DOJEŻDŻAC DO PRACY BMW SERIE2. MOTOCYKL MOŻESZ SOBIE MIEĆ. I TAK NIKOMU NIE ZAIMPONUJESZ. WIEĆ CHOCIAŻ POJEŹDZIJ SOBIE MOTOCYKLEM W TYM MARNYM ŻYCIU !!!")
	});

	$("#wymazMojaZawartoscNekrologButton").click(function(){
		$("#wymazMojaZawartoscNekrolog").empty();
	});

	// Manipulowanie stylami CSS

	// // dodawania klas

	$("#dodajKlase1Button").click(function(){
		$("#dodajKlase1DIV").addClass("dodajKlase1");
		$("#dodajKlase2DIV").addClass("dodajKlase2");
		$("#dodajKlase2DIV p").addClass("dodajKlase3");
	});

	$("#dodajKlase2Button").click(function(){
		$("#dodajKlase3DIV h3, #dodajKlase3DIV h4").addClass("dodajKlase4");
	});

	$("#dodajKlase3Button").click(function(){
		$("#dodajKlase4P").addClass("dodajKlase5 dodajKlase6");
	});

	// // usuwanie klas

	$("#usunKlase1Button").click(function(){
		$("#usunKlase1DIV").removeClass("usunKlase1");
	});

	$("#usunKlase2Button").click(function(){
		$("#usunKlase2DIV h3, #usunKlase2DIV p").removeClass("usunKlase2");
	});

	$("#usunKlase3Button").click(function(){
		$("#usunKlase3P").removeClass("usunKlase3 usunKlase4");
	});

	// // włącz / wyłącz klase

	$("#przelaczKlase1Button").click(function(){
		$("#przelaczKlase1DIV").toggleClass("przelaczKlase1");
		$("#przelaczKlase2DIV").toggleClass("przelaczKlase2");
		$("#przelaczKlase2DIV p").toggleClass("przelaczKlase3");
	});

	// // ustawianie właściwości CSS

	$("#wezWlasciwoscCSSButton").click(function(){
		alert("Kolor przypisany do właściwości 'color' akapitu to: " + $("#wezWlasciwoscCSS").css("color"));
	});

	$("#wstawWlasciwoscCSSButton").click(function(){
		$("#wstawWlasciwoscCSS").css("color","Chartreuse");
	});

	$("#wstawKilkaWlasciwosciCSSButton").click(function(){
		$("#wstawKilkaWlasciwosciCSS").css({
			"background-color":"black",
			"color":"white"
		});
	});

	// metody dimensions

	// // zwracanie wartości wymiarów

		$("#dimensionReturnWidthHeighButton1").click(function(){
			var x = $("#dimensionDIV1").width();
			var y = $("#dimensionDIV1").height();
			var text = "Szerokość elementu wynosi: " + x + "</br>";
			text += "Wysokość elementu wynosi: " + y;
			$("#dimensionDIV1").html(text);
		});

		$("#dimensionReturnWidthHeighButton2").click(function(){
			var x = $("#dimensionDIV1").innerWidth();
			var y = $("#dimensionDIV1").innerHeight();
			var text = "Szerokość elementu wynosi: " + x + "</br>";
			text += "Wysokość elementu wynosi: " + y;
			$("#dimensionDIV1").html(text);
		});

		$("#dimensionReturnWidthHeighButton3").click(function(){
			var x = $("#dimensionDIV1").outerWidth();
			var y = $("#dimensionDIV1").outerHeight();
			var text = "Szerokość elementu wynosi: " + x + "</br>";
			text += "Wysokość elementu wynosi: " + y;
			$("#dimensionDIV1").html(text);
		});

		$("#dimensionReturnWidthHeighButton4").click(function(){
			var x = $("#dimensionDIV1").outerWidth(true);
			var y = $("#dimensionDIV1").outerHeight(true);
			var text = "Szerokość elementu wynosi: " + x + "</br>";
			text += "Wysokość elementu wynosi: " + y;
			$("#dimensionDIV1").html(text);
		});

		// // ustawianie wartości wymiarów

		$("#dimensionReturnWidthHeighButton5").click(function(){
			$("#dimensionDIV2").width(400);
			var x = $("#dimensionDIV2").width();
			$("#dimensionDIV2").height(200);
			var y = $("#dimensionDIV2").height();
			var text = "Szerokość elementu wynosi: " + x + "</br>";
			text += "Wysokość elementu wynosi: " + y;
			$("#dimensionDIV2").html(text);
		});

		$("#dimensionReturnWidthHeighButton6").click(function(){
			$("#dimensionDIV2").innerWidth(400);
			var x = $("#dimensionDIV2").innerWidth();
			$("#dimensionDIV2").innerHeight(200);
			var y = $("#dimensionDIV2").innerHeight();
			var text = "Szerokość elementu wynosi: " + x + "</br>";
			text += "Wysokość elementu wynosi: " + y;
			$("#dimensionDIV2").html(text);
		});

		$("#dimensionReturnWidthHeighButton7").click(function(){
			$("#dimensionDIV2").outerWidth(400);
			var x = $("#dimensionDIV2").outerWidth();
			$("#dimensionDIV2").outerHeight(200);
			var y = $("#dimensionDIV2").outerHeight();
			var text = "Szerokość elementu wynosi: " + x + "</br>";
			text += "Wysokość elementu wynosi: " + y;
			$("#dimensionDIV2").html(text);
		});

		$("#dimensionReturnWidthHeighButton8").click(function(){
			$("#dimensionDIV2").outerWidth(400);
			var x = $("#dimensionDIV2").outerWidth(true);
			$("#dimensionDIV2").outerHeight(200);
			var y = $("#dimensionDIV2").outerHeight(true);
			var text = "Szerokość elementu wynosi: " + x + "</br>";
			text += "Wysokość elementu wynosi: " + y;
			$("#dimensionDIV2").html(text);
		});

	// Funkcje dotyczące rozdziału: "Węzły i relacje między nimi"

	// // Ancestor

	$("button").eq(54).click(function(){
		console.log("test");
		$("#wezly1").parent().css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(55).click(function(){
		$("#wezly1").parents().css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(56).click(function(){
		$("#wezly1").parents("ul").css({"border":"2px solid red", "color": "red"});
	});

	$("button").eq(57).click(function(){
		$("#wezly1").parentsUntil("div").css({"border":"2px solid red", "color": "red"});
	});

	// // Descendant

	$("button").eq(58).click(function(){
		$(".descendants").children().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(59).click(function(){
		$(".descendants").find("span").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(60).click(function(){
		$(".descendants").find("*").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(61).click(function(){
		$(".descendants").find("p.second").css({"border":"2px solid red", "color": "red"})
	})

	// // Siblings

	$("button").eq(62).click(function(){
		$(".siblings h2").siblings().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(63).click(function(){
		$(".siblings h2").siblings(".siblings h6").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(64).click(function(){
		$(".siblings h3").next().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(65).click(function(){
		$(".siblings h3").nextAll().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(66).click(function(){
		$(".siblings h3").nextUntil(".siblings p").css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(67).click(function(){
		$(".siblings h3").prev().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(68).click(function(){
		$(".siblings h3").prevAll().css({"border":"2px solid red", "color": "red"})
	})

	$("button").eq(69).click(function(){
		$(".siblings h3").prevUntil(".siblings p").css({"border":"2px solid red", "color": "red"})
	})

	// // Funkcje dotyczące rozdziału: "Zdarzenia"

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

	// Efekty uzyskiwane za pomocą jQuery

	// // .hide() / /show()

	$("#hideShowDIV1 button").click(function(){
		switch ($(this).attr("id").slice(-1)) {
			case "1":
				$("#hideShowDIV1").hide("fast", function(){
					alert("z prawej do lewej")
				});
				break;
			case "2":
				$("#hideShowDIV1").fadeOut("slow", function(){
					alert("zniknięcie")
				});
				break;
			case "3":
				$("#hideShowDIV1").slideUp(3000, function(){
					alert("zwinięcie")
				});
				break;
		};
	});

	// // .hide() / /show()

	$("#hideShowButton4").click(function(){
		$("#hideShowDIV1").hide();
	});

	$("#hideShowButton5").click(function(){
		$("#hideShowDIV1").show("slow");
	});

	$("#toggleButton1").click(function(){
		$("#hideShowDIV1").toggle(1000);
	});

	$("#toggleButton2").click(function(){
		$("#hideShowDIV1").toggle(1000, function(){
			$(this).toggle(1000);
		});
	});

	// // .fadeOut() / .fadeIn()

	$("#fadeOutButton1").click(function(){
		$("#hideShowDIV1").fadeOut("fast");
	});

	$("#fadeInButton1").click(function(){
		$("#hideShowDIV1").fadeIn(1500);
	});

	$("#fadeToggleButton1").click(function(){
		$("#hideShowDIV1").fadeToggle(1000);
	});

	$("#fadeToButton1").click(function(){
		$("#hideShowDIV1").fadeTo(1000, 0.5);
	});

	// // .slideUp() / .slideDown()

	$("#slideUpButton1").click(function(){
		$("#hideShowDIV1").slideUp("slow");
	});

	$("#slideDownButton1").click(function(){
		$("#hideShowDIV1").slideDown("fast");
	});

	$("#slideToggleButton1").click(function(){
		$("#hideShowDIV1").slideToggle(2500);
	});

	// // .animate()

	$("#animacjeButton1").click(function(){
		$("#animacjeP1").text("Jesteś nieudacznikiem !!!").animate({fontSize: "25px", color: "blue"});
	});

	$("#animacjeButton2").click(function(){
		$("#anmateDIV1").animate({
			height: "+=200px",
			width: "+=200px",
			left: "100px",
			borderWidth: "10px",
			borderColor: "black",
			backgroundColor: "red"
		}, "fast");
	});

})
