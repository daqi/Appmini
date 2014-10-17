$(function() {
    $(".back").click(function(){
        history.back(-1);
    });
    $(".guizetabs div").click(function(){
        if (!$(this).hasClass("on")) {
            var index = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(".guizeli").hide();
            $(".guizeli").eq(1-index).show();
        };
    });
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
    };
    if ($(".imageswitch2").length) {
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

// $(function() {
//     if ($(".haibaodetailimageswitch").length) {
//         $(".haibaodetailimageswitch").slide({
//             titCell: ".list li",
//             mainCell: ".piclist3",
//             effect: "left",
//             vis: 5,
//             scroll: 5,
//             delayTime: 800,
//             trigger: "click",
//             easing: "easeOutCirc"
//         });
//     };
// });

$(function() {
    $(".nav .nav5").on("mouseover", function() {
        $(".haibaodd").show();
    }).on("mouseout", function() {
        $(".haibaodd").hide();
    });
    $(".nav .last").on("mouseover", function() {
        $(".qrcodedd").show();
    }).on("mouseout", function() {
        $(".qrcodedd").hide();
    });
});


$(function() {
    var windowWidth = $(window).innerWidth();
    var windowHeight = $(window).innerHeight();
    $(".guizepopupbg").width(windowWidth).height(windowHeight + 10);
    $(".homejiang").width(windowWidth).height(windowHeight + 10);
    $(window).resize(function(event) {
        windowWidth = $(window).innerWidth();
        windowHeight = $(window).innerHeight();
        $(".guizepopupbg").width(windowWidth).height(windowHeight + 10);
        $(".homejiang").width(windowWidth).height(windowHeight + 10);
    });
    $(".guizeli .cbtn").click(function(){
        windowWidth = $(window).innerWidth()+30;
        windowHeight = $(window).innerHeight()+30;
        var index = $(".guizeli .detail").index($(this).closest(".detail"));
        if (index>=0) {
            $(".guizepopupbg").eq(index).show().css("top",$("body").scrollTop());
            $("body").css({
                "height": windowHeight,
                "overflow": "hidden"
            });
            $(".footer").hide();
            windowWidth = $(window).innerWidth();
            windowHeight = $(window).innerHeight();
            $(".guizepopupbg").width(windowWidth).height(windowHeight + 10);
        };

    });

    $(".homejiangbtn").click(function(){
        windowWidth = $(window).innerWidth()+30;
        windowHeight = $(window).innerHeight()+30;
            $(".homejiang").show();
            $("body").css({
                "height": windowHeight,
                "overflow": "hidden"
            });
            $(".footer").hide();
            windowWidth = $(window).innerWidth();
            windowHeight = $(window).innerHeight();
            $(".homejiang").width(windowWidth).height(windowHeight + 10);

    });
    $(".guizepopupbg .close").on("click", function() {
        $(".guizepopupbg").hide();
        $("body").css({
            "height": "auto",
            "overflow-y": "auto"
        });
        $(".footer").show();
    });
});