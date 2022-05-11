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
            let subMenuNum=$(this).next().find("li").length;
            let subMenuChidrenHeight=$(this).next().find("li").height();
            let subMenuHeight=subMenuNum*subMenuChidrenHeight;
            let thisHeight=$(this).next().height();
            
            if(!thisHeight){            
                $(this).next().css({height:subMenuHeight});                               
            }else{                
                $(this).next().css({height:0});                               
            } 
            
            $(this).parent().siblings().find("ul").css({height:0});
            return false;
        }
    });

    $(window).on("resize", function(){
        $(".gnb-submenu").removeAttr("style");
    })

});