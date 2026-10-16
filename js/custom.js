(function ($) {

  "use strict";

    // PRE LOADER
    // Hide on window load, but never keep visitors staring at a spinner for more than 2.5s.
    function hidePreloader() { $('.preloader').fadeOut(400); }
    $(window).on('load', hidePreloader);
    setTimeout(hidePreloader, 2500);


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    var $navbar = $('.navbar-fixed-top');
    var $backToTop = $('.back-to-top');

    function onScroll() {
      var y = $(window).scrollTop();
      $navbar.toggleClass('top-nav-collapse', y > 50);
      $backToTop.toggleClass('is-visible', y > 700);
    }
    $(window).on('scroll', onScroll);
    onScroll();


    // SLIDERS
    $('.hero-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 1000
    });

    $('.testimonial-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplayHoverPause: true,
      smartSpeed: 800
    });


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    });


    // MAGNIFIC POPUP
    var popupOptions = {
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: { enabled: true },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    };

    // Gallery: the delegate selector is evaluated on click, so the lightbox
    // only steps through the photos that match the active filter.
    $('#gallery-grid').magnificPopup($.extend({}, popupOptions, {
      delegate: 'a.gallery-item:not(.is-hidden):not(.is-collapsed)'
    }));


    // GALLERY FILTER + SHOW MORE
    var GALLERY_PAGE = 12;
    var $galleryItems = $('#gallery-grid .gallery-item');
    var $moreBtn = $('#gallery-more');
    var galleryFilter = 'all';
    var galleryExpanded = false;

    function renderGallery() {
      var shown = 0;
      $galleryItems.each(function () {
        var $item = $(this);
        var cats = ($item.data('cat') || '').split(' ');
        var match = galleryFilter === 'all' || $.inArray(galleryFilter, cats) !== -1;
        $item.toggleClass('is-hidden', !match);
        if (match) {
          shown++;
          $item.toggleClass('is-collapsed', !galleryExpanded && shown > GALLERY_PAGE);
        } else {
          $item.removeClass('is-collapsed');
        }
      });
      $moreBtn.parent().prop('hidden', galleryExpanded || shown <= GALLERY_PAGE);
    }

    $('.filter-btn').on('click', function () {
      var $btn = $(this);
      galleryFilter = $btn.data('filter');
      galleryExpanded = false;
      $('.filter-btn').removeClass('is-active').attr('aria-pressed', 'false');
      $btn.addClass('is-active').attr('aria-pressed', 'true');
      renderGallery();
    });

    $moreBtn.on('click', function () {
      galleryExpanded = true;
      renderGallery();
    });

    renderGallery();


    // VIDEO REELS
    // Muted reels autoplay while on screen (unless the visitor prefers reduced motion)
    // and pause when scrolled away, so only visible videos use data.
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setPlaying($reel, playing) {
      var video = $reel.find('video')[0];
      if (playing) {
        var p = video.play();
        if (p && p.catch) { p.catch(function () {}); }
      } else {
        video.pause();
      }
    }

    $('.reel').each(function () {
      var $reel = $(this);
      var video = $reel.find('video')[0];
      var $toggle = $reel.find('.reel-toggle');

      $(video).on('play', function () {
        $reel.addClass('is-playing');
        $toggle.attr('aria-label', 'Pause video').find('.fa').removeClass('fa-play').addClass('fa-pause');
      }).on('pause', function () {
        $reel.removeClass('is-playing');
        $toggle.attr('aria-label', 'Play video').find('.fa').removeClass('fa-pause').addClass('fa-play');
      });

      $toggle.add(video).on('click', function () {
        $reel.data('user-paused', !video.paused);
        setPlaying($reel, video.paused);
      });
    });

    if (!reduceMotion && 'IntersectionObserver' in window) {
      var reelObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var $reel = $(entry.target);
          if (entry.isIntersecting && !$reel.data('user-paused')) {
            setPlaying($reel, true);
          } else if (!entry.isIntersecting) {
            setPlaying($reel, false);
          }
        });
      }, { threshold: 0.6 });

      $('.reel').each(function () { reelObserver.observe(this); });
    }


    // SMOOTHSCROLL (in-page links only, so tel:/mailto:/external links behave normally)
    $(document).on('click', 'a[href^="#"]', function(event) {
      var href = $(this).attr('href');
      if (href.length < 2) { return; }
      var $target = $(href);
      if (!$target.length) { return; }
      event.preventDefault();
      $('html, body').stop().animate({
        // Fixed offset = height of the collapsed navbar (it shrinks once you scroll).
        scrollTop: $target.offset().top - 78
      }, reduceMotion ? 0 : 800);
    });


    // FOOTER YEAR
    $('#year').text(new Date().getFullYear());


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
