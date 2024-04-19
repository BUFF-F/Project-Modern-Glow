(function($){
    "use strict";
    new Window().init();

    $(".cart_link>a").on("click", function(){
        $(".mini_cart").addClass("active");
    });
    $(".mini_cart.close").on("click", function(){
        $(".mini_cart").removeClass("active");
    });


    $(window).on("scroll", function(){
        var scroll = $(window).scrollTop();
        if (scroll <100) {
            $(".sticky-header").removeClass("sticky");}
        else {
            $(".sticky-header").addClass("sticky");}

    });
    })(jQuery);