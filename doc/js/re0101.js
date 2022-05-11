$(function(){
    //-------------
    $(".visual-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
    });


    //모바일 nav open
    $(".mopen").on("click", function(){
        $("nav").toggleClass("on")
    });


    $("nav>ul>li").on("click", function(){
        if($("nav").hasClass("on")){
            $(".submenu").hide();
            $(this).find(".submenu").show();
        }
    });

    $(window).on("resize", function(){
        $("nav").removeClass("on");
        $(".submenu").removeAttr("style")
    });



    //------------
});