$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $('.logo-image').css({ 'transform': 'translate(0px, ' + wScroll / 2 + '%)'});
  $('.fore-image').css({ 'transform': 'translate(0px, -' + wScroll / 30 + '%)'});
})