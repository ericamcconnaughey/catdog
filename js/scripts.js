$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>WoofWoof</li>");
    $("button#meow").after('<img src="img/cat.jpg" />');
    $("img").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>Woof</li>");
    $("ul#cat").prepend("<li>*hiss*</li>");
    $("button#woof").after('<img src="img/dog.jpg" />');
    $("img").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

});
