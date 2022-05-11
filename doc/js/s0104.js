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
    $(".visual-slider").slick({
        //arrows:false,
        //autoplay:true,
        //autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        prevArrow:"<i class='xi-angle-left-thin'></i>",
        nextArrow:"<i class='xi-angle-right-thin'></i>",
    });

    //.content-slider
    $(".content-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        //pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        //rows:2,
        //slidesPerRow:3,
    });    

});