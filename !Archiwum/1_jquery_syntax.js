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
// Osobny plik do poleceń jQuery

// Pomimo, że do naszej strony w sekcji HEAD podpinamy / lunkujemy bliblioteki jQuery
// To możemy ponizej użyć dodatkowego znacznika SCRIPT w ktorym podepniemy plik
// w ktorym będziemy używać poleceń jQuery na naszej stronie internetowej.
// Umieszczenie kodu w funkcji opisanej powyżej pozwoli uniknać braku załadowania elementów
// przed załadowaniem pliku JavaScript.
// Ważna uwaga. W tym naszym pliku może zarówno używać pliku JavaScript jak i jQuery.
// Bo jQuery to po prostu JavaScript.
// Przykład podpinania plików:
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" charset="utf-8"></script>
	<script src="jquery_file.js" charset="utf-8"></script>
</head>

////////////////////////////
////////////////////////////
// Odwołania jQuery do elementów HTML

// Jak już było wpominane, odwołania jQuery pozwalaja na znajdowanie elementów HTML
// oraz na manipulowanie nimi. Do znajdowania ich wykorzystujemy zapytania CSS,
// czyli możemy je znajdować poprzez nazwę znacznika HTML, ID, CLASS, typ, atrybut,
// wartość atrubutu itd. Możemy również dodawać nowe znaczniki, nowe atrybuty do znaczników itd.
// Dokładnie tak jak w czystej postaci JavaScript i HTML DOM.

// Podstawowe polecenia do pobierania elementów:

// 1. Zwracanie po znaczniku HTML / TAGU
$("tag") // zwraca wszystkie elememty HTML danego znacznika
//Na przykład:
$("p") // zwraca wszystkie akapity na stronie w postaci listy, podobnej do
// normalnej listy JavaScript. Indeksy na tej liście są więc numerowane od 0.
// Elementy będą uporządkowane od wystepowania na stronie. Pierwszy znacznik bedzie
// w tej liście pod indeksem 0. Należy pamiętać, że mimo zwracana jest nam lista
// to nie możemy na niej wykonać metod takie jakie wykonujemy normalnie w kodzie JavaScript.

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
// Elementy będą uporządkowane od wystepowania na stronie. Pierwszy znacznik bedzie
// w tej liście pod indeksem 0. Należy pamiętać, że mimo zwracana jest nam lista
// to nie możemy na niej wykonać metod takie jakie wykonujemy normalnie w kodzie JavaScript.

// Skoro pobieranie elementuów nastepuje poprzez składnię CSS nie musimy się ograniczać
// do prostego pobierania elementów poprzez wskazywanie TAGa elementu, jego ID bądź
// jego CLASS. Składnia CSS pozwala na dużo więcej i możliwość docierania do zagnieżdżonych
// elementów. A więc przykładowe zapytania jQuery:
$("*") // zwraca wszystkie elementy HTML w sekcji BODy
$(this) // zwraca bieżący element na ktorym jest wywoływany
$("p:first") // zwraca pierwszy element P wystepujacy na stronie
$("ul li:first-child") // zwraca pierwszy element listy LI w każdej liście nieuporzadkowanej UL
$("div.czerwony") // zwraca DIV o klasie czerwony
$("div p") // zwraca wszystkie P znajdujące się w DIV
$("div#cnt > p") // zwraca wszystkie P mieszczące się bezpośrednio w DIV o id="cnt"
$("p:first-of-type") // zwraca wszystkie P, które są pierwszymi elementami danego typu
$("img[width=100]") // zwraca wszystkie obrazki IMG, które mają atrybut width="100"
$(":checkbox ~ label") // zwraca wszystkie LABEL, które następują po checkbox na danym poziomie drzewa
$("[href]") // zwraca wszystkie elementy zaweirające atrybut HREF
$(":button") // zwraca wszystkie elementy będące type="button"
$("a[target='_blank']") // zwraca wszystkie A gdzie atrybut TARGET równy jest "_BLNANK"
$("a[target!='_blank']") // zwraca wszystkie A gdzie atrybut TARGET nie równy jest "_BLNANK"

// Powyższe to tylko przykłady, warto odwiedzić stronę gdzie przedstawione są
// selektory CSS. W  katalogu z kursem są odpowiednie linki.

// Ponieważ metody odstępowe jQuery do elementów HTML mogą zwracać listy (dokładnie
// tak jak w czystym JavaScript) jQuery udostempnia nam też sporo metod dodatkowych,
// które są odpowiednikami CSS3 i pozwalają nam odnośić się do konkretnych
// pozycji z tej zwracanej listy elementów HTML. Najcześciej używanymi są:

.eq(index) // zwraca z listy element o danym indeksie
// Na przykład:
$("p").eq(2) // zwróci 3 akapit P z listy wszystkich akapitów

.first() // zwraca pierwszy element z listy
// Na przykład:
$("li").first() // zwóric pierwszy element LI z listy wszystkich elementów wchodzących
// w skład listy UL bądź OL

.last() // zwróci ostatni element z listy
// Na przykład:
$("li").last() // zwóric ostatni element LI z listy wszystkich elementów wchodzących
// w skład listy UL bądź OL

:lt(index) // zwraca wszystkie elementy od indeksie mniejszym od wskazanego.
// Tę metodę stosujemy w środku składni CSS w metodzie dostępowej do elementu,
// a nie po kropce jako kolejna metodę.
// Na przykład:
$("tr:lt(3)") // zwróci wszystkie wiersze TR tabeli o indeksach 0, 1, 2, czyli
// mniejsze od indeksu jaki podalismy czyli 3

:gt(index) // zwraca wszystkie elementy od indeksie większym od wskazanego.
// Tę metodę stosujemy w środku składni CSS w metodzie dostępowej do elementu,
// a nie po kropce jako kolejna metodę.
// Na przykład:
$("tr:gt(4)" // zwróci wszystkie wiersze TR tabeli o indeksach 5, 6, 7 itd czyli
// większe od indeksu jaki podalismy czyli 4

.not(boolean) // zwróci element który nie będzie spełniał warunku zpaisanego
// w nawiasie.
// Na przykład:
$("div").not(".green, #blue") // zwróci element (lub kilka) DIV który nie bedzie
// miał id="blue" lub nie bedzie miał class="green"

.is(selectorElement) // zwórci element który bedzie spełniac warunek zapisany w nawiasie
// Jednakże, NIE jest ono przeciwieństwiem wyżej opisywanej metory not().
// W powyższym przykładzie zastosowanie is():
$("div").is(".green, #blue") // NIE zwróci elemntów zawierających id="blue" lub klase
// class="green".
// Metoda ta najprościej mówiąc odpowiada na pytanie CZY JEST.
// Na przykład:
$("p").parent().is("div") // zwróci element P którego rodzicem jest element DIV
// Odwrotnością not() jest niżej opisywana metoda filter()

.filter(criteria,function(index){code with return}) // zwraca elementy które pasują do kryteriów bądź
// wykonuje funkcje na elementach, iterując przez nie i jeżeli funkcja na konkretnym elemencie
// zwróci true to wtedy element ten jest zwracany
// Przykład z kryteriami:
$("div").filter(".green, #blue") // zwróci element który ma id="blue" lub elementy
// których klasa jest class="green"
// Przykład z funkcją:
$("div").filter(function(index){return index === 1 || $(this).attr("id") === "czwarty";})
// Zwróci elementy których indeks jest rowny 1 oraz id="czwarty" najpierw iterując przez nie funkcją

////////////////////////////
////////////////////////////
// Węzły i relacje między nimi

// W jQuery samo pojęcie węzłów oraz ich typów znaczy dokładnie to samo co w przypadku czystego
// JavaScript. To samo dotyczy się relacji między węzłami. Różnica polega oczywiście
// tylko i wyłącznie na sposobie zapisu metod dostepowych do węzłów, wynika
// ona z róznic w składni jQuery a czystego JavaScript.

// Na poniższym przykładzie małe przypomnienie węzłów i relacji między nimi:

<div>
	<ul>
		<li id="li1">
			<span></span>
			<span></span>
		</li>
		<li id="li2">
			<b></b>
		</li>
	</ul>
</div>

// Element DIV jest rodzicem elementu UL i przodkiem (ancestor) wszystkich elementów się w nim znajdujących.
// Element UL jest rodzicem elementów LI oraz dzieckiem elementu DIV.
// Element LI o id="li1" jest rodzicem elementów SPAN, dzieckiem elementu UL oraz potomkeim (descendant) elementu DIV.
// Element SPAN jest dzieckiem elementu LI o id="li1" oraz potomkeim elementu UL oraz DIV.
// Dwa elementy LI są dla siebie rodzeństwem (siblings), mając tego samego rodzica - UL.
// Element LI o od="li2" jest rodzicem elementu B, dzieckiem elementu UL oraz potomkiem elementu DIV.
// Element B jest dzieckiem elementu LI o id="li2" oraz potomkiem elementu UL oraz DIV.

// Ważne pojęcia:
// - przodek (ancestor) jest prodzicem, dziedkiem, pradziadkiem i tak dalej,
// - potomek (descendant) jest dzieckiem, wnukiem, prawnukiem i tak dalej,
// - rodzeństwo (siblings) ma tego samego rodzica.

// Metody jQuery poruszania się po drzewku HTML DOM

// Ancestor (przodek):

.parent() // metoda ta zwraca rodzica elementu na którym jest wywoływana.
// Jednak należy pamiętać, że metoda ta przechodzi tylko jeden poziom w górę
// drzewka HTML DOM. Czyli zwraca dokładnie rodzica jednego w górę. Inaczej mówiąc
// zwraca przodka o jeden w górę, czyli rodzica.
// Na przykład:
$("#wezly1").parent().css({"border":"2px solid red", "color": "red"}); // Zwróci
// rodzica elementu o id="wezly1" i zmieni jego obramowanie

.parents() // metoda ta zwraca wszystkich przodków elementu na którym została wywołana.
// Począwszy na rodzicu a na całym znaczniku BODY kończąc ponieważ to będzie
// ostatni przodek.
// Na przykład:
$("#wezly1").parents().css({"border":"2px solid red", "color": "red"}); // Zwróci
// wszystkich przodków elementu o id="wezly1" i zmieni ich obramowanie.
// TIP: Jeżeli w metodzie .parents() w nawiasie użyjemy odwołania do jakiegoś elemntu
// będącego jednym z przodków elementu na którym używmay tej metody wówczas metoda zwróci
// nam ten konkretny element.
// Na przykład:
$("#wezly1").parents("ul").css({"border":"2px solid red", "color": "red"}); // Zwróci
// tylko jednego przodka elementu o id="wezly1" i przodkiem tym będzi element UL.
// Tego rodzaju element (UL) wskazaliśmy jako argument w nawiasie w metodzie.

.parentsUntil("tag") // metoda ta zwraca przodków pomiędzy elementem na którym została wywołana,
// a elementem który wskażemy jako argument w nawiasie metody. Elementy te,
// czyli ten na którym wywołujemy oraz ten który wskażemy w argumencie nie będą zwracane.
// Tak jakby one tworzą granice przedziału otwartego. Czyli wszystko co pomiędzy jest
// zwracane, ale one same nie.
// Na przykład:
$("#wezly1").parentsUntil("div").css({"border":"2px solid red", "color": "red"});
// Zwraca przodków występujacych pomiędzy elementem o id="#wezly1" a elementem DIV
// będącym argumentem metody .parentsUntil()

// Descendant (potomek):

.children() // metoda ta zwraca wszystkich potomków elementu na którym jest wywoływana.
// Jednak należy pamiętać, że metoda ta przechodzi tylko jeden poziom w dół drzewka HTML DOM.
// Inaczej mówiąc zwraca potomka(ów) o jeden w dół, czyli dzieci. Może być ich więcej niż jedno.
// Na przykład:
$(".descendants").children().css({"border":"2px solid red", "color": "red"}) // Zwróci
// dzieci elementu o class="descendants" i zmieni ich obramowanie."
// TIP: Jeżeli podamy w metodzie w nawiasie () argument poprzez odwołanie do elementu z
// podaniem klasy tego elementu bądź id to możemy sobie wskazywać konkretne potomstwo w postaci dziecka.
// Dotyczy to głównie sytuacji w których mamy więcej niż jedno dziecko.

.find("tag") // metoda ta zwraca spośród potomków elementu na którym jest wywoływana
// tych którzy pasują do argumentu umieszczonego w nawiasie metody .find("tag").
// Na przykład:
$(".descendants").find("span").css({"border":"2px solid red", "color": "red"}) // Zwróci
// potomsto elementu o class="descendants" które będzie elementem typu SPAN. Ponieważ
// taki argument podaliśmy w metodzie.
// TIP 1: Jeżeli w metodzie .find() w nawiasie podamy arument: "*" to zwrócone
// zostanie nam całe potomstwo elementu na ktory wywołujemy tą metodę.
// TIP 2: Oczywiście w argumencie metody możemy zawęzić zwracanie potomków poprzez
// odpowiednie zapisanie ich używając odwołań CSS, np.: .find("p.first")

// Siblings (rodzeństwo)

.siblings()

.next()

.nextAll()

.nextUntil()

.prev() .prevAll() .prevUntil()
