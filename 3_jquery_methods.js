////////////////////////////
////////////////////////////
// Manipulowanie DOM

// jQuery zaiwera zaawansowane metody do zmiany i manipulowania elementami HTML i
// ich atrybutami.

// Ponieważ, jQuery jest biblioteką JavaScript więc nie będę szczegółowo omawiać
// samej koncpecji rodzaju elementów HTML ich zawartości, atrybutów itd.
//  Więcej na ten temat znajduje się w części związanej z zagadnieniem DOM w kontekście czystego JavaScript.

// W pliku 2_jquery_syntax.js są metody dostępowe do elementów HTML , ale aby coś z nimi zrobić
// musimy wywołać na nich kolejne metody.
// Wywołujemy je tak samo jak w przypadku wywoływania metod na obiektach.
// Ponieważ jeżeli wywołamy metodę powołującą się na jakiś znacznik to staje sie on obiektem.
// Więc wówczas znowu dajemy kropkę i wpisujemy metodę która coś dokonuje z obiektem.
// Często warto przypisać do zmiennej nasz obiekt i poźniej na nim wywoływać metody jQuery HTML DOM.
// Na przykład:

var allParagraph = $("p"); // zwróci listę wszystkich akapitów występujacych na stronie.

////////////////////////////
////////////////////////////
// Zwracanie zawartości - Get / Ustawianie zawartości - Set

.text() // zwraca zawartość elementu HTML na którymn została wywołana. Dotyczy to
// tego co zostało umieszczone między znacznikami HTML. Czyli tak de facto to co jest
// wyświetlane na stronie WWW. Zwracane jest w postaci jeden do jednego, tzn.
// razem z formatowaniem.
// Na przykład:
$("#wezZawartoscButton").click(function(){
	alert("Zawartość akapitu to: '" + $("#wezZawartoscP").text() + "'" );
}); // Po kliknięciu w przycisk zostanie wyświetlone okienko w którym wyświetli
// się zawartość akapitu o id="wezZawartoscP" wraz z narzuconym formatowaniem
.text("new content") // ustawia nową zawartość elementu HTML na którym została wywołana.
// Podobnie do sytuacji ze zwracaniem zawartości, w przypadku jej zmiany też zmieniamy to
// co jest między znacznikami HTML, a więc to co jest  wyświetlane, a w związku z tym,
// że zmieniamy tylko to co jest pomiędzy znacnzikami to nie mamy możliwości dodania
// formatowania zawartości. To wykonamy za pomocą metody .html("new content")
// Na przykład:
$("#zmienZawartoscButton").click(function(){
	$("#zmienZawartoscP").text("lllll - no to teraz mam równą grzyweczkę, dziękuję !!!");
}) // Po kliknięciu w przycik akapit o id="zmienZawartoscP" zmieni swoją zawartość na
// nową.

.html() // zwraca zawartość elementu HTML na którymn została wywołana. Dotyczy to
// tego co zostało umieszczone między znacznikami HTML. Jednak w porównaniu do
// metody .text() zwracana zawartość nie jest z formatowaniem tylko w taki sposób
// w jaki została zapisana w kodzie HTML. Czyli będzie zawierać znaczniki formatujące itd.
// Ale sama zawartość nie będzie sformatowana.
// Na przykład:
$("#wezZawartoscHTMLButton").click(function(){
	alert("Zawartość akapitu to: '" + $("#wezZawartoscHTMLP").html() + "'" );
}); // Po kliknięciu w przycisk zostanie wyświetlone okienko w którym wyświetli
// się zawartość akapitu o id="wezZawartoscP" w postaci kodu HTML, czyli bez formatownaia
.html("new content with code HTML") // ustawia nową zawartość wraz z możliwością dodawania
// formatowaniem to znaczny z możliwością pisania znaczników HTML.
// Na przykład:
$("#zmienZawartoscHTMLButton").click(function(){
	$("#zmienZawartoscHTMLP").html("<b>JESTEM GRUBY</b>, dzięki za nakarmienie mnie !");
}); // Po kliknieciu w przycisk zostanie zmieniona zawartość akapitu o id="zmienZawartoscHTMLP"
// wraz z formatowaniem, tzn zawierający dodatkowe znaczniki.

.val() // zwraca zawartość z pola formularza. To co zostało wprowadzone przez użytkownika,
// w pole tekstowe formularza bądź, to co zostało wpisane w atrybucie VALUE znacznika INPUT.
// Odnosi się do atrybutu VALUE znacnzika INPTU.
// Na przykład:
$("#wezZawartoscInputButton").click(function(){
	alert("Chciałbyś być: " + $("#wezZawartoscInput").val());
}); // Po kliknięciu w przycisk zostanie wyświetlone okienko w którym wyświetli
// się zawartość wpisana do pola tekstowego o id="wezZawartoscInput", jeżeli nic
// nie zostało wpisane to będzie pusty znak.
.val("new value in INPUT tag") // ustawia nową wartość atrybutu VALUE w znacznikach INPUT
// formularza.
// Na przykład:
$("#zmienZawartoscInputButton").click(function(){
	$("#zmienZawartoscInput").val("Wisła Kraków");
}); // po kliknięciu w przycisk wartość atrybutu VALUE polA tekstowego o id="zmienZawartoscInput"
// zostanie zmieniona, zastąpiona nową.

.attr("atrybut") // zwraca wartość wskazanego w nawiasach metody atrybutu elemetnu HTML
// na którym metoda jest wywoływana.
// Na przykład:
$("#wezAtrybutButton").click(function(){
	alert("Strona na której są numery które padną w dużym lotku:\n" + $("#wezAtrybutA").attr("href"))
}); // Po kliknięciu w przycisk zostanie wyświetlone okienko w którym wyśweitli
// się wartość atrybutu HREF znacznika A znajdującego się w akapicie (p > a)
.attr("atrybut", "wartość tego atrybutu") // DOTYCZY JEDNEGO ATRYBUTU
// Ustawiamy atrybut wraz z jego wartością dla elementu HTML na którym metoda ta jest wywoływana.
.attr({
	"atrybut1": "wartość atrybutu1",
	"atrybut2": "wartośc atrybutu2"
	itd...
}) // DOTYCZY KILKU ATRYBUTÓW
// Ustawiamy kilka atrybutów wraz z ich wartościami dla elementu HTML na którym metoda ta jest wywoływana.
// Na przykład:
$("#zmienAtrybutButton").click(function(){
	$("#zmienAtrybutA").attr({
		"href":"http://www.plotek.pl",
		"title":"Get Free BitCoins"
	});
}); // po klinięciu na przycisk do znacznika A o id="#zmienAtrybutA" zostaną dodane,
// zmienione następujące atrybuty: HREF oraz TITLE. A wartości ich będą ustawione
// kolejno na "http://www.plotek.pl" oraz "Get Free BitCoins".

// UWAGA 1 !!!
// Metody .text(), .html() oraz .val() mają też specjalną funkcję za pomoca której
// w jednym kroku mamy mozliwoiść zwrócić starą zawartość elementu HTMl
// oraz jednocześnie ustawienie nowej zawartości tego elementu HTML.
// Na przykład:
$("#zmienZawartoscFunkcjaButton").click(function(){
	$("#zmienZawartoscFunkcjP").text(function(i, oldText){
		alert("Stara zawartość to: " + oldText + "\nNowa zawatość to: Nowa zawartość");
		return "Nowa zawartość"
	});
}); // i - indeks starej zawartości,
// oldText - zawartość elementu HTML przed zmianą.
// Nowa zawartość jest podmieniana za pomocą: return "nowa zawartość"
// W naszym przykładzie dodatkowo jeszcze wyświetlamy alert z pokazaniem, że oldText
// to stara zawartość.

// UWAGA 2 !!!
// Metoda .attr() również ma specjalną funkcję za pomocą której w jednym kroku mamy
// możliwość zwrócić starą wartość wyszczególnionego atryutu danego elementu HTML
// oraz jednocześnie ustawienie nowej wartości tego atrybutu.
// na przykład:
$("#zmianaAtrybutuFunkcjaButton").click(function(){
	$("#zmianaAtrybutuFunkcjaA").attr("href", function(i, oldValue){
		alert("Stara wartość href to: " + oldValue + "\nNowa wartość href to: http://www.interia.pl");
		return "http://www.interia.pl"
	}).text(function(i, oldText){
		return "Interia.pl"
	});
}); // "href" - oznaczamy jaki atrybut będziemy zmieniać
// i - indeks starej wartości atrybutu
// oldValue - wartość atrybutu przed zmianą
// Nowa wartość atrybutu jest zmieniana za pomocą: return "http://www.interia.pl"
// W naszym przykładzie jeszcze dodatkowo użylismy zmiany zawartości elementu A za pomocą
// .text(function(i, oldText){return "Interia.pl"});
// I tak samo za pomocą alertów wyświetlamy starą wartość atrybutu jak i starą zawartość A
// Bardzo fajnie widać jak możemy łączyć klika metod w jednym poleceniu.

////////////////////////////
////////////////////////////
// Dodawanie nowych elementów, zawartości - Add

// Za pomocą poprzednich metod mogliśmy zmieniać całą zawartość elementów na których były
// wywoływane. Natomiast teraz poznamy metody które dodają nową zawartość do już istniejącej.

// A dodatkowo poznamy jak dodawać nowe elementy HTML do naszej strony z wykorzystaniem jQuery.
// Szczegółowe omówienie dodawania nowych elementów za pomocą czystego JavaScript na stornie jest
// w dziale DOM_PART w pliku 2_document_object_model_methods.js.

.append("Appended text at the end") // metoda ta dodaje zawartość, tekst na KOŃCU elementu HTML (w jego WNĘTRZU) na
// na którym została wywołana.
// Na przykład:
$("#dodajDoMnieButtonEnd").click(function(){
	$("#dodajDoMniePEnd").append(" BIAŁA GWIAZDA !!!");
}); // po kliknięciu w przycisk do akapitu o id="dodajDoMniePEnd" na jego końcu dodany zostanie
// tekst. Zostanie dodany do istneijącego tekstu, a nie zastąpiony.

.prepend("Append text at the beginning") // metoda ta dodaje zawartość, tekst na POCZĄTKU elementu HTMl (w jego WNĘTRZU)
// na którym została wywołana.
// Na przykład:
$("#dodajDoMnieButtonBeginning").click(function(){
	$("#dodajDoMnieOLBeginning").prepend("<li>Triumph Thruxton R</li>");
}); // po kliknięciu w przycisk do listy o id="dodajDoMnieOLBeginning" na jego poczatku dodany zostanie
// nowy podpunkt listy.
// Warto tutaj zauważyć, że dodanie nowego elementu HTML, w tym przypadku
// nowego podpunkut listy OL nastąpiło poprostu poprzez napisanie pomiędzy znacznikami
// <li></li> treści nowego podpunku. A dokonaliśmy tego w metodzie dodającej treść. A, że treść
// była wraz z kodem HTML to dodał się nowy element HTML.

// W powyższych przykładach wstawialiśmy tylko dodatkową zawartość (tekst) bądź kod HTML z zawartością
// na początku lub na końcu istniejącego juź elementu HTML.

// Jednakże obie metody .append() oraz .prepend() mogą przyjmować niezliczoną ilość nowy elementów
// HTML jako parametry.

// Powyższe metody służą do dodawania zawartości do istniejącego już elementu HTML.
// Oczywiście będąc sprytnym można je wykorzystać też do dodawania, tworzenia nowych elemntów HTML
// poprzez podanie nowej treści bezpośrednio w znacznikach HTML.
// Do dodawania nowych elementów stworzone zostały inne metody. Które będą opisane poniżej.

.before("<tag>Same new content</tag>") // metoda ta dodaje nową zawartość, najczęściej jest to nowy element HTML,
// PRZED (POZA NIM) elementem na którym została wywołana.
// Na przykład:
$("#dodajAkapitPrzedButton").click(function(){
	$("#dodajPrzedPo").before($("<p></p>").text("Na obrazku poniżej można zaobserwować radosną... !!!"));
	}); // Po kliknięciu w przycisk o id="dodajAkapitPrzedButton" przed elementem o id="dodajPrzedPo"
// zostanie dodany nowy akapit z zawartością jaka jest w metodzie .text()

// W związku z tym, że nowy element HTML dodawany jest poza
// elementem na którym wywoływana jest metoda .before() (w przeciwieństem do metody .append() lub .prepend())
// to najczęściej stosuje się ją właśnie do tworzenia nowych elementów HTML.
// Aby dodać nowy element należy wybrać sposób jego tworznie. Jest o tym w kolejnym rozdziale.

.after("<tag>Same new content</tag>") // metoda ta dodaje nową zawartość, najczęście jest to nowy element HTML,
// PO elemencie (POZA NIM) na którym została wywołana.
// Na przykład:
$("#dodajAkapitPoButton").click(function(){
	$("#dodajPrzedPo").after($("<p></p>").text("Czego drzesz ryja Jarku !!!"));
}); // Po kliknięciu w przycisk o id="dodajAkapitPoButton" po elemencie o id="dodajPrzedPo"
// zostanie dodany nowy akapit z zawartością jako jest w metodzie .text()

// W związku z tym, że nowy element HTML dodawany jest poza
// elementem na którym wywoływana jest metoda .before() to najczęściej stosuje się ją
// właśnie do tworzenia nowych elementów HTML.
// Aby dodać nowy element należy wybrać sposób jego tworznie. Jest o tym w kolejnym rozdziale.

// Poniżej krótkie przypomnienie dodawania, tworzenia dowych elementów HTML.

/////////////
// Nowe elementy, znaczniki HTML możemy dodawać za pomocą:

// W celu zobrazowania różnic przy odawania elementów HTML różnymi sposobami, przedstawię to
// na przykładzie:

$("#porownanieADDManyArg").click(function(){
	// HTML
	$("body").append("<p>Niech moc będzie z Tobą !</p>");
	// jQuery
	$("body").append($("<p></p>").text("Niech moc będzie z Tobą !"));
	// JavaScript / DOM
	var newElementDOM = document.createElement("p");
	newElementDOM.innerHTML = "Niech moc będzie z Tobą !";
	$("body").append(newElementDOM);
})

// 1. Najprostszym sposobem tworzenia nowego elementu HTML, jest stworzenie go poprzez podanie kodu HTML.
// Po prostu w metodach .append() bądź prepend() jako argument wpisujemy cały kod HTML wraz z znacznikami elementu jaki chcemy stworzyć.
// Wówczas na końcu elementu na ktorym wywołujemy te metody zostanie dodana zawartość będąca parametrem. A, że paramter ten będzie
// zawierał cały kod HTML to zostanie utworzony nowy Element HTML.
// Na przykład:
$("body").append("<p>Niech moc będzie z Tobą !</p>");
// Powyższe spowoduje dodanie na samym końcu elementu BODY, czy de facto naszej strony nowego akapitu o treści: "Niech moc będzie z Tobą !"

// 2. Dodawanie, tworzenie nowego elementu poprzez jQuery jest mniej intuicyjne niż odwoływanie się do elementów HTML.
// Polega to w ten sposób, że zamiast odwoływać się do jakiegoś elementu bądź kolekcji elemntów
// w pierwszej części polecenia wskazujemy jaki element będziemy tworzyć, a później w metodzie odwołująccej się
// do treści tego elementu podajemy jego zawartość, treść. Ważne jest to aby rodzaj elementu jaki chcemy utworzyć podać w znacznikach z nawiasem.
// Wówczas to nam mówi, że tworzymy nowy element HTML a nie odwołujemy się do kolekcji.
// Ponieważ podając tylko tag HTML w polecenie jQuery odwołujemy się do elemetu lub do kolekcji. A my się nie odwołujemy tylko tworzymy nowy element.
// Na przykład:
$("body").append($("<p></p>").text("Niech moc będzie z Tobą !"));
// W tym przykładzie fajnie umieścilismy cały potok polecenia wewnątrz innego polecenia jQuery.
// Spowoduje to dodanie na samym końcu elementu BODY nowego akapitu o treści: "Niech moc będzie z Tobą !"

// 3. Wykorzystując czysty JavaScript wraz z elementami DOM. Metoda ta jest bardziej skomplikowana.
// Została dokładnie opisana w dziale DOM_PART w pliku 2_document_object_model_methods.js.
// Warto go sobie przeczytać, żeby dowiedzieć się o tzn. rodzajach węzłów w kontekście struktóry DOM.
// Między innym o tym, że występują różne rodzaje węzłów. To bardzo pomoże przy zrozumieniu dodawania elementów.
// Na przykład:
var newElementDOM = document.createElement("p");
newElementDOM.innerHTML = "Niech moc będzie z Tobą !";
$("body").append(newElementDOM);
// Najpierw tworzymy wirtualnie nowy akapit pod zmienną newElementDOM.
// Następnie do tego elementu dodajemy zawartość tekstową: "Niech moc będzie z Tobą !"
// Na końcu dodajemy tak stworzony akapit do elementu BODY na jego samym końcu.

////////////////////////////
////////////////////////////
// Usuwanie elementów bądź ich zawartości - Remove

// Poprzednie metody pozwalały nam dodawać zawartość do już istniejącej lub stworzyć całkowicie nowy
// element HTML wraz z zawartością.

// Natomiast teraz poznamy metody do usuwania zawartości z elementów HTML bądź usuwania cały istniejących elementów HTML.

// Szczegółowe omówienie usuwania istniejących elementów HTML za pomocą czystego JavaScript na stornie jest
// w dziale DOM_PART w pliku 2_document_object_model_methods.js.
// Ważne jest, żeby poznać koncepcie węzłów i ich typów oraz relacji między węzłami.

.remove() // metoda ta usuwa element HTMl na którym została wywołana wraz z całą jego zawartością, treścią.
// Jeżeli więc wewnątrz elementu były jakieś inne elementy HTML, czyli element ten był rodzicem dla
// innych elementów HTML, a one były jego dziećmi to Wszystko to zostanie usunięte.
// Na przykład 1:
$("#wymazListeMarzeButton").click(function(){
	$("#wymazListeMarzen").remove();
	alert("JESTEŚ NIEUDACZNIKIEM !!! A TACY JAK TY NIE MAJĄ MARZEŃ - GIŃ !!!");
}); // Po kliknięciu na przycisk o id="wymazListeMarzeButton" element HTML o id="wymazListeMarzen" (jest to lista nieuporzadkowana) wraz
// z zawartością, czyli treścią oraz podpunktami będącymi elementami HTML, zostanie usunuęty.

// Metoda .remove() usuwa cały element na którym została wywołana. Dzieje się tak ponieważ użylismy tej metody bez żadnych argumentów.
// Natomiast jeżeli chcemy usunąć kilka elementów jednocześnie, musimy najpierw odwołać się do konkretnej kolekcji elementów
// do której należą te które kasujemy (np.: $("li") - kolekcja elementów LI), a następnie za pomocą argumentów metody .remove()
// wyszczególnić te które będziemy usuwać(np.: remove("#id1, .class1")). A więc całe polecenie będzie wyglądać następująco:
$("tag").remove(".classThisTag, #idThisTag");
// Na przykład:
$("#wymazElementyListyMarzeButton").click(function(){
	$("li").remove("#wymazDziewczyne, #wymazDom, #wymazBMW");
}); // Po kliknięciu w przycisk o id="wymazElementyListyMarzeButton" zostaną usunięte
// elementu o id="wymazDziewczyne", id="wymazDom", id="wymazBMW". Elementy te należą do
// kolekcji elementów LI znajdujących się na naszej stronie.

.empty() // metoda ta usuwa tylko węzły będące dziećmi elementu na którym została wywołana.
// Oznacza to, że usunięta zostanie treść elementu, ponieważ jest węzłem tekstowym oraz
// elementy HTML znajdujące się wewnątrz tego elementu na którym wywołujemy tą metdoę, ponieważ
// są one jego dziećmi. Jednak sam element zostanie zachowany, będzie po prostu pusty.
// Na przykład:
$("#wymazMojaZawartoscNekrologButton").click(function(){
	$("#wymazMojaZawartoscNekrolog").empty();
}); // Po kliknięciu w przycisk o id="wymazMojaZawartoscNekrologButton" wymażemy całą Zawartość
// elementu HTML o id="wymazMojaZawartoscNekrolog". Jednak elementu tego nie usuniemy. On będzie pusty.
// W naszym przykładzie będzie to zaobserwowane tym, że tło elementu jest innego koloru i cały czas ono będzie takie same.
// To znaczy, że elementu nie został usunięty. Ale treść w nim i inne elementy HTML zostały usunięte.

////////////////////////////
////////////////////////////
// Manipulowanie stylami CSS

// Skoro jQuery to nakładka na czystego JavaScript, a że za pomocą JavaScript możemy
// manipulować stylami CSS to, można się łatwo domyśleć, że jQuery też nam udostępnia metody
// do manipulowania CSS.

// Najważniejsze metody jQuery do manipulacji CSS:
.addClass("className") // metoda ta dodaje atrybut klasy do konkretnego elementu bądź do kilku różnych
// elementów HTML. Dzięki temu możemy sobie stworzyć klasę zawierającą odpowiednie formatowniae
// i nastepnie dodać ją jako atrybut do elementu HTML zmieniając jego wygląd.
// Na przykład:
$("#dodajKlase1Button").click(function(){
	$("#dodajKlase1DIV").addClass("dodajKlase1");
	$("#dodajKlase2DIV").addClass("dodajKlase2");
	$("#dodajKlase2DIV p").addClass("dodajKlase3");
}); // Po kliknięciu przycisku o id="dodajKlase1Button" do trzech elementów, 2xDIV i P,
// zostaną dodane odpowiednie klasy HTML. Do każdego elementu inna klasa

$("#dodajKlase2Button").click(function(){
	$("#dodajKlase3DIV h3, #dodajKlase3DIV h4").addClass("dodajKlase4");
}); // Po kliknięciu w przycisk o id="dodajKlase2Button" do dwóch róznych elementów, H3 i H4
// dodana zostania ta sama klasa.

$("#dodajKlase3Button").click(function(){
	$("#dodajKlase4P").addClass("dodajKlase5 dodajKlase6");
}); // Po kliknięciu w przycisk o id="dodajKlase3Button" do jednego elementu zostaną dodane dwie rózne klasy
// "dodajKlase5" i "dodajKlase6".

.removeClass("className") // metoda ta usuwa atrybut z klasą z konkretnego elementu bądź kilku różnych
// elementów HTML. W związku z tym element ten straci przypisane do klasy formatowanie.
// Na przykład:
$("#usunKlase1Button").click(function(){
	$("#usunKlase1DIV").removeClass("usunKlase1");
}); // Po kliknięciu w przycisk o id="usunKlase1Button" z elementu DIV zostanie
// usunięta klasa jemu przypisana.

$("#usunKlase2Button").click(function(){
	$("#usunKlase2DIV h3, #usunKlase2DIV p").removeClass("usunKlase2");
}); // Po kliknięciu w przycisk o id="usunKlase2Button" z dwóch różnych elementów, H3 i P,
// usunięta zostanie ta sama klasa, "usunKlase2".

$("#usunKlase3Button").click(function(){
	$("#usunKlase3P").removeClass("usunKlase3 usunKlase4");
}); // Po kliknięciu w przycisk o id="usunKlase3Button" z elementu P zostaną usunięte
// dwie klasy do niego przypisane, "usunKlase3" i "usunKlase4".

.toggleClass("className") // metoda ta służy do przełączania się miedzy stanem w którym
// na wywołanym elemencie jest dodana klasa, a stanem w którym takiej klasy na nim nie ma.
// Inaczej mówiac przełączamy się miedzy dodaniem klasy a jej usunięciem z elementu na którym została wywołana metoda.
// Inaczej mówiąc to jest na zasadzie "WŁĄCZ/WYŁĄCZ" klasę
// Na przykład:
$("#przelaczKlase1Button").click(function(){
	$("#przelaczKlase1DIV").toggleClass("przelaczKlase1");
	$("#przelaczKlase2DIV").toggleClass("przelaczKlase2");
	$("#przelaczKlase2DIV p").toggleClass("przelaczKlase3");
}); // Po kliknięciu w przycisk o id="przelaczKlase1Button" dodamy do
// elementów "przelaczKlase1DIV", "przelaczKlase2DIV" oraz "przelaczKlase2DIV p"
// klasy, odpowiednio: "przelaczKlase1", "przelaczKlase2", "przelaczKlase3".
// Następne kliknięcie w ten sam przycisk spowoduje usunięcie z tych elementów
// wcześniej dodanych klas. Jest to taki przełącznik "WŁĄCZ/WYŁĄCZ".

////////////////////////////
// Rozdział o manipulacji stylami CSS rozpoczęlismy od przedstawienia metod do dodawania, bądź usuwania
// klas HTML. Klasy te były odpowiednio sformatowane w sekcji STYLE kodu HTML.
// Teraz jednak przedstawione będą metody jQuery do bezpośredniego formatowania
// elementów HTML. A tym samym metody dodające argument STYLE do elementów HTML.
// A wraz znim konkretne stylizacje wraz z wartościami. Służy do tego jedna metoda
// obsługująca trzy funkcjonalności:

// 1. Pierwsza z funkcjonalności zwraca wartość konkretnej właściwości CSS jaka jest wskazana jako
// argument metody. Oczywiście taka właściwość musi istnieć i być przypisana do elementu. HTML.
.css("propertyname");
// Na przykład:
$("#wezWlasciwoscCSSButton").click(function(){
	alert("Kolor przypisany do właściwości 'color' akapitu to: " + $("#wezWlasciwoscCSS").css("color"));
}); // Po kliknięciu w przycisk o id="wezWlasciwoscCSSButton" zostnie wyświetlany alert
// z informacją o wartości właściwości COLOR elementu o id="wezWlasciwoscCSS".

// UWAGA 1 !!!
// Jeżeli metoda w tej funkcjonalności zostanie wywołana na kolekcji elementó wówczas zwrócona
// będzie wartość właściwości pierwszego elementu HTML z tej kolekcji.
// UWAGA 2 !!!
// Jeżeli element posiada klasę w której jest jakaś właściwość CSS z wartością, a
// my wywołamy na nim metodę .css() chcąć zwrócic wartość tej właściwości to Zostanie
// ta wartość poprawnie zwrócona.
// A więc właściwości nie muszą być w argumencie SYTLE w elemencie HTML na którym Wywołujemy
// tę metodę z tą funkcjonalnością tylko mogą być w klasie przypisanej do tego elementu.

// 2. Druga funkcjonalność spowoduje dodanie do elementu HTML, na którym zostala wywołana,
// jakiejś właścicowści CSS o określnoej wartości. W tej funkcjonalności możemy dodać tylko
// jedną właściwość ! W domyśle tej metody jest dodawany argument STYLE do tego elementu HTMl
// a wraz znim wybrana przez nas właściwość CSS.
.css("propertyName", "value");
// Na przykład:
$("#wstawWlasciwoscCSSButton").click(function(){
	$("#wstawWlasciwoscCSS").css("color","green");
}); // Po kliknięciu w przycisk o id="wstawWlasciwoscCSSButton" tekst elementu o id="wstawWlasciwoscCSS"
// zostanie sformatowany na kolor zielony poprzez dodanie właściwość CSS COLOR.

// 3. Trzecia funkcjonalność to rozwinięcie drugiej funkcjonalności, czyli możliwość
// dodawania kilku właściwości CSS wraz z wartościami do elementu HTML. Jednak w przypadku
// trzeciej funkcjonalności mamy inną składnię polecenia.
// W domyśle tej metody jest dodawany argument STYLE do tego elementu HTMl
// a wraz znim wybrane przez nas właściwość CSS.
.css({"propertyName1":"value1","propertyName2":"value2",...,...});
// Na przykład:
$("#wstawKilkaWlasciwosciCSSButton").click(function(){
	$("#wstawKilkaWlasciwosciCSS").css({
		"background-color":"black",
		"color":"white"
	});
}); // Po kliknięciu w przycisk o id="wstawKilkaWlasciwosciCSSButton" elementowi o
// id="wstawKilkaWlasciwosciCSS" zostanie nadane nastepujące formatowanie:
// kolor tła: czarny, kolor czcionki: biały.

////////////////////////////
////////////////////////////
// Praca z wymiarami elementów oraz okien przeglądarki

// W jQuery mamy mozliwość łatwej pracy z wymiarami elementów HTML oraz wymiarami
// przeglądarki. Są dedykowane metody jQuery do pracy z wymiarami.
// Oczywiście do wymiarów elementów możemy się dostać poprzez metodę .css() i w niej
// jako argument podac właściwość związaną z wymiarem. Jednak w tym wypadku jak mamy
// dedykowane metody jQuery do wymiarów to po co się męczyć.

// Mamy następujące metody do pracy z wymiarami:
.width() .width(XXX) // metoda ta zwraca szerokość elementu HTMl (WYŁĄCZAJĄC wymiary padding, border i margin)
// na którym została wywołana bądź ustawia szerokość tego elementu jeżeli w argumencie tej metody poodamy jakąś wartość.

.height() .height(XXX) // metoda ta zwraca wysokość elementu HTMl (WYŁĄCZAJĄC wymiary padding, border i margin)
// na którym została wywołana bądź ustawia wysokość tego elementu jeżeli w argumencie tej metody poodamy jakąś wartość.

// Na przykład 1:
$("#dimensionReturnWidthHeighButton1").click(function(){
	var x = $("#dimensionDIV1").width();
	var y = $("#dimensionDIV1").height();
	var text = "Szerokość elementu wynosi: " + x + "</br>";
	text += "Wysokość elementu wynosi: " + y;
	$("#dimensionDIV1").html(text);
}); // Po kliknięciu w przycisk o id="dimensionReturnWidthHeighButton1" na elemencie DIV o id="dimensionDIV1"
// zostanie umieszczona tekst o jego wymiarach BEZ padding, border i margin.

// Na przykład 2:
$("#dimensionReturnWidthHeighButton5").click(function(){
	$("#dimensionDIV2").width(400);
	var x = $("#dimensionDIV2").width();
	$("#dimensionDIV2").height(200);
	var y = $("#dimensionDIV2").height();
	var text = "Szerokość elementu wynosi: " + x + "</br>";
	text += "Wysokość elementu wynosi: " + y;
	$("#dimensionDIV2").html(text);
}); // Po kliknięciu w przycisk o id="dimensionReturnWidthHeighButton5" szerokość elementu o id="dimensionDIV2"
// zostanie zwiększona o 400px, a wysokość o 200px. Wymiary zostanę zwiększone NIE UWZGLĘDNIAJĄC padding, border, margin
// A następnie w nim zostanie umieszczona tekst o jego wymiarach BEZ padding, border i margin.

.innerWidth() .innerWidth(XXX) // metoda ta zwraca szerokość elementu HTMl (WŁĄCZAJĄC padding WYŁĄCZAJĄC border i margin)
// na którym została wywołana bądź ustawia szerokość tego elementu jeżeli w argumencie tej metody poodamy jakąś wartość.

.innerHeight() .innerHeight(XXX) // metoda ta zwraca wysokość elementu HTMl (WŁĄCZAJĄC padding WYŁĄCZAJĄC border i margin)
// na którym została wywołana bądź ustawia wysokość tego elementu jeżeli w argumencie tej metody poodamy jakąś wartość.

// Na przykład 1:
$("#dimensionReturnWidthHeighButton2").click(function(){
	var x = $("#dimensionDIV1").innerWidth();
	var y = $("#dimensionDIV1").innerHeight();
	var text = "Szerokość elementu wynosi: " + x + "</br>";
	text += "Wysokość elementu wynosi: " + y;
	$("#dimensionDIV1").html(text);
}); // Po kliknięciu w przycisk o id="dimensionReturnWidthHeighButton2" na elemencie DIV o id="dimensionDIV1"
// zostanie umieszczona tekst o jego wymiarach Z padding BEZ border i margin.

// Na przykład 2:
$("#dimensionReturnWidthHeighButton6").click(function(){
	$("#dimensionDIV2").innerWidth(400);
	var x = $("#dimensionDIV2").innerWidth();
	$("#dimensionDIV2").innerHeight(200);
	var y = $("#dimensionDIV2").innerHeight();
	var text = "Szerokość elementu wynosi: " + x + "</br>";
	text += "Wysokość elementu wynosi: " + y;
	$("#dimensionDIV2").html(text);
}); // Po kliknięciu w przycisk o id="dimensionReturnWidthHeighButton6" szerokość elementu o id="dimensionDIV2"
// zostanie zwiększona o 400px, a wysokość o 200px. Wymiary zostanę zwiększone UwZGLĘDNIAJĄC padding NIE UWZGLĘDNIAJĄC border, margin
// A następnie w nim zostanie umieszczona tekst o jego wymiarach Z padding BEZ border i margin.

.outerWidth() .outerWidth(XXX) // metoda ta zwraca szerokość elementu HTMl (WŁĄCZAJĄC padding i border WYŁĄCZAJĄC margin)
// na którym została wywołana bądź ustawia szerokość tego elementu jeżeli w argumencie tej metody poodamy jakąś wartość.
// Dodatkowo jeżeli zamiast argumentu liczbowego podamy TRUE wówczas metoda ta zwróci szerokość elementu HTML WŁĄCZAJĄC
// padding, border i margin:
.outerWidth(true)

.outerHeight() .outerHeight(XXX) // metoda ta zwraca wysokość elementu HTMl (WŁĄCZAJĄC padding i border WYŁĄCZAJĄC margin)
// na którym została wywołana bądź ustawia wysokość tego elementu jeżeli w argumencie tej metody poodamy jakąś wartość.
// Dodatkowo jeżeli zamiast argumentu liczbowego podamy TRUE wówczas metoda ta zwróci wysokość elementu HTML WŁĄCZAJĄC
// padding, border i margin:
.outerHeight(true)

// Na przykład 1:
$("#dimensionReturnWidthHeighButton3").click(function(){
	var x = $("#dimensionDIV1").outerWidth();
	var y = $("#dimensionDIV1").outerHeight();
	var text = "Szerokość elementu wynosi: " + x + "</br>";
	text += "Wysokość elementu wynosi: " + y;
	$("#dimensionDIV1").html(text);
}); // Po kliknięciu w przycisk o id="dimensionReturnWidthHeighButton3" na elemencie DIV o id="dimensionDIV1"
// zostanie umieszczona tekst o jego wymiarach Z padding, border BEZ margin.

// Na przykład 1.1:
$("#dimensionReturnWidthHeighButton4").click(function(){
	var x = $("#dimensionDIV1").outerWidth(true);
	var y = $("#dimensionDIV1").outerHeight(true);
	var text = "Szerokość elementu wynosi: " + x + "</br>";
	text += "Wysokość elementu wynosi: " + y;
	$("#dimensionDIV1").html(text);
}); // Po kliknięciu w przycisk o id="dimensionReturnWidthHeighButton4" na elemencie DIV o id="dimensionDIV1"
// zostanie umieszczona tekst o jego wymiarach Z padding, border, margin.

// Na przykład 2.1:
$("#dimensionReturnWidthHeighButton7").click(function(){
	$("#dimensionDIV2").outerWidth(400);
	var x = $("#dimensionDIV2").outerWidth();
	$("#dimensionDIV2").outerHeight(200);
	var y = $("#dimensionDIV2").outerHeight();
	var text = "Szerokość elementu wynosi: " + x + "</br>";
	text += "Wysokość elementu wynosi: " + y;
	$("#dimensionDIV2").html(text);
}); // Po kliknięciu w przycisk o id="dimensionReturnWidthHeighButton7" szerokość elementu o id="dimensionDIV2"
// zostanie zwiększona o 400px, a wysokość o 200px. Wymiary zostanę zwiększone UwZGLĘDNIAJĄC padding, border NIE UWZGLĘDNIAJĄC margin
// A następnie w nim zostanie umieszczona tekst o jego wymiarach Z padding, border BEZ margin.

// Na przykład 2.2:
$("#dimensionReturnWidthHeighButton8").click(function(){
	$("#dimensionDIV2").outerWidth(400);
	var x = $("#dimensionDIV2").outerWidth(true);
	$("#dimensionDIV2").outerHeight(200);
	var y = $("#dimensionDIV2").outerHeight(true);
	var text = "Szerokość elementu wynosi: " + x + "</br>";
	text += "Wysokość elementu wynosi: " + y;
	$("#dimensionDIV2").html(text);
}); // Po kliknięciu w przycisk o id="dimensionReturnWidthHeighButton7" szerokość elementu o id="dimensionDIV2"
// zostanie zwiększona o 400px, a wysokość o 200px. Wymiary zostanę zwiększone UwZGLĘDNIAJĄC padding, border NIE UWZGLĘDNIAJĄC margin
// A następnie w nim zostanie umieszczona tekst o jego wymiarach Z padding, border, margin.
