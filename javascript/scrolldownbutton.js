$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.homeP2').offset().top }, 'slow');
      return false;
    });
  });