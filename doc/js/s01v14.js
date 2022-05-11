$(function(){
    //패밀리사이트
    $("#family_link select").on("change", function(){
        var lnk=$(this).val();
        if(lnk) window.open(lnk);
    });

    //탑팝업 닫기 버튼
    $(".top-banner i").on("click", function(){
        $(".top-banner").slideUp();
    });

    //메인 슬라이드
    var mainSlider=$(".visual-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:6000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true,
        //https://cubic-bezier.com/
        //cssEase:"cubic-bezier(.47,.46,.93,.09)",
        speed:1600,
        //useCSS:false,
        //easing:"linear",
        //https://api.jqueryui.com/easings/
        //dots:true,
        //prevArrow:"<i class='xi-angle-left-thin'></i>",
        //nextArrow:"<i class='xi-angle-right-thin'></i>",
    });
    
    var slideDots=$(".slick-dots li");
    var slidePrev=$("#main-visual i.xi-angle-left-thin");
    var slideNext=$("#main-visual i.xi-angle-right-thin");
    
    slidePrev.on("click", function(){
        mainSlider.slick("slickPrev");        
    });
    slideNext.on("click", function(){
        mainSlider.slick("slickNext")
    });
    slideDots.on("click", function(){
        var idx=$(this).index();
        mainSlider.slick("slickGoTo", idx)
    });
    
    $(".visual-slider figure.slick-current").addClass("on");
    mainSlider.on("afterChange", function(event,slick,current){
        var slideItem=$(".visual-slider figure.slick-current");
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.addClass("on").siblings().removeClass("on");
    });





});