$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.aboutSection').offset().top }, 'slow');
      return false;
    });
  });