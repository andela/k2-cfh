$(() => {
  //  Show signin modal
  $(document).on('click', '#signInModalShow,#signInModalShow2', () => {
    $('#main-overlay').css('display', 'block');
    $('#main-overlay-top').css('display', 'block');
    $('#signInWhiteBox').css('display', 'block');
  });

  //  Hide white box
  $(document).on('click', '#main-overlay-top', (e) => {
    if ($(this).is(e.target)) {
      $('#main-overlay,#main-overlay-top').css('display', 'none');
      $('.main-whitebox').css('display', 'none');
    }
  });

  //  Shoe signup modal
  $(document).on('click', '#signUpModalShow', () => {
    $('#main-overlay').css('display', 'block');
    $('#main-overlay-top').css('display', 'block');
    $('#signUpWhiteBox').css('display', 'block');
  });

  //  Power avatars
});
