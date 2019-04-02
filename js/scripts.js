// applies to index.html
$(document).ready(function () {
  $(".clickable").click(function () {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").fadeToggle();
  });

//applies to classes.html
  $("button#green").click(function () {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function () {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function () {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  //applies to display.html
  $("button#dark").click(function () {
    $("body").removeClass();
    $("body").addClass("dark");
  });

  $("button#light").click(function () {
    $("body").removeClass();
    $("body").addClass("light");
  });

  //applies to dom.html
  
  $("button#hello").click(function () {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function () {
      $(this).remove();

    });
    $("ul#webpage").children("li").first().click(function () {
      $(this).remove();
    });
    
  });
  $("button#goodbye").click(function () {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function () {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function () {
      $(this).remove();
    });
  });

  $("button#stop").click(function () {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function () {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function () {
      $(this).remove();
    });
  });
  
  // applies to dog.html
  $("button#before").click(function(){
    $('p').before('<img src="img/walrus.jpg" alt="dog">');
    $('.container').children('img').click(function () {
      $(this).remove();
    });
  });

  $("button#after").click(function () {
    $('p').after('<img src="img/walrus.jpg" alt="dog">');
    $('.container').children('img').click(function () {
      $(this).remove();
    });
  });
});