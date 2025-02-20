(function($) {
    "use strict";
    new WOW().init();

    AOS.init();



    /* Nice Select  */

    $('select.shop-sort').niceSelect();

    /*
        venobox
    */
    $('.venobox').venobox();
    /*

    /* Commons Variables */

    var $window = $(window),
        $body = $("body");


 /* Cart Plus Minus Button */

    var CartPlusMinus = $(".cart-plus-minus");
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });


      /* New Product Slider  */

     var productSlider = new Swiper('.new-product-slider.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1500,
        loop: true,

        // Navigation arrows

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

        /* Product Details Slider  */

/*     var zoomThumb = new Swiper('.zoom-thumbs', {
        spaceBetween: 14,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var zoomTop = new Swiper('.zoom-top', {
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: zoomThumb
        }
    }); */

        /* Product Details Slider  */

/*     var zoomThumb = new Swiper('.zoom-thumbs-2', {
        spaceBetween: 0,
        slidesPerView: 4,
        direction: 'vertical',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var zoomTop = new Swiper('.zoom-top-2', {
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: zoomThumb
        }
    });
     */

})(jQuery);


  /*** Swiper Slider ***/
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}); 


/* Featured-products-slider */

$(document).ready(function(){
    $("#featured-products-slider").owlCarousel({
        loop: true,
        margin: 20, 
        nav: true,
        dots: true,
        autoWidth: false, 
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });
});

/* best-seller */

$(document).ready(function(){
    $("#products-slider").owlCarousel({
        loop: true,
        margin: 20, 
        nav: true,
        dots: true,
        autoWidth: false, 
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });
});
/* Essentail Items  */

$(document).ready(function() {
    $("#products-slider").owlCarousel({
        items: 4, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        },
        nav: true,
        navText: ["", ""],
        dots: true,
        autoplay: true,  
        autoplayTimeout: 3000, 
        autoplayHoverPause: true,
        smartSpeed: 1000, 
        loop: true 
    });
});




 