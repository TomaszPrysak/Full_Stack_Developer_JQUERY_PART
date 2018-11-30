////////////////////////////
////////////////////////////
// jQuery
//
// jQuery to nic innego jak JavaScript !!! Tak tak, juz to umiemy :D
// jdnak nie w takiej czystej postaci jaką znamy.
// Głównym przeznaczeniem jQuery jest uczynienie JavaScript łatwym w uzyciu.
// Dzieje się tak, ponieważ jQuery jest biblioteką funkcji, metod i poleceń JavaScript.
// Za pomocą tak przygotowanej biblioteki JavaScript możemy wykonywać wymagających
// wielu lini kodu JavaScript zadań w prostszy sposób, ponieważ zostały one
// spakowane w metody wywoływane pojedynczym poleceniem jQuery.
// A więc biblioteki jQuery upraszczają wiele skomplikowanych rzeczy JavaScript
// takich jak manipulowanie HTML DOM, wywoływania AJAX itd.

// Biblioteki jQuery zawierają funkcje do:
// - manipulowania elementami HTML, czyli mamy dostęp do HTML DOM,
// - manipulowania stylami CSS,
// - dodawania reakcji na zdarzenia HTML, tak samo jako w HTML DOM tylko prościej,
// - tworzenie efektów i animacji,
// - AJAX,
// - oraz wiele innych narzędzi.

// A więc jeszcze raz, jQuery to biblioteki zawierające kod JavaScript,
// ktory wywołujemy za pomocą specjalnych poleceń. Dzięki temu mamy oszczędność
// w ilości napisanego kody. Część zadań będziemy musieli wykoać za pomocą czystego
// JavaScript, ponieważ nie wszystko jest możliwe do zrobienia za pomocą jQuery,
// jednak może nam oszczędzić wiele lini kodu w sytucjach standardowych, gdzie
// biblioteki jQuery wystepują.

// 1. Podpinanie pliku z bibliotekami jQuery

// Biblioteki jQuery do naszej strony internetowej podpinamy podobnie jak
// byśmy podpinali plik frameworka Bootstrap. Mamy zatem dwie opcje:
// 1. Ściągamy plik z całą bibliotrką jQuery ze strony jQuery.com. Należy pamiętać
// że siągamy plik z wersją produkcyjną tzn. taką przeznaczoną dla użytkowników,
// wykorzystujących tą bibliotekę do tworzenia stron internetowych.
// Jest jeszcze wersja deweloperska, jednak ona służy do daleszego rozwoju jQuery.
// 2. Bądź linkujemy do biblioteki jQuery umieszczonej na zewnętrznym serwerze,
// najczęście na serwerach Google bądź Microsoftu.

// Ad.1. Jeżeli ściagniemy plik z bibliotreką do katalogu z naszą stroną internetową
// musimy w znaczniku SCRIPT w sekcji HEAD pliku HTML odnieść się do tego
// pliku z biblioteką jQuery poprzez podanie jego nazwy wraz z rozszerzeniami w atrybucie SRC tego
// znacznika, tj. SCIRPT, przykład:
<head>
<script scr="jquery-3.3.1.min.js"></script>
</head>

// Ad.2. Linkownaie do biblioteki jQuery umieszczonej na zewnętrznym serwerze jest,
// wręcz identyczne do sposobu jakbyśmy ściągneli plik z biblioteką jQuery i podpinali
// go do naszej strony.
// W tym wypadku również w sekcji HEAD umieszczamy znacznik SCRIPT wraz z atrybutem SRC.
// I w tym atrybucie podajemy całą ścieżkę adresu internetowego do pliku z bibliotreką
// jQuery umiesczonego na zewnętrznym serwerze.
// Isnieją dwa najpopularniejsze hostingi z bibliotekami jQuery:
// Hosting na serwerach Google:
// https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// Przykład:
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
// Hosting na serwerach Microsoft:
// https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js
// Przykład:
<head>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
</head>

// Z dwóch sposobów podpiania bibliotek jQuery zalecana jest ta z linkowaniem
// do zewnętrznego serwera na którym taka biblioteka jest umieszczona.
// Przewaga takiego rozwiązania wynika z faktu, że wiele stron internetowych
// korzysta z bibliotek jQuery. Użytkownik odwiedzającyh jakąkolwiek inna stronę
// w ktorej były używane biblioteki jQeury powoduje, że zostały one już załadowane
// do pamięci przeglądarki internetwoej z której korzysta użytkownik.
// Jeżeli użytkownik ten odwiedzi naszą stronę wówczas biblioteki nie będą ładowane
// do pamięci jego przeglądarki ponieważ już będą tam załadowane.
// A to spowoduje, że nasza strona załaduje się szybciej.
// Jest to możliwe, ponieważ rozpoznawany jest adres do hosta bibliotek jQuery.
// My na naszej stronie użyjemy tego samego adresu. Jeżeli byśmy podpinali
// biblioteki w postaci pliku który ściągneliśmy, przeglądarka by go nie rozpoznała
// i musiałaby załadować go do swojej pamięci.
