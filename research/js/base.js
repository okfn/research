$(document).ready(function() {
  $('.cover .title, .cover .sub-title, .cover .author, .cover .affiliation').lettering('words');
  var contentsNav = $('.contents nav');

  $(window).scroll(debounce(function(){
    if ($(window).scrollTop() >= $(window).height()) {
      contentsNav.addClass('scrolled-to');
    }
    else {
      contentsNav.removeClass('scrolled-to');
    }
  }, 25));

  $('.toggle-contents').on('click', function(e) {
    contentsNav.toggleClass('show');
    e.preventDefault();
  });

  function debounce(fn, milliseconds) {
    var timer;

    return function() {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(fn, milliseconds);
    }
  }
});
