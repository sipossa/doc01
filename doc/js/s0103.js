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
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        //dots:true,
        //prevArrow:"<i class='xi-angle-left-thin'></i>",
        //nextArrow:"<i class='xi-angle-right-thin'></i>",
    });
    
    let slideDots=$(".slick-dots li");
    let slideItem=$(".visual-slider figure");

    slideItem.eq(1).addClass("on");
    mainSlider.on("afterChange", function(event,slick,current){
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current+1).addClass("on").siblings().removeClass("on");
    });

    let slidePrev=$("#main-visual i.xi-angle-left-thin");
    let slideNext=$("#main-visual i.xi-angle-right-thin");
    let slidePause=$("#main-visual i.xi-pause");
    let slidePlay=$("#main-visual i.xi-play");
    
    slidePrev.on("click", function(){
        mainSlider.slick("slickPrev")
    });
    slideNext.on("click", function(){
        mainSlider.slick("slickNext")
    });
    slidePause.on("click", function(){
        mainSlider.slick("slickPause")
    });
    slidePlay.on("click", function(){
        mainSlider.slick("slickPlay")
    });
    slideDots.on("click", function(){
        let idx=$(this).index();
        mainSlider.slick("slickGoTo", idx)
    });


    //사이트맵 만들기
    let allMenu=$(".gnb-menu").clone();
    allMenu.find("*").removeAttr("class");
    allMenu.addClass("total").removeClass().attr({id:"allMenu"});
    $("nav").append(allMenu);

    $("nav .xi-bars").on("click", function(){
        $("#allMenu").toggle();
    });

    //검색버튼
    $("nav .xi-search").on("click", function(){
        $("header .search").slideToggle();
    });   


});