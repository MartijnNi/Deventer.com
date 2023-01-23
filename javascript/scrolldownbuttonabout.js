$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.page2container').offset().top }, 'slow');
      return false;
    });
  });