$(window).scroll(function() {
    $("img").each(function() {
      var position = $(this).offset().top;
      var scrollPosition = $(window).scrollTop() + $(window).height();
  
      if (scrollPosition > position) {
        $(this).addClass("visible");
      }
    });
  });