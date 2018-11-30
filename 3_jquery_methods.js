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

// W związku z tym, że dodawana zawartość dodawana jest poza
// elementem najczęściej stosuje się ją właśnie do tworzenia nowych elementów HTML. Należy wówczas wybrać sposób dodawania,
// tworzenia nowego elementu HTML z pośród trzech dostępnych. Znajdują się poniżej.

.after("<tag>Same new content</tag>") // metoda ta dodaje nową zawartość, najczęście jest to nowy element HTML,
// PO elemencie (POZA NIM) na którym została wywołana.
// Na przykład:
$("#dodajAkapitPoButton").click(function(){
	$("#dodajPrzedPo").after($("<p></p>").text("Czego drzesz ryja Jarku !!!"));
}); // Po kliknięciu w przycisk o id="dodajAkapitPoButton" przed elementem o id="dodajPrzedPo"
// zostanie dodany nowy akapit z zawartością jako jest w metodzie .text()

// W związku z tym, że dodawana zawartość dodawana jest poza
// elementem najczęściej stosuje się ją właśnie do tworzenia nowych elementów HTML. Należy wówczas wybrać sposób dodawania,
// tworzenia nowego elementu HTML z pośród trzech dostępnych.

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
