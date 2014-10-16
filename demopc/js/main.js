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
});


$(function() {
    var myscroll = null;
    var windowWidth = $(window).innerWidth();
    var windowHeight = $(window).innerHeight();
    $(".huojiangmodal").width(windowWidth).height(windowHeight + 10);
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