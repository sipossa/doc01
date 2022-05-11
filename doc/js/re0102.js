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

    $(".mopen").on("click", function(){
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
    });

    $(".gnb-menu>li>a").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).parent().siblings().find("ul").removeClass("on")
            $(this).next().toggleClass("on");
        }
    });

    $(window).on("resize", function(){
        $(".gnb-submenu").removeClass("on");
    })

});