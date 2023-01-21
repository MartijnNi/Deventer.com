$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.vacaturen2').offset().top }, 'slow');
      return false;
    });
  });