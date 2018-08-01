$(function() {

	$("button").eq(0).click(function(){
		$("p").eq(1).text("Wjeżdża jQuery :D");
	});

	$("button").eq(1).click(function(){
		$("#p1").text("Dżej Dżej... Okocza xD");
	});

	$("button").eq(2).click(function(){
		$(".testowa1").eq(2).text("diDżejka xP");
	});

})
