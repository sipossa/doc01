$(function(){
    //패밀리사이트
    $("#family_link select").on("change", function(){
        let lnk=$(this).val();
        if(lnk) window.open(lnk);
    });

    //스크롤을 가장 위로
    $(".to-top").on("click", function(){
        $("html,body").animate({scrollTop:0},1000)
    });

    $(window).on("scroll", function(){
        let wct=$(window).scrollTop();
        const tTop=$(".to-top")
        wct > 500 ? tTop.fadeIn() : tTop.fadeOut();
    })

});//---------