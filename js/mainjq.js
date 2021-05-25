
// $(".slider-one").owlCarousel({
//   margin: 10,
//   nav: true,
//   dots: false,
//   autoHeight: false,
//   navText : ["<i class='fa fa-chevron-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });

  $("#last_slider").owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    autoHeight: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3
      },
    },
  });


$(".man-one").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoHeight: false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2
    },
  },
});


$("#three_col_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText : ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: true,
      navText : ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"]
    },
    600: {
      items: 1,
      nav: true,
      navText : ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"]
    },
    1000: {
      items: 3,
      nav: true,
      navText : ["<i class='fal fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"]
    },
  },
});

$(window).scroll(function() {    

  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
      $("body").addClass("sticky-header");
  }
  else{
    $("body").removeClass("sticky-header");
  }
});

// Read More 
$(document).ready(function () {
 $(".content").hide();
  $(".show_hide").on("click", function (e) {
      e.preventDefault();
      var txt =  $(this).parents('.read_more').find('.content').is(':visible') ? 'Lees verder' : 'Inklappen';
      console.log(txt);
      $(this).text(txt);
      $(this).parents('.read_more').find('.content').slideToggle(200);
 
     
  });
});



// (function($) {

  /*-----------Background Set ---------*/
  // $('.set-bg').each(function() {
  //   var bg = $(this).data('setbg');
  //   $(this).css('background-image', 'url(' + bg + ')');
  // });

  /*-----------Hero section-------*/
  // function hero_section() {
  //   if ($(window).width() > 768) {
      
  //     var ps_w = $('.page-section').innerWidth();
  //     $('.hs-item').width(ps_w / 3);
  //     var trackW = (($('.hs-item').width()) * $('.hs-item').length) + ($('.hs-item').length * 50);
  //     $('.hero-track').width(trackW);

  //     var hs_width =  $(window).innerHeight() - 0;
  //     $('.hs-item').height(hs_width);

  //     $(".hero-scroll").niceScroll({
  //       cursorborder:"",
  //       cursorcolor:"#ff0000",
  //       boxzoom:false,
  //       cursorwidth: 2,
  //       autohidemode:false,
  //       background: '#eeeeee',
  //       cursorborderradius:0,
  //       railoffset: { top: 0, right: 50, left: 0, bottom: 0 },
  //       railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
  //     });
  //   }
  //   if ($(window).width() < 768) {
  //     $('.hero-track').addClass('owl-carousel')
  //     $('.hero-track').owlCarousel({
  //       loop: true,
  //       margin: 0,
  //       nav: true,
  //       items: 1,
  //       dots: false,
  //       margin: 30,
  //       navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  //     });
  //   }
  // }
//   if ($(window).width() > 768) {
//   hero_section();
//   }
//   if ($(window).width() > 768) {
//   $(window).resize(function () { 
//     hero_section();
//     site_scrollbar();
//   });
// }

// })(jQuery);


