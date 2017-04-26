$(document).ready(function() {

  $("button#cat").click(function() {
    $(".text-field").append("<p class=\"cat\">Meow!</p>");
    setTimeout(function() {
      $(".text-field").append("<p class=\"dog\">Bark!</p>");
    }, 1500);
  });

  $("button#dog").click(function() {
    $(".text-field").append("<p class=\"dog\">Bark!</p>");
    setTimeout(function() {
      $(".text-field").append("<p class=\"cat\">Meow!</p>");
    }, 1000);
  });
});
