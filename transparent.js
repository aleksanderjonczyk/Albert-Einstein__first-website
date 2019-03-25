$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 650) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});

