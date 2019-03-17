$(document).ready(function() {
    // 选项卡 鼠标点击
    $(".TAB_CLICK2 li").click(function() {
        var tab = $(this).parent(".TAB_CLICK2");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).addClass('ok').siblings(con).removeClass('ok');
        $('.m-video video')[0].pause()
    });
    // 弹窗
    $('.js-pop').click(function(event) {
        $('.m-pop').stop().fadeIn();
    });
    $('.close').click(function(event) {
        $('.m-pop').stop().fadeOut();
    });
    // 收藏
//  $('.js-collect').click(function(event) {
//      $(this).toggleClass('on');
//  });
    // 返回顶部
    $(window).scroll(function() {
        var h = $(window).height() / 2;
        var top = $(window).scrollTop();
        if (top > h) {
            $('.gotop').addClass('active');
        } else {
            $('.gotop').removeClass('active');
        }
    });


    // 弹出框
    $('.myfancy').click(function() {
        var _id = $(this).attr('href');
        $(_id).fadeIn("normal");
    });
    $('.pop-bg,.g-close').click(function() {
        $(this).parents('.m-pop2').fadeOut("normal");
    });
    // 返回顶部
    $('.gotop').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500);
    });
     $('.header-nav-list .item').each(function(){
        $(this).data('left', $(this).offset().left);
        // console.log($(this).offset().left);
    })

    var index = 0;
    $('.header-nav').on('click', function(){
        var offsetTop = $(this).offset().top.toFixed(0);
        $('body, html').animate({scrollTop: offsetTop},300)
    }).on('click', '.js-nav-item', function(){
        index = $(this).index();
        goToPage(index);
    }).on('click', '.js_nav', function(){
        if (!$(this).hasClass('open')) {
            $(this).addClass('open')
            $('.pop-bg').stop(true, true).fadeIn();
            $('.header-nav-cont').addClass('open');
            $('body').css('overflow-y', 'hidden');
            $('.slot-tabs').addClass('fix-top')
        } else {
            $('body').css('overflow-y', 'auto');
            $(this).removeClass('open')
            $('.pop-bg').stop(true, true).fadeOut();
            $('.header-nav-cont').removeClass('open');
            $('.slot-tabs').removeClass('fix-top');
        }
    });

    $('.header-nav-cont').on('click', '.js-nav-item', function(){
        $('body').css('overflow-y', 'auto');
        index = $(this).index();
        goToPage(index);
        $('.js_nav').removeClass('open')
        $('.pop-bg').stop(true, true).fadeOut();
        $('.header-nav-cont').removeClass('open');
        var offsetLeft = $('.header-nav-list .item').eq(index).data('left');
        $('.header-nav-list').animate({scrollLeft: offsetLeft},300);
    })
    $('.pop-bg').click(function  () {
        $('.header-nav-cont').removeClass('open');
        $('body').css('overflow-y', 'auto');
        $(this).stop(true, true).fadeOut();
        $('.js_nav').removeClass('open');
        $('.slot-tabs').removeClass('fix-top');
    })
    function to_top () {
        if ($(window).scrollTop()>0) {
        $(".to-top").show()
        }else{
            $(".to-top").hide()
        }
    };to_top();

    $(window).scroll(function  () {
        to_top();
    })


    $(".to-top").click(function() {
        var _id = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(_id).offset().top-84
        }, 1000);
        return false;
    });
    // 楼层滚动
    // $(window).on('scroll',function(){
    //     var $scroll=$(this).scrollTop();
    //     var top1=$("#louti1").offset().top;
    //     var top2=$("#louti2").offset().top;
    //     var top3=$("#louti3").offset().top - 200;

    //     if($scroll<top1&&$scroll<top2&&$scroll<top3){
    //         $('#loutinav li').removeClass('on');
    //         $('#loutinav li').eq(0).addClass('on').siblings('li').removeClass('on');
    //     }
    //     if(top2<$scroll<top3&&$scroll>top1){
    //         $('#loutinav li').removeClass('on');
    //         $('#loutinav li').eq(1).addClass('on').siblings('li').removeClass('on');
    //     }
    //     if(top3<$scroll&&$scroll>top1&&$scroll>top2){
    //         $('#loutinav li').removeClass('on');
    //         $('#loutinav li').eq(2).addClass('on').siblings('li').removeClass('on');
    //     }
    // });
    // var $loutili=$('#loutinav li');
    // $loutili.on('click',function(){
    //     $(this).addClass('on').siblings('li').removeClass('on');
    //     var $loutitop=$('.louti').eq($(this).index()).offset().top-45;
    //     // console.log($lou);
    //     $('html,body').animate({
    //         scrollTop:$loutitop
    //     })
    // });
});