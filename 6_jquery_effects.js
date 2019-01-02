////////////////////////////
////////////////////////////
// Efekty uzyskiwane za pomocą jQuery

// jQuerty udostepnia nam kilka ciekawych metod do tworzenia pomocnych efektów
// oraz animacji elementów HTML na których zostały wywołane.

////////////////////////////
////////////////////////////
// Metody do wyśwletlania i ukrywania elementów HTMl:

////////////////////////////
// Metod do pokazywania i ukrywania elementów poprzez animacje:
// - od lewej do prawej (wyświetlanie elementów)
// - od prawej do lewej (ukrywanie elementów)
.hide() / .show() // metoda ta pozwala ukryć / wyświetlić element HTMl na którym została wywołana.
// Jeżeli wywołamy tą metodę bez żadnych argumentów to element po prostu zniknie / pokaże się w sposób natychmiastowy.
// bez widocznego przejścia z lewej do prawej bądź na odwrót.
// Jednak metody ta przyjmuje dwa argumenty w celu stworzneia animacji:
.hide(speed, callback) / .show(speed, callback)
// speed - określa szybkość ukrywania / wyświetlania elementu. I możemy to okreslić za pomocą:
// 	- milisekund
//  - słówka "slow"
//  - słówka "fast"
// callback - opcjonalny parametr wywołania zwrotnego. Jest to funkcja która ma zostać
//            wywołana zaraz po zakończeniu działania metody .hide() bądź .show().
//            W tym miejscu piszemy nazwę funckji (odwołanie do niej) bądź kod źródłowy wraz z kodem który
//            ma się wykonać po działaniu .hide() bądź .show().
// Przkład 1:
$("#hideShowDIV1 button").click(function(){
	switch ($(this).attr("id").slice(-1)) {
		case "1":
			$("#hideShowDIV1").hide("fast", function(){
				alert("z lewej do prawej")
			});
			break;
		case "2":
			$("#hideShowDIV1").fadeout("slow", function(){
				alert("znieknięcie")
			});
			break;
		case "3":
			$("#hideShowDIV1").hide(3000, function(){
				alert("upssss, czyżbyś dał się nabrać ???")
			});
			break;
	};
}); // dość ekstremalny przykład. Trzy przyciski zostały umieszczone w elemencie
// DIV o id="hideShowDIV1". Za pomocą metody dostepowej jQuery ($("#hideShowDIV1 button"))
// do każdego przycisku dodajemy metodę click() z funkcją. W funkcji tej najpierw
// pobieramy ostatni symbol z ID przycisku który klikniemy ($(this).attr("id").slice(-1)).
// Każdy z tych trzech przycisków ma inne ID różniące się ostatnim symbolem,
// odpowidnieo ...1, ...2, ...3.
// Pobranie ostatniego symoblu posłuży do obsługi konstrukcji SWITCH.
// W zależności od tego który porzycis klikniemy taka zostanie uruchomiona funkcja z metodą
// .hide(). Aby przedstawić działanie argumentów metody .hide() mamy "fast", "slow", i
// w ostatnim przypakdu wartość wyrażoną w milisekundach.
// Bardzo podoba mi się sposób w jaki została skonstruowany ten przykład. To znaczy, że jest
// pobierana wartość ID przycisku który naciskamy. Nastepnie za pomocą SWITCH wybieramy przypadek
// który chcemy aby dany przycisk dotyczył.
// Przykład 2:
$("#hideShowButton4").click(function(){
	$("#hideShowDIV1").hide();
}); // Po kliknięciu w przycisk o id="hideShowButton4" element HTML o id="hideShowDIV1"
// zostanie ukryty w sposób natychmiastowy.
// Przykład 3:
$("#hideShowButton5").click(function(){
	$("#hideShowDIV1").show("slow");
}); // Po kliknięciu w przycisk o id="hideShowButton5" element HTML o id="hideShowDIV1"
// zostanie pomału wyśweitlony. Ponieważ użyliśmy argumentu "slow" w metodzie .slow().

.toggle() // metoda ta łączy w sobie metody .hide() i .show() w jednej metodzie. Innymi słowy WŁĄCZ/WYŁĄCZ
// Za pomocą tej jednej metody możemy ukrywać i wyśweitlać element HTML na którym została wywołana.
// Metoda ta podobnie jak te powyższe może być wywołana bez argumentów. Wówczas od razu element HTML zostanie
// ukryty bądź wyświetlony. W zależności od tego czy najpierw był widoczny czy nie.
// Podobnie jak powyższe metody ona też przyjmuje dwa argumenty w celu stworzneia animacji:
.toggle(speed, callback)
// Argumenty działają tak samo jak w przypadku .hide() i .show() więc nie będę opisywać.
// Na przykład 1:
$("#toggleButton1").click(function(){
	$("#hideShowDIV1").toggle(1000);
}); // Po kliknięciu w przycisk o id="toggleButton1" element HTML o id="hideShowDIV1"
// zostanie ukryty w sposób natychmiastowy. Jeżeli ponownie klikniemy w tej przycisk to element
// zostanie wyświetlony natychmiast.
// Na przykład 2:
$("#toggleButton2").click(function(){
	$("#hideShowDIV1").toggle(1000, function(){
		$(this).toggle(1000);
	});
}); // Po kliknięciu w przycisk o id="toggleButton2" element HTML o id="hideShowDIV1"
// zostanie najpierw ukryty (bądź odkryty) z animacją trwającą 1 sek. a następnie odrazu
// odkrywy (bądź ukryty) również z animacją trwającą 1 sek. Dzieje się tak dlatego, że
// w argumencie "callback" pierwszej metody .toggle() użyliśmy ponownie metody .toggle()
// która spowoduje efekt odwrotny do wcześniejszego.

////////////////////////////
// Metod do pokazywania i ukrywania elementów poprzez animacje:
// - pojawianie (wyświetlanie elementów)
// - zanikanie (ukrywanie elementów)
.fadeOut() / .fadeIn() // metody bliźniacze do .hide() i .show(). Róznią sie jedynie sposobem
// animacji ukrywania i wyświetlania elementów.
// Tak samo jak wprzypadku .hide() i .show() metody .fadeOut() i .fadeIn() można
// wywołać z argumentami bądź bez. Z tym, że bez argumentu efekt pojawiania się bądź znikania będzie widoczny.
// Bo w przypadku metod .hide() i .show() efekt z lewej do prawej bądź odwrotnie będzie niewidoczny.
// Metoda z argumentami:
.fadeOut(speed, callback) / .fadeIn(speed, callback)
// Argumenty działają tak samo jak w przypadku .hide() i .show() więc nie będę opisywać.
// W szystkie przykłady są bliźniacze do .hide() .show() więc nie ma co opisywać.

.fadeToggle() // metoda bliźniacze do .toggle(). Rózni sie jedynie sposobem
// animacji ukrywania i wyświetlania elementów.
// Tak samo jak wprzypadku .toggle() metodę .fadeToggle() można
// wywołać z argumentami bądź bez. Z tym, że bez argumentu efekt pojawiania się bądź znikania będzie widoczny.
// Metoda z argumetnami:
.fadeToggle(speed, callback)
// Argumenty działają tak samo jak w przypadku .hide() i .show() więc nie będę opisywać.
// W szystkie przykłady są bliźniacze do .hide() .show() więc nie ma co opisywać.

.fadeTo(speed, opacity, callback) // metoda ta jest rozwinięciem metody .fadeToggle() o dodatkowy argument:
// opacity - argument ten określamy w zakresie 0 do 1, np.: 0.79. Umożliwia on ustawienie stopnia
//           wyświetlenia elementu. Wartość 0 oznacza całkowite zniknięcie.
//           Wartość 1 oznacza całkowite pojawienie się elementu.
//           Wszelkie wartości pośrednie (między 0 a 1) ustawiamy jeżeli chcemy aby element znikną / pojawił się
//           tylko do okreslonego momentu. Po protu był widoczny w okreslonym procencie.
//           To co zostanie wykonane czyli pojawienie się bądź zniknięcie elementu zależy od tego
//           w jakim stanie był element na poczatku. Widoczny czy niewidoczny.
// Uwaga !!!
// Jeżeli element jest widoczny, nawet w zakresie 0.5 (50%) a na nim znajdują się jakieś inne elementy
// aktywne to możemy z nich korzystać.
// Na przykład:
$("#fadeToButton1").click(function(){
	$("#hideShowDIV1").fadeTo(1000, 0.5);
}); // Po kliknięciu w przycisk o id="fadeToButton1" element HTML o id="hideShowDIV1"
// zniknie (bądź pojawi, to zależy czy wcześniej był widoczny czy nie) się do poziomu 50% jego widoczności.

////////////////////////////
// Metod do pokazywania i ukrywania elementów poprzez animacje:
// - rozwijanie (wyświetlanie elementów)
// - zwijanie (ukrywanie elementów)
.slideUp() / .slideDown() // metody bliźniacze do .hide() i .show(). Róznią sie jedynie sposobem
// animacji ukrywania i wyświetlania elementów.
// Tak samo jak wprzypadku .hide() i .show() metody .slideUp() i .slideDown() można
// wywołać z argumentami bądź bez. Z tym, że bez argumentu efekt pojawiania się bądź znikania będzie widoczny.
// Bo w przypadku metod .hide() i .show() efekt z lewej do prawej bądź odwrotnie będzie niewidoczny.
.slideUp(speed, callback) / .slideDown(speed, callback)
// Argumenty działają tak samo jak w przypadku .hide() i .show() więc nie będę opisywać.
// W szystkie przykłady są bliźniacze do .hide() .show() więc nie ma co opisywać.

////////////////////////////
////////////////////////////
// Animowanie elementów

// W jQuery mamy mozliwość tworzenia niestandardowych animacji związanych z
// manipulowaniem stylami CSS. Animowanie polega na uzyciu poniższej metody:
.animate({atributeCSS1:"value1", atributeCSS2:"value2",...}, speed, callback)
// Animowanie polega na tym, że w argumencie powyższej metody w nawiasach klamrowych
// podajemy właściwość CSS i jej wartość. Wartość ta będzie wartością
// końcową. Na początku element HTML ma jakąś inną wartość tej właściwości CSS.
// Czy to wynikającą z wcześniejszego formatowania CSS czy po poprostu nie ma przypisanej żadnej
// innej wartości danej właściwości czyli 0, none itd.
// A więc animacja będzie polegać na przejściu z wartości początkowej do wartości
// jaką podajemy w argumencie tej metody. W związku z tym, że to metoda do animacji
// to również posiada atrybuty:
// speed - określa szybkość animacji. I możemy to okreslić za pomocą:
// 	- milisekund
//  - słówka "slow"
//  - słówka "fast"
// callback - opcjonalny parametr wywołania zwrotnego. Jest to funkcja która ma zostać
//            wywołana zaraz po zakończeniu wykonywania animacji.

// Na przykład:
$("#animacjeButton1").click(function(){
	$("#animacjeP1").animate({fontSize: "25px", color: "blue"});
}); // Po kliknięciu w przycisk o id="animacjeButton1" akapit o id="animacjeP1"
// zmieni wielkość swojej czcionki z pierwotnych 5 px do 25 px oraz kolor z czerwonego
// na niebieski. Przyczym kolor się zmienia bo do kodu HTML w sekcji HEAD został dodany
// dodatkowy znacznik SCRIPT z odwołaniem sie do skryptu jQuery animująego kolory.

// UWAGA 1 !!!
// Domyślnie wszystkie elementy HTML mają ustawioną właściwość statyczną (position: static)
// i nie mogą sie przemieszczać. Aby manipulować ich pozycją i tym samym animować
// należy najpierw ustawić ich pozycję na wzgledną, stałą lub absoluitną (relative, fixed, or absolute).

// UWAGA 2 !!!
// W celu animowania róznych właściwości CSS przy pomocy metody .animate() należy pamiętać
// o tym, aby właściwości CSS które są dwuczłonowe, pisane z kreską, np.: padding-left
// musza być pisane jako "camel style" w argumencie tej metody, np.: paddingLeft.

// Uwaga 3 !!!
// Jeżeli chcemy aby animacje dotyczyły również kolorów to musimy dodać sosbny skrypt jQuery który
// odpowiada tylko za kolory. Ponieważ w podstawowym skrypcie jQuery nie ma zaimplementowanych
// reguł dotyczących animacji kolorami. W momencie kiedy nie podepniemy osobnego skryptu do kolorów to
// mimo, że w metodzie umieścimy zmiane koloru to i tak ona nie nastąpi.
// Sktrypt do kolorów:
// http://code.jquery.com/color/

// Uwaga 4 !!!
// Możliwe jest ustawianie wartości właściwości CSS dotyczących wielkości jako przyrostowe
// względem wartości poczatkowej. Na przykład mamy wielkość elementu DIV ustawionego na:
// height: 100 px
// width: 100 px
// I chcemy, aby jego wielko wzrostał o 200 px w każdym kierunku to w argumentcie metody .animate()
// przy właściwościach rozmiaru podajemy jako "+=100ox". Wówczas to oznacza, że jego wielkość wzrośnie o
// 100 px. Po prostu do wcześniej określonej wielkości zostanie dodana wartość którą podajemy w argumencie metody
// Na przykład:
$("#animacjeButton2").click(function(){
	$("#anmateDIV1").animate({
		height: "+=200px",
		width: "+=200px",
	}, "fast");
}); // Po nacisnięciu przycisku o id="animacjeButton2" wilekość DIVa o id="anmateDIV1"
// zwiększy sie o 200 px w każdym kierunku. I za kazdym razem jak naciśniemy przycisk to wielkość
// tego DIVa będzie rosnąć.


// Uwaga 5 !!!
// Metoda .animate() umożliwia również dodanie do elementu HTML animacje o których
// wcześniej się uczyliśmy jako o osobnych metodach pozwalających na pokazywanie i ukrywanie
// elementów HTML. W tej metodzie do animacji pokazywania i ukrywnia jak i przełączania używamy
// właściwości, atrybutu CSS hight do której przypisujemy wartości: show - pokaż, hide - ukryj, toggle - włącz/wyłącz.
// Jednak działanie tych animacji jest inne niż działanie metod o tych samych nazwach
// wywołanych na elemencie HTML. Na temat tych metod uczyliśmy się wcześniej.
// Przykłady:
$("#animacjeButton3").click(function(){
	$("#animacjeP2").animate({
		height: "hide"
	});
}); // Po kliknięciu w przycisk o id="animacjeButton3" akapit o id="animacjeP2"
// zostanie ukryty

$("#animacjeButton4").click(function(){
	$("#animacjeP2").animate({
		height: "show"
	});
}); // Po kliknięciu w przycisk o id="animacjeButton4" akapit o id="animacjeP2"
// zostanie wyświetlony, jeżeli wcześniej został ukryty

$("#animacjeButton5").click(function(){
	$("#animacjeP2").animate({
		height: "toggle"
	});
}); // Po kliknięciu w przycisk o id="animacjeButton5" akapit o id="animacjeP2"
// zostanie wyświetlony lub ukryty. W zależności od jego stanu wcześniejszego

////////////////////////////
// Kolejkowanie animacji

// Domyślnie jQuery stosuje kolejkowanie animacji.
// Oznacza to, że jeżeli wywołamy po sobie kilka animacji na jednym obiekcie
// to następna animacja nie zacznie się dopóki nie skończy się poprzednia.
// To samo dotyczy wywołania jednej animacji na jednym obiekcie i drugiej animacji
// na drugim obiekcie. Jedna animacja musi się skończyć aby mogła zacząć się kolejna.
// Na przykład:
$("#animacjeButton6").click(function(){
	var divElement = $("#animateDIV2")
	divElement.animate({backgroundColor: "fuchsia"},1);
	divElement.animate({width: "250px", opacity: "0.5"},1500);
	divElement.animate({height: "200px", opacity: "0.5"},1500);
	divElement.text("GEJ").css("color", "yellow");
	divElement.animate({fontSize: "5em"}, 3000);
	divElement.animate({height: "100px", opacity: "1"},1500);
	divElement.animate({width: "150px", opacity: "1"},1500);
}); // Po kliknięciu w przycisk o id="animacjeButton6" najpier zostanie wykonana metoda:
divElement.text("GEJ").css("color", "yellow");
// Następnie zostaną uruchomione na elemencie o id="animateDIV2" animacje jedna po drugiej.
// To znaczy, że jak jedna się skończy to zacznie się druga w kolejności.
// Animacje nie mogą się wykonywać jednocześnie.
// Napierw zostanie zwiększona szerokość, potem wysokość, następnie zostanie zwiększona wielkość tekstu
// potem zostanie zmniejszona wysokość , a na koniec zmniejszona szerokość.

////////////////////////////
// Zatrzymanie trwającej animacji

// W jQuery mamy możliwość zatrzymania trwającej animacji. Słuzy do tego metoda .stop()
// Polecenie to przyjmuje dwa opcjonalne parametry:
.stop(stopAll,goToEnd);
// stopAll - określa on czy kolejka animacji powinna być wyczyszczona.
//           FALSE oznacza, że tylko aktywna animacja zostanie zatrzymana
//           umozliwiając późniejsze wykonanie animacji w kolejce.
//           TRUE oznacza, że aktualna animacja zostanie zatrzymana i żadna kolejna
//           animacja nie zostanie uruchomiona
// goToEnd - okresla on czy natychmiast zakończyć aktualną animację, wyświetlic jej efekt końcowy
//           i wyczyścic kolejkę animacji.
//           FALSE oznacza, że aktualna animacja zostanie wstrzymana i kolejka animacji wyczyszczona
//           TRUE oznacza, że aktualna animacja zostanie zakończona z natychmiastowym wyświetleniem
//           jej wyniku oraz kolejka animacji zostanie wyczyszczona.
// Na przykład:
$("#stopAnimacjiButton2").click(function(){
	$("#animateDIV2").stop(true, true);
}); // Po kliknięciu w przycisk o id="stopAnimacjiButton2" element o id="animateDIV2"
// na którym wykonywana jest animacja zostanie to aktualna animacja zakończona z natychmiastowym
// wyświetleniem jej efektu oraz wyczyszczona zostanie kolejka animacji.

////////////////////////////
// Funkcja zwrotna

// Kod JavaScript wykonywany jest wiersz po wierszu. Jendak w przypadku efektów
// kolejna linijka kodu może zostać uruchomiona nawet jeśli efekt nie został zakończony.
// Może to generować błędy. W celu przeciwdziałania temu możemy zastosować funkcję zwrotną
// która się wykona w momencie kiedy efekt się skończy. A więc zabezpieczamy się bo
// kolejny efekt czeka, aż wykona sie funkcja zwrotna. A jak ona się wykona to jesteśmy pewni,
// że i wykonał się też poprzedni efekt.

////////////////////////////
// Łańcuch zdareń

// W jQuery możemy łączyć ze sobą kilka metod i akcji wykonywanych w ramach jednej instrukcji.
// Jest to technika zwana łańcuchem, który pozwala nam uruchamiać wiele poleceń jQuery, jeden po drugim
// na tym samym elemencie HTML (elementach).

// TIP !!!
// Dzięki temu przeglądarki nie musza znajdować tego samego elementu wiele razy.

// Aby połączyć akcję, wystarczy dopisac do poprzedniej akcji kolejną po kropce.

// Na przykład:
$("#animacjeButton1").click(function(){
	$("#animacjeP1").text("Jesteś nieudacznikiem !!!").animate({fontSize: "25px", color: "blue"});
}); // Po kliknięciu w przycisk o id="animacjeButton1" za pomocą łańcucha zdarzeń
// najpierw zostanie wykonana zmiana zawrtości akapitu text() o id="animacjeP1"
// a następnie jego animacja .animate({}). I właśnie to wywołanie kilku metod, akcji po kolei
// na jednym elemencie HTML jest łańcuchem zdarzeń.

////////////////////////////
// Filtrowanie elementów HTML

// W jQuery wystepuje metoda do filtrowania elemetów HTML, a inaczej mówiąc do
// zawężania wyników wyszukiwania spośród grupy elementów. Słuzy do tego metoda:
.filter(criteria, function(index))
// W metodzie tej określamy kryteria dzięki którym jesteśmy w stanie odsiać elementy HTML
// które nie pasują do tych kryteriów.
// Najpierw jednak metodę tę wywołujemy już na jakiejś grupie elementów.
// Metoda ta zwraca elementy które pasują do kryteriów podanych w składni metody.
// Jednak składnia metody pozwala nam na określeniej w dwojaki sposób kryteriów
// wyszukiwania elementów:

// 1. Metoda:
.filter("elementHTMLwedługodwołaniaCSS1,elementHTMLwedługodwołaniaCSS2") // w pierwszej metodzie do określenia
// kryteriów wyszukiwania spośród grupy elementów podajemy odowłania jakie stosujemy
// w plikach CSS. Po prostu podajemy "#" albo "." w zależności do tego czy odwołujemy się
// do elementu o konkretnym ID bądź o konkretnej CLASS. Oczywiście tych odwołań jest o wiele więcej.
// Na stronach w3school.com znajdziemy wiele kobinacji selektorów CSS.
// Jeżeli chcemy użyć kilku odwołań CSS podajemy je po prostu po przecinku.

// Na przykład 1:
$("#filterButton1").click(function(){
	$("#filterLI li").filter("#filterID").css("backgroundColor", "yellow");
}); // Po kliknieciu w przycisk o id="filterButton1" najpierw odwołujemy się do grupy podpunktów "LI"
// należących do elementu o id="filter1". Następnie za pomocą metody .filter() spośród tych
// elementów "LI" wcześniej wyselekcjonowanych odwołujemy się do elementu zawierającego
// id="filterID". Po prostu metoda ta zwraca nam tylko ten jeden element.
// A następnie za pomocą metody .css() nadajemy mu formatowanie.
// Na przykład 2:
$("#filterButton2").click(function(){
	$("#filterLI li").filter("#filterID, .filterKlasa").css("backgroundColor", "yellow");
}); // Przykład drugi jest bardzo podobny do przykładu pierwszego.
// Jednak w przykładzie drugim żyliśmy dwóch odwołań CSS jedno po drugim po przecinku.

// 2. Metoda:
.filter(function(index){return $(this).text() == "teskt" && $(this).attr("id") == "id" })
// w drugiej metodzie, wykorzystującej funckcję, interujemy po grupie wszystkich elementów HTML
// na których metoda ta została wywołana i na każdym elemencie z osobna uruchamiamy funkcję zapisaną wewnątrz metody.
// Jeżeli funkcja ta zwróci wartość TRUE wówczas element na którym została wywołana zostaje zachowany do grupy elementów
// odfiltrowanych.
// Index - oznacza pozycję elementu w zestawie.

// Na przykład:
$("#filterButton3").click(function(){
	$("#filterLI li").filter(function(){return $(this).text() == "drugi" && $(this).attr("class") == "filterKlasa" }).css("backgroundColor", "yellow");
}); // Po kliknieciu w przycisk o id="filterButton3" najpierw odwołujemy się do grupy podpunktów "LI"
// należących do elementu o id="filter1". Następnie za pomocą metody .filter() wykorzystując funkcję
// iterujemy po tych elementach. W iterowania sprawdzamy za pomocą tej funkcji czy aktualnie iterowany
// element zawiera tekst równy "drugi" oraz czy atrybut class tego elementu zawiera wartość "filterKlasa".
// W momencie kiedy dla iterowanego elementu powyższe warunki się zgadzają to element ten jest zwracany i następnie
// za pomocą metody .css() nadajemy mu formatowanie.


// Ciekawe wykorzystania filtrowania elementów:
$("#ciekaweFiltrowanieInput").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$("#ciekaweFiltrowanieDiv *").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	});
}); // Używamy jQuery do przechodzenia przez kolejne wszystkie (*) elementy HTML DIVa (#ciekaweFiltrowanieDiv),
// aby sprawdzić czy elementy HTML zawierają wartości tekstowe pasujące do wartości pola tekstowego do którego
// wpisujemy sprawdzaną frazę. Metoda .toggle() ukrywa elementy (display:none) które nie pasują do wyszukiwania.
// Metoda .toLowerCase() służy do konwersji tekstu na małe litery co powoduje, że wyszukiwanie nie jest wrażliwie
// na wpisanie dużych liter.
