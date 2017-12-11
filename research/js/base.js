$(document).ready(function() {
  $('.cover .title, .cover .sub-title, .cover .author, .cover .affiliation').lettering('words');

  $(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height()) {
      $('.contents nav').addClass('scrolled-to');
    }
    else {
      $('.contents nav').removeClass('scrolled-to');
    }
  });

  $('.toggle-contents').on('click', function(e) {
    $('.contents nav').toggleClass("show");
    e.preventDefault();
  });

});
