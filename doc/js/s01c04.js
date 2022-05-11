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
        //autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        //dots:true,
        //prevArrow:"<i class='xi-angle-left-thin'></i>",
        //nextArrow:"<i class='xi-angle-right-thin'></i>",
    });
    
    var slideDots=$(".slick-dots li");
    var slideItem=$(".visual-slider figure");

    mainSlider.on("afterChange", function(event,slick,current){
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current+1).addClass("on").siblings().removeClass("on");
    });

    var slidePrev=$("#main-visual i.xi-angle-left-thin");
    var slideNext=$("#main-visual i.xi-angle-right-thin");
    
    slidePrev.on("click", function(){
        mainSlider.slick("slickPrev")
    });
    slideNext.on("click", function(){
        mainSlider.slick("slickNext")
    });
    slideDots.on("click", function(){
        var idx=$(this).index();
        mainSlider.slick("slickGoTo", idx)
    });

    //content-slider
    var contentSlider01=$(".content-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:400,
        //centerMode: true,
        //variableWidth: true,
        //https://cubic-bezier.com/ 베지어 곡선 만들기
        //cssEase:"cubic-bezier(.69,-1.31,.74,1.17)",
        cssEase:"cubic-bezier(0,0,.58,1)",
    });  

    var contentPrev=$("#content01 i.xi-angle-left-thin");
    var contentNext=$("#content01 i.xi-angle-right-thin");
    
    contentPrev.on("click", function(){
        contentSlider01.slick("slickPrev")
    });
    contentNext.on("click", function(){
        contentSlider01.slick("slickNext")
    });

    var contentItem=$(".content-slider figure");
    contentItem.eq(3).addClass("on")
    contentSlider01.on("afterChange", function(event,slick,current){
        contentItem.eq(current+3).addClass("on").siblings().removeClass("on");
    });

});