////////////////////////////
////////////////////////////
// Zdarzenia

// Z uwagi na to, że jQuery to jest "nakładka" na JavaScripta to zdarzenia znaczą
// dokładnie to samo co w czystym JavaScript. Należy pamiętać, że nazwy zdarzeń,
// mogą się różnic pomiędzy jQuery a czystym JavaScript.
// Tak w skrócie to działania użytkowników na stronie internetowej nazywamy zdarzeniami.
// Zdarzenie reprezentuje dokładnie moment w którym coś się dzieje.
// Na przykład:
// - przesunięcie myszką po elemencie strony internetowej,
// - wybranie jednorazowego zaznaczenia (radio button)
// - kliknięcie na elemencie, może być na przycisku, nagłówku, obrazku itd.

// W przypadku zdarzeń wystepują dwa terminy:
// fires - uruchamiany (ten dotyczy zdarzenia które właśnie zachodzi)
// fired - uruchomiony (ten dotyczy zdarzenia które juz zaszło)
// Na przykład:
// Zdarzenie naciśnięcia klawisza, zostaje uruchomione w momencie jego naciśnięcia.

// Przykładowe, najczęstsze zdarzenia:
// Myszka:
// - kliknięcie (click),
// - podwójne kliknięcie (dblcklick),
// - najechanie myszką (mouseenter),
// - zjechanie myszką (mouseleave).
// Klawiatura:
// - naciśnięcie klawisza (keypress),
// - wciśnięcie klawisza (keydown),
// - odpuszczenie klawisza (keyup).
// Formularze:
// - zatwierdzenie (submit),
// - zmiana (change),
// - aktywacja (focus),
// - rozmycie (blur).
// Dokumentem jako stroną internetową / Okienkowe:
// - załadowanie strony (load),
// - zmiana rozmiaru (resize),
// - przewinięcie strony (scroll),
// - niezaładowanie (unload).

// Ilość możliwych zdarzeń jest bardzo duża w jQuery. Na stronie
// w3school znajduje się lista z możliwymi zdarzeniami.

// W celu wywołania kodu jQuery/JavaScript w momencie kiedy nastąpi odpowiednie zdarzenie, musimy
// dodać do odwołania się do określonego elementu HTML jeszcze metodę obsługującą dane zdarzenie.

// Ogólna postać przypisywania zdarzenia:

$("tag").eventMethond(function(){ // formuła odwołuje się do elementu HTML ($("tag")) oraz przypisuje mu odpowiednie zdarzenie (.eventMethond(finction(){}))
	jQuery / JavaScript Code // kod jaki wywoła się w momencie kiedy nastąpi zdarzenie przypisane do elementu HTML
});

// Przykłady dla zagadnień z jQuery których uczyliśmy się wcześniej
// wykorzystywały obsługę zdarzeń, w celu lepszej demostracji działania.
// Była to obsługa zdarzeń na kliknięcia. Jednak już mniej więcej wiemy jak
// używać obługi zdarzeń. Poniżej opisane zostaną najczęściej wykorzystywane zdarzenia.

// click - kliknięcie na elemencie
.click(function(){code}) // zostanie wykonana akcja w momencie kliknięcia na elemencie HTML.
// Na przykład:
$("#kliknijMnie").click(function(){
	$(this).text("I gdzie te numery ????");
}) // zdarzenie przypisane do akapitu o id="kliknijMnie" spowoduje, że w momencie
// kliknęcia na tym akapicie, zmieni się treść tego akapitu

// dblclick - podwójne kliknięcie na elemencie
.dblclick(function(){code}) // zostanie wykonana akcja w momencie podwójnego kliknięcia na elemencie HTML
// Na przykład:
$("#podwojnieKliknijMnie").dblclick(function(){
	$(this).hide();
	alert("Uppppssss.... czyżby to oznaczało, że nie będzie szczęścia... a może wręcz coś przeciwnego ??? buahahahaha")
}) // zdarzenie przypisane do akapitu o id="podwojnieKliknijMnie" spowoduje, że w momencie
// podwójnego kliknięcia na tym akapicie on zniknie i wyświetli się okienko wyskakujące

// mouseenter() - najechanie na element
.mouseenter(function(){code}) // zostanie wykonana akcja w momencie najechania na element HTML myszką
// Na przykład:
$("#najedzMnie").mouseenter(function(){
	$(this).text("łaskoczeeeeeee !!!!")
}) // zdarzenie przypisane do akapitu o id="najedzMnie" spowoduje, że w momencie
// najechania na ten element myszką zmieni się jego treść

// mouseleave() - zjechanie z elementu
.mouseleave(function(){code}) // zostanie wykonana akcja w momencie zjechania z elementu HTML myszką
// Na przykład:
$("#zjedzZeMnie").mouseleave(function(){
	$(this).text("Dziękuję za pomoc")
}) // zdarzenie przypisane do elementu o id="zjedzZeMnie" spowoduje, że w momencie
// kiedy myszka znajdzie się na tym elemencie, a później z niego zjedzie
// to zmieni się jego treść

// mousedown - wciśnięcie lewego, środkowego bądź prawego przycisku myszy na elemencie HTML
// (UWAGA ! nie chodzi o to, że wykonamy kliknięcie, tylko, że wciśniemy przycisk, możemy nie puszczać a akcja się wykona)
.mousedown(function(){code}) // zostanie wykonana akcja w momencie wciśnięcia przycisku myszy (obojętnie którego)
// Na przykład:
$("#wcisnijMnie").mousedown(function(){
	$(this).text("Ehhhhh nie potrzafisz :(")
}) // zdarzenie przypisane do elementu id="wcisnijMnie" spowoduje, że w momencie kiedy
// wciśniemy jakikolwiek przycisk myszy (nie musimy go puszczać) to zmieni się treść tego elementu

// mouseup - puszczenie lewego, środkowego bądź prawego przycisku myszy który wcześniej wcisnlęliśmy
// na jakimś elemencie HTML
.mouseup(function(){code}) // zostanie wykonana akcja w momencie kiedy puścimy wcześniej wciśnięty przycisk myszy na elemencie HTML
// Na przykład:
$("#puscMnie").mouseup(function(){
	$(this).text("Alllleeeeee ulga, teraz jestem piękny ;)")
}) // zdarzenie przypisane do elementu o id="puscMnie" spowoduje, że w momencie kiedy
// puścimy wcześniej wciśnięty jakikolwiek przycisk myszy to zmieni się treść tego elementu

// hover - zdarzenie łączące mouseenter i mouseleave w jedno
.hover(function(){code when mouse over element HTML}, function(){code when mouse leaved element HTML})
// Na przykład:
$("#wcisnijPuscMnie").hover(function(){
	$(this).text("w mucholocie")
},
function(){
	$(this).text("Lata mucha...")
}) // zdarzenie przypisane do elementu o id="wcisnijPuscMnie" spowoduje, że w momencie kiedy
// kursor myszki znajdzie się na elemencie to zmienie się treść tego elementu, natomiast kiedy
// kursor myszki zjedzie z tego elementu to znowu zmieni się treść tego elementu.

// focus - aktywacja pola formularza
.focus(function({cod when form filed get focus})) // zostanie wykonana akcja w momencie kiedy
// pole formularza do którego zdarzenie jest przypisane zostanie aktywowane, tzn. jeżeli będziemy
// chcieli na przykład wpisać coś w to pole
// Na przykład:
$("#skupSie").focus(function(){
	$(this).css({"background-color": "black", "color": "white"})
}) // zdarzenie przypisane do pola tesktowego formularza o id="skupSie"
// spowoduje, że w momencie jego aktywacji, czyli tak naprawde po ustawieniu kursora w nim
// zmienione zostanie jego "stylizacja".

// blur - deaktywacja pola formularza
.blur(function({code when form filed loses focus})) // zostanie wykonana akcja w momencie kiedy
// pole formularza do którego zdarzenie jest przypisane zostanie dezaktywowane, tzn.jeżeli już
// wypełniliśmy to pole i kliknęliśmy gdzieś obok
// Na przykład:
$("#rozluznijSie").blur(function(){
	$(this).css({"background-color": "white", "color": "black"})
}) // zdarzenie przypisane do pola tesktowego formularza o id="rozluznijSie"
// spowoduje, że w momencie jego deaktywacji, czyli tak naprawde po kliknięciu kursorem poza nim
// zmienione zostanie jego "stylizacja". Jest to przeciwieństwo metody .focus().

// UWAGA !!!
// Bardzo ważna metoda:
// on - metoda ta umożliwia podłączyć jedno lub więcej zdarzeń do jednego elementu HTML
.on("eventMethond", function({code when event})) // DOTYCZY JEDNEGO ZDARZENIA
// sposób zapisu jeżeli za pomocą metdoy .on() przypiszamy
// do elementu tylko jedno zdarzenie. Oczywiście jeżeli chcemy przypisać tylko jedno Zdarzenie
// to możemy to zrobić wprost. Takie metody opisywaliśmy powyżej.
.on({firstEventMethond: function(){code when event},
		 secondEventMethond: function(){code when event},
		 itd...
}) // DOTYCZY WIELU ZDARZEŃ sposób zapisu jeżeli do elementu HTML chcemy przypisać kilka zdarzeń.
// Musimy pamiętać o dodatkowych nawiasach "{}", w których wnętrzu umieszczamy
// zdarzenia na jakie ma reagować nasz element HTML.
// Na przykład:
$("#wielokrotneZdarzenia").on({
	mousedown: function(){
		$(this).css({"background-color": "red", "color": "white"});
		$(this).text("BIAŁO-CZERWONI !!!");
	},
	mouseup: function(){
		$(this).css({"background-color": "white", "color": "red"});
		$(this).text("POLSKA !!!");
	}
}); // do elementu o id="wielokrotneZdarzenia" przypiente zostały dwa zdarzenia,
// jedno wywoływane poprzez wciśnięcie klawisza myszki na elemencie, a drugie
// podczas puszczania tego klawisza z elementu.

// off - metoda ta umozliwia odłączyć istniejące reakcje na zdarzenia na elemencie html
.off("eventMethond", function({code when event})) // DOTYCZY JEDNEGO ZDARZENIA
// sposób zapisu jeżeli za pomocą metdoy .off() odłączamy
// od elementu HTML tylko jedno zdarzenie.
.off({firstEventMethond: function(){code when event},
		 secondEventMethond: function(){code when event},
		 itd...
}) // DOTYCZY WIELU ZDARZEŃ sposób zapisu jeżeli od elementu HTML chcemy odłączyć kilka zdarzeń.
// Musimy pamiętać o dodatkowych nawiasach "{}", w których wnętrzu umieszczamy
// zdarzenia jakie chcemy odłączyć od naszego elementu HTML.

// UWAGA !!!
// Przydatną funkcjonalnością podczas metod dodających reakcje na zdarzenia jest możliwość
// przekazywania w funkcjach parametru "event".
// Pod parametrem tym kryje się obiekt zawierający informacje na temat zdarzenia.
// Możemy się dowiedzieć (na przykład) jakim klawiszem klawiatury nastąpiło zdarzenie
// i ta informacja może nam posłużyć do przysiania do określonego klawisza jakiejś konkretnej reakcji.
// Na przykład:
$("input").eq(0).keypress(function(event){
  console.log(event);
  if (event.which === 13) {
    $("h3").toggleClass("turnBlue");
  }
}); // Do elementu HTML typu INPUT przypisano zdarzenie reagujące na naciśnięcie klawisza klawaitury.
// W momencie naciskania jakiegokolwiek klawisza w tym elemencie INPUT, w konsoli przeglądarki wyświetla się log z informacją
// dotyczącą nciskanego klawisza. Dodatkowo wprowadzono wyrażenie warunkowe kóre wykona się jeżeli
// naciskanym klawiszem na klawiaturze będzie ten który określan numer 13. A jest to klawisz ENTER.
