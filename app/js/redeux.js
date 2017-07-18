// JavaScript File

(function($) {

  /* Scroll to nav target */
  $('.nav-menu a[href*="#"]:not([href="#"])').click(function(e) {
    //console.log('nav clicked');
    e.preventDefault();
    var adminHeight = 0;
    if ($('#wpadminbar').css('position') == 'fixed') adminHeight = $('#wpadminbar').outerHeight();
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - adminHeight
        }, 1000);
        return false;
      }
    }
  });
  /* --- */
  
  
  /* Remove focus from buttons */
  $('.button-cta').click(function(){
    $(this).blur();
  });
  /* --- */
  

  /* Start carousels */
  if (typeof carousel !== 'undefined' && $.isFunction(carousel)) {
    $('.carousel').carousel();
  }
  /* --- */


  /* Make stacked tabs responsive */
  function checkWidth(init) {
    $('.tab-stacked-content').hide();
    $('.tab-content').hide();
    if ($(window).width() < 751) {
      $('.tab-nav ul.nav-stacked li').each(function() {
        $(this).find('.tab-stacked-content').html($($(this).find('a').attr('href')).html());
        if ($(this).hasClass('active')) {
          $(this).find('.tab-stacked-content').show();
        }
      });
    }
    else {
      $('.tab-stacked-content').hide();
      $('.tab-content').show();
      if (!init) {
        /*
        $('.tab-nav ul.nav-stacked li > a').each(function() {
          $(this).parent().find('.tab-stacked-content').append($($(this).attr('href')));
        });
        */
      }
    }
  }

  checkWidth(true);

  $(window).resize(function() {
    /*If browser resized, check width again */
    checkWidth(false);
  });
  
  $('.tab-nav ul.nav-stacked li > a').click(function(e) {
    if ($(this).parent('li').hasClass('active')) {
      e.preventDefault();
    } else {
      if ($(window).width() < 751) {
        e.preventDefault();
        $('.tab-content').hide();
        $('.tab-stacked-content').hide();
        $(this).next('.tab-stacked-content').slideDown(500);
      } else {
        $('.tab-stacked-content').hide();
        $('.tab-content').show();
      }
    }
  });
  /* --- */
  
  
  /* Stop playing video if Bootstrap modal is closed */
  $('#modal-video').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr('src');
    $if.attr('src', '/empty.html');
    $if.attr('src', src);
  });
  /* --- */
  
  
  /* Sticky nav */
  function stickyHandler(stickyTarget, scrollTarget) {
    if (stickyTarget && $(stickyTarget).length) {
      var stickyObj = $(stickyTarget);
      if (scrollTarget && $(scrollTarget).length) {
        var scrollTargetObj = $(scrollTarget);
      } else {
        var scrollTargetObj = stickyObj;
      } 
      var scrollTargetOffset = scrollTargetObj.offset();
      var windowPosition = $(window).scrollTop();
      if (windowPosition >= scrollTargetOffset.top) {
        stickyObj.addClass('sticky-fixed');
        if (stickyObj.hasClass('sticky-hidden')) {
          stickyObj.slideDown(200);
        }
      } else {
        if (stickyObj.hasClass('sticky-hidden')) {
          stickyObj.slideUp(200);
        } else {
          stickyObj.removeClass('sticky-fixed');
        }
      }
    }
  }

  $(window).scroll(function() {
    if (!$('.redeux-masthead').hasClass('fixed')) {
      stickyHandler( '#sticky', '#sticky-anchor' );
    }
  });
  
  $(window).resize(function() {
    if (!$('.redeux-masthead').hasClass('fixed')) {
      stickyHandler( '#sticky', '#sticky-anchor' );
    }
  });
  /* --- */

  
  /* Slide covering button out of the way for single hidden field forms */
  $('.button-cover').click(function(e) {
    e.preventDefault();
    $(this).hide('slide', {direction: 'right'}, 1000);
  });
  /* --- */
  
  
  /* Hide or show long details on the Solutions Detail and Products Detail pages */
  function hideDetail () {
    console.log('hideDetail');
    $('.solutions-detail-benefit').each(function() {
      var thisParent = $(this);
      thisParent.children('.detail-wrapper').each(function() {
        var wrapperHeight = $(this).children('p').first().outerHeight();
        // If 3 lines or less, hide the more link (desktop only)
        // Defaulting to show-more for now since 
        if (wrapperHeight <= 84) {
          thisParent.find('.more-wrapper').hide();
          $(this).find('.detail-mask').hide();
          thisParent.find('.detail-wrapper').removeClass('show-less').addClass('show-more');
        }
      });
    });
    $('.product-benefit').each(function() {
      var thisParent = $(this);
      thisParent.children('.detail-wrapper').each(function() {
        var wrapperHeight = $(this).innerHeight();
        // If 4 lines or less, hide the more link (mobile only)
        // Defaulting to show-more for now since 
        
        //console.log('wrapperHeight '+wrapperHeight+' window.innerWidth '+window.innerWidth);
        
        if (wrapperHeight <= 130 || window.innerWidth >= 768) {
          console.log('hide more');
          thisParent.find('.more-wrapper').hide();
          $(this).find('.detail-mask').hide();
          thisParent.find('.detail-wrapper').removeClass('show-less').addClass('show-more');
        }
      });
    });
  }
  
  hideDetail();
  
  $('a.more-link').click(function(e){
    e.preventDefault();
    $(this).parent().prev('.detail-wrapper').removeClass('show-less').addClass('show-more');
    $(this).parent().hide();
  });
  
  $(window).resize(function() {
    hideDetail();
  });
  /* --- */
  
  
  /* Prevent default Bootstrap close functionality when nested Bootstrap stuctures are clicked */
  $('.redeux-masthead .dropdown-wrapper').on('click', '.nav-tabs a', function() {
    $(this).closest('.dropdown').addClass('prevent-close');
  });
  
  $('#main-menu-navigation > li').on('hide.bs.dropdown', function(e) {
    if ($(this).hasClass('prevent-close')) {
      e.preventDefault();
    }
    $(this).removeClass('prevent-close');
  });
  /* --- */
  
  
  /* Mobile breadcrumb handler  */
  $('.breadcrumbs-banner nav').append('<i class="icon-options" data-toggle="collapse" data-target=".breadcrumbs-banner .list-inline"></i>');
  $('.breadcrumbs-banner .list-inline').addClass('collapse');
  /* --- */
  
  
  /* Position main menu as fixed when open (mobile only) */
  $('.redeux-masthead .navbar-toggle').click(function(e) {
    var masthead = $(this).closest('.redeux-masthead');
    if (masthead.hasClass('fixed')) {
      masthead.removeClass('fixed');
      masthead.removeClass('mobile-menu');
    } else {
      masthead.addClass('fixed');
      masthead.addClass('mobile-menu');
    }
  });
  /* --- */
  
  
  /* Position main menu as fixed when open (small screens and above) */
  $('.redeux-masthead #main-menu-navigation > li').click(function(e) {
    var thisMenu = $(this);
    var masthead = $(this).closest('.redeux-masthead');
    
    //if (!masthead.hasClass('mobile-menu')) {
      if (thisMenu.hasClass('dropdown')) {
        
        if (thisMenu.hasClass('open')) {
          //console.log('dropdown is open');
          if (masthead.hasClass('fixed') && !$(e.target).parent().parent().hasClass('nav-tabs')) {
            masthead.removeClass('fixed');
            
          }
        } else {
          masthead.addClass('fixed');
          
        }
      } else {
        
        masthead.removeClass('fixed');
      }
    //}
  });
  
  $('.redeux-masthead .nav-tabs').click(function(e){
    //e.stopPropagation();
    //console.log('//nav-tabs event stopPropogation');
  });
  /* --- */
  
  
  /* Prevent # in URL for sub-menus (mobile only) */
  $('.redeux-masthead #mobile-menu-navigation a.mobile-submenu').click(function(e) {
    e.preventDefault();
    // return false;
  });
  /* --- */
  
  
  /* Position main menu as fixed when open (mobile only) */
  $('.redeux-masthead').click(function(e) {
    var masthead = $(this);
    if ($(e.target).is('header')) {
      masthead.removeClass('fixed');
      masthead.removeClass('mobile-menu');
    }
  });
  /* --- */
  
  
  /* Search toggle */
  $('.redeux-masthead #utility-menu-search > a.search-toggle').each(function() {
    $(this).click(function(e) {
      if ($('#utility-menu-search').hasClass('open')) {
        $('#main-menu-navigation').show();
        $('#utility-menu-worldwide').show();
        $(this).removeClass('toggle-close');
        $('.navbar-header .contact-phone').show();
      } else {
        $('#main-menu-navigation').hide();
        $('#utility-menu-worldwide').hide();
        $(this).addClass('toggle-close');
        $('.navbar-header .contact-phone').hide();
      }
    });
  });
  /* --- */
  
  
  /* Search terms*/
  $('.redeux-masthead form.search-form .search-terms a').click(function(e) {
    e.preventDefault();
    $(this).trigger('blur');
    
    $(this).closest('form.search-form').find('input.search-field').val($(this).attr('data-search-value'));
    
    if (!$(this).closest('form.search-form').find('button.search-submit').hasClass('active')) {
      $(this).closest('form.search-form').find('button.search-submit').addClass('active');
    }
  });
  /* --- */
  
  
  /* Search button highlight*/
  $('.redeux-masthead form.search-form input.search-field').keyup(function() {
    if ($(this).val() != '') {
      $(this).closest('form.search-form').find('button.search-submit').addClass('active');
    } else {
      $(this).closest('form.search-form').find('button.search-submit').removeClass('active');
    }
  });
  /* --- */
  
  
  /* Prevent default Bootstrap close functionality when nested Bootstrap stuctures are clicked */
  $('.redeux-masthead form.search-form .search-terms a').click(function() {
    $(this).closest('.dropdown').addClass('prevent-close');
  });
  
  $('#utility-menu-navigation > li').on('hide.bs.dropdown', function(e) {
    if ($(this).hasClass('prevent-close')) {
      e.preventDefault();
    } else {
      $('#main-menu-navigation').show();
      $('#utility-menu-worldwide').show();
      $('#utility-menu-navigation .search-toggle').removeClass('toggle-close');
      $('.navbar-header .contact-phone').show();
    }
    $(this).removeClass('prevent-close');
  });
  /* --- */
  
  
  /* Start touch slider for tablet view (currently homepage only) */
  var touchScroll = false;
  function touchScrollStart(){
    if (window.innerWidth >= 768 && window.innerWidth < 992) {
      // run test on initial page load
      $('.touch-scroll').smoothTouchScroll({
        continuousScrolling: false,
      });
      touchScroll = true;
    } else {
      if (touchScroll === true) {
        $('.touch-scroll').smoothTouchScroll('destroy');
        touchScroll = false;
      }
    }
  }
  if ($('body').hasClass('home')) {
    touchScrollStart();
    $(window).resize(touchScrollStart);
  }
  
  
  /* Fix the page height on pages using the secondary page template */
  function adjustSecondaryHeight() {
		
    if (window.innerWidth >= 768) {
      $('#page-body').height($('#main').outerHeight());
    } else {
      $('#page-body').height('auto');
    }
  }
  if ($('body').hasClass('page-template-redeux-secondary') || 
		$('body').hasClass('page-template-redeux-leadership') || 
		$('body').hasClass('page-template-redeux-community') || 
		$('body').hasClass('archive-template-redeux-news') || 
		($('body').hasClass('post-type-archive-news') && $('body').hasClass('redeux')) ||
		($('body').hasClass('post-type-archive-press-release') && $('body').hasClass('redeux')) ||
		($('body').hasClass('post-type-archive-event') && $('body').hasClass('redeux')) ||
		$('body').hasClass('override-page-template-redeux-secondary')) {
		
    adjustSecondaryHeight();
    $(window).resize(adjustSecondaryHeight);
  }
  
  /* Toggle the mobile page menu on pages using the secondary page template */
  function secondaryMobileMenu() {
    $('#page-nav ul.sub-menu li.current-menu-item').removeClass('open');
    if (window.innerWidth < 768) {
      $('#page-nav ul.sub-menu li').not('.current-menu-item').slideUp();
      mobilePageMenuOpen = false;
    } else {
      $('#page-nav ul.sub-menu li').slideDown();
      mobilePageMenuOpen = false;
    }
  }
    
  if ($('body').hasClass('page-template-redeux-secondary') || 
		$('body').hasClass('page-template-redeux-leadership') || 
		$('body').hasClass('page-template-redeux-community') || 
		$('body').hasClass('archive-template-redeux-news') || 
		($('body').hasClass('post-type-archive-news') && $('body').hasClass('redeux')) ||
		($('body').hasClass('post-type-archive-press-release') && $('body').hasClass('redeux')) ||
		($('body').hasClass('post-type-archive-event') && $('body').hasClass('redeux')) ||
		$('body').hasClass('override-page-template-redeux-secondary')) {
		
    var mobilePageMenuOpen = false;
    secondaryMobileMenu();
    $(window).resize(secondaryMobileMenu);
    
    $('#page-nav ul.sub-menu li.current-menu-item a').click(function(e){
      e.preventDefault();
      if (window.innerWidth < 768) {
        if (mobilePageMenuOpen === false) {
          $('#page-nav ul.sub-menu li').slideDown();
          mobilePageMenuOpen = true;
          $('#page-nav ul.sub-menu li.current-menu-item').addClass('open');
        } else {
          $('#page-nav ul.sub-menu li').not('.current-menu-item').slideUp();
          mobilePageMenuOpen = false;
          $('#page-nav ul.sub-menu li.current-menu-item').removeClass('open');
        }
      }
    });
  }
  /* --- */
  
  
  /* Make thumbnails responsive on features carousel */
  function positionDetailThumbs() {
    var baseW = 750;
    $('#features-carousel .item.active').find('.screen-image').each(function(){
      var screenImg = $(this);
      var imgW = screenImg.outerWidth();
      /*
      if (window.innerWidth < 768) {
        var imgR = imgW / baseW * 1.5;
      } else {
        var imgR = imgW / baseW;
      }
      */
      var imgR = imgW / baseW;
      screenImg.find('.screen-image-thumb').each(function(){
        $(this).css('top', $(this).data('top'));
        $(this).css('left', $(this).data('left'));
        $(this).css('width', $(this).data('size') * imgR + 'px');
        $(this).css('height', $(this).data('size') * imgR + 'px');
        $(this).css('display', 'block');
      });
    });
  }
  positionDetailThumbs();
  $(window).resize(positionDetailThumbs);
  /* --- */
  
  
  /* Features carousel on product features pages */
  $('#features-carousel')
    .on('slide.bs.carousel', function(e) {
      if (window.innerWidth < 768) {
        //$(this).find('.slide-hidden-content').slideUp(400);
      } else {
        $(this).find('.slide-hidden-content').fadeOut(200);
      }
    })
    .on('slid.bs.carousel', function(e) {
      positionDetailThumbs();
      if (window.innerWidth < 768) {
        $(this).find('.active .slide-hidden-content').slideDown(400);
      } else {
        $(this).find('.active .slide-hidden-content').fadeIn(1000);
      }
    });
  /* --- */

})(jQuery);