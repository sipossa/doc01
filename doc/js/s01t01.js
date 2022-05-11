$(function(){
    //-------------
    $(".visual-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
    });

    //tab01
    $(".tab01 a").on("click", function(){
        let idx=$(this).index();
        //console.log(idx);
        $("#content .tab01 .tab-item").eq(idx).show().siblings().hide();
    });

    //tab02
    $(".tab02 a").on("click", function(){
        let idx=$(this).index();
        //console.log(idx);
        $("#content .tab02 .tab-item").eq(idx).addClass("on").siblings().removeClass("on")
    });
    
    //텝 슬라이드
    $(".event-slider").slick({
        arrows:false,
        //autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
    });

    $(".event-slider").eq(0).slick("slickPlay");
    //슬라이드 탭
    $("#event li").on("click", function(){
        let idx=$(this).index();
        //console.log(idx);
        $(this).addClass("on").siblings().removeClass("on");
        $(".event-slider").eq(idx).addClass("on").siblings().removeClass("on");
        $(".event-slider").eq(idx).slick("slickPlay").siblings().slick("slickPause")
    });

    //------------
});