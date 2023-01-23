$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.contact-page-section').offset().top }, 'slow');
      return false;
    });
  });