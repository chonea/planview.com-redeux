// JavaScript File

(function($) {

  // Scroll to
  function scrollTo(target) {
    if (target.length) {
      var adminHeight = 0;
      if ($('#wpadminbar').css('position') == 'fixed') adminHeight = $('#wpadminbar').outerHeight();

      $('html, body').animate({
        scrollTop: $(target).offset().top - adminHeight
      }, 1000);
    }
  }

  $(document).ready(function() {

    $('[data-toggle="play-vid"]').click(function () {
      $(this).hide();
      $(this).closest('.row').find('.vid-container').removeClass('hidden');
      var videoID = $(this).data('id'),
          videoSRCauto = 'https://www.youtube.com/embed/' + videoID + '?autoplay=1&rel=0';
      $(this).closest('.row').find('.vid-container iframe').attr('src', videoSRCauto);
    });

    $('.show-all').click(function (e) {
      e.preventDefault();
      $(this).removeClass('visible-xs-block').hide();
      $(this).closest('.xt-gutter').find('.hidden-xs').removeClass('hidden-xs');
    });
    
    $('#hero .scroll-down').on('click', function() {
      scrollTo('#main-content');
    });

  });

  function closeNav(init) {
    if ($(window).width() < 751) {
      $('.banner .nav-stacked li.active').removeClass('active');
      $('.tab-stacked-content').hide();
    }
  }

  closeNav(true);

  $(window).resize(function() {
    closeNav(false);
  });

})(jQuery);
