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
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true,
        speed:800,
        //useCSS:false,
    });

    
    function txtAni(){
        var Atxt=$(".slogan-text h2");
        var txt=Atxt.text().split("");
        Atxt.text("");
        $.each(txt, function(idx){
            Atxt.append("<span>"+txt[idx]);
            Atxt.find("span").css({position:"relative",opacity:0,left:100})
            .delay(300*idx)
            .animate({opacity:1,left:0},500)
        });       
    }
    txtAni()
    
    var slideDots=$(".slick-dots li");
    var slideItem=$(".visual-slider figure");

    slideItem.eq(0).addClass("on");
    mainSlider.on("afterChange", function(event,slick,current){
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current).addClass("on").siblings().removeClass("on");
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
    })


});