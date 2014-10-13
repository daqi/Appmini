$(function() {
    if ($(".imageswitch1").length) {
        $(".imageswitch1").slide({
            titCell: ".list li",
            mainCell: ".piclist1",
            effect: "left",
            vis: 3,
            scroll: 3,
            delayTime: 800,
            trigger: "click",
            easing: "easeOutCirc"
        });
        $(".imageswitch2").slide({
            titCell: ".list li",
            mainCell: ".piclist2",
            effect: "left",
            vis: 3,
            scroll: 3,
            delayTime: 800,
            trigger: "click",
            easing: "easeOutCirc"
        });
    };
});

$(function() {
    if ($(".haibaodetailimageswitch").length) {
        $(".haibaodetailimageswitch").slide({
            titCell: ".list li",
            mainCell: ".piclist3",
            effect: "left",
            vis: 5,
            scroll: 5,
            delayTime: 800,
            trigger: "click",
            easing: "easeOutCirc"
        });
    };
});

$(function() {
    $(".nav .last").on("mouseover", function() {
        $(".qrcode").show();
    }).on("mouseout", function() {
        $(".qrcode").hide();
    });
});

$(function() {
    if ($(".baogaocontent").length) {
        new IScroll(".baogaocontent", {
            bounce: false,
            useTransition: false,
            scrollbars: "custom",
            fadeScrollbars: false,
            mouseWheel: true,
            interactiveScrollbars: true
        });
    };
});

$(function() {
    var myscroll = null;
    var windowWidth = $(window).innerWidth();
    var windowHeight = $(window).innerHeight();
    $(".huojiangmodal").width(windowWidth).height(windowHeight + 10);
    $(".amingdan").click(function() {
        if ($(".huojiangmodal").css("display") == "none") {
            $(".huojiangmodal").width(windowWidth).height(windowHeight + 10).show();
            $("body").height(windowHeight).css("overflow", "hidden");
            if ($(".huojiang").length && !myscroll) {
                myscroll = new IScroll(".huojiang .ccontent", {
                    bounce: false,
                    useTransition: false,
                    scrollbars: "custom",
                    fadeScrollbars: false,
                    mouseWheel: true,
                    interactiveScrollbars: true
                });
            };
        } else {

        };
    });
    $(window).resize(function(event) {
        windowWidth = $(window).innerWidth();
        windowHeight = $(window).innerHeight();
        $(".huojiangmodal").width(windowWidth).height(windowHeight + 10);
    });
    $(".close").on("click", function() {
        $(".huojiangmodal").hide();
        $("body").css({
            "height": "auto",
            "overflow": "auto"
        });
    });
});