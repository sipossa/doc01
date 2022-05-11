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
    var vsd=$(".visual-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        //pauseOnHover:false,
        //pauseOnFocus:false,
        fade:true,
        speed:400,
    });

    $(".slider-tab>a").on("mouseover", function(){
        var idx=$(this).index();
        vsd.slick("slickGoTo", idx-1);
        $(this).addClass("on").siblings().removeClass("on");
    });
    $("#slider-bar").addClass("on");
    $(".slider-tab>a").eq(0).addClass("on");
    vsd.on("afterChange", function(e,s,current){
        $(".slider-tab>a").eq(current).addClass("on").siblings().removeClass("on");
        $("#slider-bar").addClass("on");
    });
    vsd.on("beforeChange", function(e,s,current){
        $("#slider-bar").removeClass("on");
    })
    // $(".slider-tab>a").on("mouseleave", function(){
    //     vsd.slick("slickGoTo", 0)
    // })

});