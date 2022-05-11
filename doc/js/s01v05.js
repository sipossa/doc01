$(function(){
    //패밀리사이트
    $("#family_link select").on("change", function(){
        let lnk=$(this).val();
        if(lnk) window.open(lnk);
    });

    //탑팝업 닫기 버튼
    $(".top-banner i").on("click", function(){
        $(".top-banner").slideUp();
    });

    //메인 슬라이드
    let mainSlider=$(".visual-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true,
        speed:800,
        //useCSS:false,
    });
    
    let slideDots=$(".slick-dots li");
    let slideItem=$(".visual-slider figure");

    slideItem.eq(0).addClass("on");
    mainSlider.on("afterChange", function(event,slick,current){
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current).addClass("on").siblings().removeClass("on");
    });

    let slidePrev=$("#main-visual i.xi-angle-left-thin");
    let slideNext=$("#main-visual i.xi-angle-right-thin");
    
    slidePrev.on("click", function(){
        mainSlider.slick("slickPrev")
    });
    slideNext.on("click", function(){
        mainSlider.slick("slickNext")
    });
    slideDots.on("click", function(){
        let idx=$(this).index();
        mainSlider.slick("slickGoTo", idx)
    })


});