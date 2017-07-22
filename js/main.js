jQuery(document).ready(function($) {
    $("[data-fancybox]").fancybox({
    });

    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });
    $('.slider-brands').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay:true,
  autoplaySpeed:5000,
 responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]

    });


});