////////////////////////////
////////////////////////////
// Składnia jQuery

// Składnia jQuery została stworzona do jak najłatwiejszego dostepu do elementów /
// znaczników HTML, a następnie do jego właściwości oraz możliwości wykonania na wskazanym,
// elemencie, bądź elementach, pewnych działań, akcji.

// Podstawowa składnia wygląda następująco:,

$("elementHTMLwedługodwołaniaCSS").akcja()
// $ - znak dolara umieszczony w składni jQuery oznacza, że definiujemy zapytanie do
// biblioteki jQuery, a inaczej mówiąc, że chcemy połączyć się z tą biblioteką,
// ("elementHTMLwedługodwołaniaCSS") - jest to dostanie się / odwołanie się do elementu HTML,
// korzystamy tutaj z odwołań jakie stosujemy w plikach CSS.+
// akcja() - wykonujemy akcję na elemencie / elementach do których się odwołujemy
// w zapytaniu.

// Wykorzystywanie odwołań CSS powoduje dużą uniwersalność poleceń jQuery. Nie musimy
// używać kilku różnych zapytań w zależności od tego do jakiego elementu HTML chcemy się dostać,
// odnieść.

// W czystej postaci JavaScript mieliśmy kilka rodzajów zapytań w zależności od tego
// do jakiego elementu chcieliśmy się odnieść:
document.getElementById('#ID'); // do elemnetu o określonym ID
document.getElementsByClassName('#CLASS'); // do elementu(ów) o okreslonej klasie
document.getElementsByTagName('#TAG'); // do konkretnego(ych) znaczka HTML
document.querySelectorAll(".ID/#className/typ/atrybut/war"); // odwołanie się poprzez zapytanie CSS

// Jak widzimy ten ostatni sposób jest najbliższy do zapytania jQuery. Ponieważ,
// też wykorzystuje rodzaj zapytań stosowany w plikach CSS. Czyli mamy możliwość
// odwołac się do elementu posiadający konkretny ID, CLASS bądź po prostu do ogólnie
// znacznika HTML.

// Jednak pomimo, że w JavaScript również było polecenie wykorzystujące rodzaj
// zapytań CSS to jednak konstrukcja składni jQuery jest prostsza i krótsza w stosowaniu.

// Przykłady z róznym odowłowaniem się do elementów HTML wykorzystując jQuery:
$(this).hide() // ukrywa bieżący element
$("p").hide() // ukrywa wszystkie elementy (P) będące akapitem
$(".test").hide() // ukrywa wszystkie elementy którym nadana został klasa class="test"
$("#test").hide() // ukrywa element któremu została nadany id="test"

// W przypadku dużych stron internetowych bądź jeżeli połączenie z internetem jest wolne
// ładowanie strony może trwać dość długo. Wiążą się z tym problem z całym załadowaniem strony.
// Wówczas część elementów może się już załadować a część, na przykład plik z jQuery już
// się nie załaduje. Spowoduje to, że niektóre akcje, zaprogramowane w jQuery
// nie będą wykonywane, na przykład:
// - próba ukrycia elementu zanim zostanie stworzony,
// - próba pobrania wielkości obrazka zanim się załadował.
// Dlatego warto aby nasz kod jQuery zaczął działać dopiero w momencie
// kiedy cała strona będzie załadowana, tzn. będzie gotowa.
// W tym celu kod jQuery piszemy w specjalnej funkcji:
$(document).ready(function(){
	// tutaj piszemy nasze polecenia jQuery oraz JavaScript
});
// lub
$(function() {
	// tutaj piszemy nasze polecenia jQuery oraz JavaScript
})
// Ta funkcja pozwala również na umieszczenie kodu JavaScript w znaczniku SCRIPT
// w sekcji HEAD zamiast na samym końcu w sekcji BODY.

////////////////////////////
////////////////////////////
// Odwołania jQuery do elementów HTML

// Jak już było wpominane, odwołania jQuery pozwalaja na znajdowanie elementów HTML
// oraz na manipulowanie nimi. Do znajdowania ich wykorzystujemy zapytania CSS,
// czyli możemy je znajdować poprzez nazwę znacznika HTML, ID, CLASS, typ, atrybut,
// wartość atrubutu itd. Możemy również dodawać nowe znaczniki, nowe atrybuty do znaczników itd.
// Dokładnie tak jak w czystej postaci JavaScript i HTML DOM.

// Podstawowe polecenia do pobierania elementów:

// 1. Zwracanie po znaczniku HTML
$("tag") // zwraca wszystkie elememty HTML danego znacznika
//Na przykład:
$("p") // zwraca wszystkie akapity na stronie w postaci listy, podobnej do
// normalnej listy JavaScript. Indeksy na tej liście są więc numerowane od 0.

// 2. Zwracanie po ID
// Ponieważ tylko jeden element na stronie internetowej może mieć atrubyt ID
// wówczas zostanie zwórcony tylko jeden element. A więc używamy tej metody tylko
// jeżeli chcemy dostać się do jednego elementu.
$("#id") // zwraca unikatowy element HTML posiadający konkretny ID
//Na przykład:
$("#pierwszy") // zwróci element posiadający atrybut id="pierwszy"

// 3. Zwracanie po CLASS
// Klasa może zostać przypisana do elementów HTML różnego rodzaju. Zarówno akapit
// jak i przycisk i podpunkt na liście mogą być tej samej klasy.
$(".class") // zwraca wszystkie elementy HTML którym została nadana konkretna klasa.
$(".przyciskiDuże") // zwróci wszystkie elementy które posiadaja atrybut class="przyciskiDuże"
// w postaci listy, podobnej do normalnej listy w JavaScript. Indeksy na tej liście
// są wiec numerowane od 0.
