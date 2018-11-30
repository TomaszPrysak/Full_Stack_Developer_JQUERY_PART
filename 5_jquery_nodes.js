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
// - przodek (ancestor) jest rodzicem, dziedkiem, pradziadkiem i tak dalej,
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
// będącym argumentem metody .parentsUntil("div")

// Descendant (potomek):

.children() // metoda ta zwraca wszystkich potomków elementu na którym jest wywoływana.
// Jednak należy pamiętać, że metoda ta przechodzi tylko jeden poziom w dół drzewka HTML DOM.
// Inaczej mówiąc zwraca potomka(ów) o jeden w dół, czyli dzieci. Może być ich więcej niż jedno.
// Na przykład:
$(".descendants").children().css({"border":"2px solid red", "color": "red"}) // Zwróci
// dzieci elementu o class="descendants" i zmieni ich obramowanie."
// TIP: Jeżeli podamy w nawiasie () metody argument poprzez odwołanie do elementu z
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

.siblings() // metoda ta zwraca całe rodzeństwo na elemencie na którym została
// wywołana.
// Na przykład:
$(".siblings h2").siblings().css({"border":"2px solid red", "color": "red"})
// Zwróci całe rodzeństwo elementu H2 znajdującego się w elemencie o class="siblings"
// i zmieni ich obramowanie.
// TIP: Jeżeli podamy w nawiasie () metody, będzie argument będący odwołaniem się do konkretnego
// elementu który wiemy, że jest rodzeństwem elementu na którym wywołujemy tą metodę to
// zwróci nam tylko jego. Na przykład:
$(".siblings h2").siblings(".siblings h6").css({"border":"2px solid red", "color": "red"})
// Zwróci dokładnie jednego z rodzeństwa o dowłoaniu = .siblings h6.

.next() // metoda ta zwróci nam następny element będący rodzeństwem elementu na ktorym
// wywołaliśmy tę metodę. Dotyczy to sytuacji gdzie jest wiele rodzeństwa, a my
// chcemy dostać się tylko do następnego. Pmiętając o tym, że nastepny element to
// ten który w kodzie HTML jest poniżej tego na którym wywołaliśmy metodą. Bo kod HTML,
// jest czytany z góry do dołu.
// Na przykład:
$(".siblings h3").next().css({"border":"2px solid red", "color": "red"}) //
// Zwróci następny element będący rodzeństwem elementu o odwołaniu = .siblings h3

.nextAll() // metoda ta zwróci wszystkie elementy będące rodzeństwem elementu
// na którym wywołaliśmy tę metodę, ale tylko takie które wystepują po tym elemencie.
// Te które wystepują przed nie zostaną zwrócone. Oczywiście znowu pamiętając o tym,
// że następny element to taki który w kodzie HTML jest poniżej tego na którym
// wywołaliśmy metodą. Bo kod HTML, jest czytany z góry do dołu.
// Na przykład:
$(".siblings h3").nextAll().css({"border":"2px solid red", "color": "red"})
// Zwróci wszystkie następne elementy będące rodzeństwem elementu o odwołaniu = .siblings h3

.nextUntil("tag") // metoda ta zwraca rodzeństwo pomiędzy elementem na którym została
// wywołana, a elementem który wskażemy w nawiasie metody (element ten musi należeć do rodzeństwa).
// Elementy te, czyli ten na którym wywołujemy oraz ten który wskażemy w argumencie nie będą zwracane.
// Tak jakby one tworzą granice przedziału otwartego. Czyli wszystko co pomiędzy jest
// zwracane, ale one same nie.
// Na przykład:
$(".siblings h3").nextUntil(".siblings p").css({"border":"2px solid red", "color": "red"})
// Zwraca rodzeństwo występujacych pomiędzy elementem o odwołaniu = .siblings h3
// a elementem będącym argumentem metody .nextUntil(".siblings p")

.prev() // działa przeciwnie do .next()
.prevAll() // działa przeciwnie do .nextAll()
.prevUntil() // działa przeciwnie do .nextUntul()
