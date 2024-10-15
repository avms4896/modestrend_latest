$(document).ready(function() {
  console.log('Document ready1');

  jQuery('.sub-category-list').find('ul li').each(function() {
      jQuery(this).on('click', function() {
          console.log('just test');
          jQuery('.filter-option').find('.filters__item-title').find('.filters__count').text('');
          
          jQuery('.filters__listings').find('ul li').each(function() {
              jQuery(this).removeClass('active');
          });
      });
  });
});

$(document).ready(function () {
  console.log('Document ready');


  $('#nav-icon2').click(function () {
    console.log('Nav icon clicked');
    $(this).toggleClass('open');
    $('.megamenu').toggleClass('active');
    $('body').toggleClass('menuopen');
  });

  $('.nav-menu > li').click(function (event) {
    event.stopPropagation();
    console.log('Nav menu item clicked');
    var $submenu = $(this).children('.mega-menu');
    $submenu.toggleClass('visible');

    if ($submenu.hasClass('visible')) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }

    $('.nav-menu > li').not($(this)).removeClass('active').children('.mega-menu').removeClass('visible');
  });

  $(document).on('click', '.back-btn', function (event) {
    event.stopPropagation();
    console.log('Back button clicked');
    var $submenu = $(this).closest('.mega-menu');
    $submenu.removeClass('visible');
    $submenu.parent().removeClass('active');
  });

  $('.banner-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  $('.social-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
        loop: true,
        dots: false,
      }
    }
  });

  $('.wedding-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsiveClass: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  $('.latests-carousel').owlCarousel({
    loop: true,
    margin: 16,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: true,
        dots: false,
      }
    }
  });

  $('.store-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  $(".trigger").click(function () {
    console.log('Modal trigger clicked');
    $("#myModal").fadeIn(400);
  });

  $(".close").click(function () {
    console.log('Modal close clicked');
    $("#myModal").fadeOut(400);
  });

  $(window).click(function (event) {
    if ($(event.target).is("#myModal")) {
      console.log('Modal background clicked');
      $("#myModal").fadeOut(400);
    }
  });
});
