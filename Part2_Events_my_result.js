// Clicks

$("h1").click(function(){
  console.log("There was a click");
});

$("li").click(function(){
  console.log("Any li was clicked");
});

$("li").click(function(){
  $(this).text("I was changed!")
});

// Key press

// $("input").eq(0).keypress(function(){
//   $("h3").toggleClass("turnBlue");
// });

$("input").eq(0).keypress(function(event){
  // console.log(event);
  if (event.which === 13) {
    $("h3").toggleClass("turnBlue");
  }
});

// On

$("h1").on("mouseenter", function(){
  $(this).toggleClass("turnBlue");
})

// Animations

$("input").eq(1).on("click", function(){
  $(".container").fadeOut(2000);
})
