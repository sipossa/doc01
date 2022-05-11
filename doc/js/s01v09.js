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
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        //useCSS:false,
        vertical:true,
        speed:0,
        //easing:"easeOutBounce",
        //https://api.jqueryui.com/easings/
        //dots:true,
        //prevArrow:"<i class='xi-angle-left-thin'></i>",
        //nextArrow:"<i class='xi-angle-right-thin'></i>",
    });
    
    var slideDots=$(".slick-dots li");
    var slideItem=$(".visual-slider figure");

    var direction=true;

    var slidePrev=$("#main-visual i.xi-angle-left-thin");
    var slideNext=$("#main-visual i.xi-angle-right-thin");
    
    slidePrev.on("click", function(){
        direction=false;
        mainSlider.slick("slickPrev"); 
    });
    slideNext.on("click", function(){
        direction=true;
        mainSlider.slick("slickNext")
    });
    slideDots.on("click", function(){
        var idx=$(this).index();
        mainSlider.slick("slickGoTo", idx)
    });
    slideItem.eq(1).addClass("on")
    mainSlider.on("afterChange", function(event,slick,current){
        direction=true;
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current+1).addClass("on").siblings().removeClass("on");
        slideItem.eq(current+1).css({
            zIndex:10,
            transform:"translateY(0%)",
            transition:"1s",
        }); 
      
    });
    mainSlider.on("beforeChange", function(event,slick,current,next){
        console.log(direction)
        direction ? v="+" : v="-";
        slideItem.css({
            zIndex:0,
			transform:"translateY("+v+100+"%)",
			transition:"none"
		});
    });




});