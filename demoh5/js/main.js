var iscrolls = {};

function textbox2_2() {
    if (typeof iscrolls["2-2"] == "undefined") {
        iscrolls["2-2"] = new IScroll("#textbox2-2", {
            bounce: false,
            useTransition: false,
            preventDefault: true,
            scrollbars: "custom",
            fadeScrollbars: false
        });
    } else {
        iscrolls["2-2"].refresh();
    };
}

function textbox3_2() {
    if (typeof iscrolls["3-2"] == "undefined") {
        iscrolls["3-2"] = new IScroll("#textbox3-2", {
            bounce: false,
            useTransition: false,
            preventDefault: true,
            scrollbars: "custom",
            fadeScrollbars: false
        });
    } else {
        iscrolls["3-2"].refresh();
    };
}

function textbox1_3() {
    if (typeof iscrolls["1-3"] == "undefined") {
        iscrolls["1-3"] = new IScroll("#textbox1-3", {
            bounce: false,
            useTransition: false,
            preventDefault: true,
            scrollbars: "custom",
            fadeScrollbars: false
        });
    } else {
        iscrolls["1-3"].refresh();
    };
}
function tpllist(){
    if (typeof iscrolls["tpllist"] == "undefined") {
        iscrolls["tpllist"] = new IScroll("#tpllist", {
            bounce: false,
            useTransition: false,
            preventDefault: true,
            scrollbars: false,
            scrollX: true,
            scrollY: false,
            click:true
        });
    } else {
        iscrolls["tpllist"].refresh();
    };
}
$(function() {
    $("#tpllist img").on("click",function(){
        var _src = $(this).attr("src");
        $(".tplview img").attr("src",_src);
        $("#tplimg").val(_src);
    });
    $(".shuizhi").click(function(){
        $(".homejiang").show();
    });
    $(".product1 .fav").click(function(){
        $(".favpopup1").show();
    });
    $(".product2 .fav").click(function(){
        $(".favpopup2").show();
    });
    $(".favpopup .close").click(function(){
        $(this).closest(".favpopup").hide();
    });
    $(".sharebtn").on("click", function() {
        $(".sharetip").show();
    });
    $(".sharetip").on("click touchend", function() {
        $(this).hide();
    });
    $(".showmenu").on("click", function() {
        if (parseInt($(".menu").css("height")) != 80) {
            $(".showmenu").animate({
                height:230
            },200, function() {
                $(".showmenu").removeClass("showmenu-animate");
            });
            $(".headx").css({"z-index": 3,"position": "relative"});
            $(".menu").css({"z-index": 4,"position": "relative"}).animate({
                height: 80
            },
            200);
        };
    });
    $("body").on("touchend click", function(e) {
        if (parseInt($(".menu").css("height")) == 80 && $(e.target).closest(".showddmenu").length == 0 || $(e.target).closest(".submenu").length != 0) {
            $(".showmenu").animate({
                height:150
            },200, function() {
                $(".showmenu").addClass("showmenu-animate");
            });
            $(".headx").css({"z-index": 1,"position": "relative"});
            $(".menu").css({"z-index": 1,"position": "relative","overflow":"hidden"}).animate({
                height: 0
            },
            200);
            $(".submenu").hide();
        }
    });
    $(".zhuanbtn,.choujiang").click(function() {
        $(".zhizhen").trigger("click");
    });
    $(".details .cbtn").on("click",function(){
        var index = $(this).closest(".detail").index();
        $(".detailpopup").eq(index).show();
    });
    $(".detailpopup .close").click(function(){
        $(this).closest(".detailpopup").hide();
    });
    $(".jiangpopup").click(function(e){
        if($(e.target).closest(".jform").length == 0 ){
            $(this).hide();
        }
    });
    $("#homejiangform").submit(function(){
        return false;
    }); 
    var likeA = false;
    $(".likebtn").on("click", function() {
        var that = $(this);
        if (likeA == false) {
            likeA = true;
            that.find(".plus1").show().addClass("animated fadeOutUp");
            setTimeout(function() {
                that.find(".plus1").hide().removeClass("animated fadeOutUp");
                likeA = false;
            }, 1000);
        };
    });
    var timeOut = function() { //超时函数
        $(".zhizhen").rotate({
            angle: 0,
            duration: 10000,
            animateTo: 2160, //这里是设置请求超时后返回的角度，所以应该还是回到最原始的位置，2160是因为我要让它转6圈，就是360*6得来的
            callback: function() {
                alert('网络超时')
            }
        });
    };
    var rotateFunc = function(awards, angle, text) { //awards:奖项，angle:奖项对应的角度
        $('.zhizhen').stopRotate();
        $(".zhizhen").rotate({
            angle: 0,
            duration: 5000,
            animateTo: angle + 1440, //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
            callback: function() {
                if (awards!=0) {
                    $(".jiang"+(awards)).show();
                }else{
                    alert(text);
                };
            }
        });
    };

    $(".zhizhen").rotate({
        bind: {
            click: function() {
                var time = [0, 1 ,2];
                time = time[Math.floor(Math.random() * time.length)];
                if (time == 0) {
                    timeOut(); //网络超时
                }
                if (time == 2) {
                    $(".jiangx").show();
                }
                if (time == 1) {
                    var data = [1, 2, 3, 4, 5, 0]; //返回的数组
                    data = data[Math.floor(Math.random() * data.length)];
                    if (data == 1) {
                        rotateFunc(data, 330)
                    }
                    if (data == 2) {
                        rotateFunc(data, 30)
                    }
                    if (data == 3) {
                        rotateFunc(data, 90)
                    }
                    if (data == 4) {
                        rotateFunc(data, 150)
                    }
                    if (data == 5) {
                        rotateFunc(data, 210)
                    }
                    if (data == 0) {
                        rotateFunc(data, 270, '很遗憾，这次您未抽中奖')
                    }
                }
            }
        }

    });
});
var PAGEY = (function() {
    /*
     ** 变量值
     */
    /* 
     ** 页面切换的效果控制
     */
    var Msize = $(".m-page").size(), //页面的数目
        page_n = 1, //初始页面位置
        initP = null, //初值控制值
        moveP = null, //每次获取到的值
        firstP = null, //第一次获取的值
        newM = null, //重新加载的浮层
        p_b = null, //方向控制值
        indexP = null, //控制首页不能直接找转到最后一页
        move = null, //触摸能滑动页面
        start = true, //控制动画开始
        startM = null, //开始移动
        position = null, //方向值
        DNmove = false, //其他操作不让页面切换
        mapS = null, //地图变量值
        canmove = false, //首页返回最后一页

        textNode = [], //文本对象
        textInt = 1; //文本对象顺序


    /* 
     ** 单页切换 各个元素fixed 控制body高度
     */
    var v_h = null; //记录设备的高度

    function init_pageH() {
        var fn_h = function() {
            if (document.compatMode == "BackCompat")
                var Node = document.body;
            else
                var Node = document.documentElement;
            return Math.max(Node.scrollHeight, Node.clientHeight);
        }
        var page_h = fn_h();
        var m_h = $(".m-page").height();
        page_h >= m_h ? v_h = page_h : v_h = m_h;

        //设置各种模块页面的高度，扩展到整个屏幕高度
        $(".m-page").height(v_h);
        $(".p-index").height(v_h);

    };
    init_pageH();

    /* 大图文图片延迟加载 */
    var lazyNode = $('.lazy-bk');
    lazyNode.each(function() {
        var self = $(this);
        if (self.is('img')) {
            self.attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC');
        } else {
            self.css({
                'background-image': 'url(img/loading_large.gif)',
                'background-position': '50% 50%'

            })
        }
    })

    // 加载当前后面第三个
    function lazy_bigP() {
        for (var i = 3; i <= 5; i++) {
            var node = $(".m-page").eq(page_n + i - 1);
            if (node.length == 0) break;
            if (node.find('.lazy-bk').length != 0) {
                lazy_change(node);
            } else continue;
        }
    }

    // 前三个页面的图片延迟加载
    setTimeout(function() {
        for (var i = 0; i < 3; i++) {
            var node = $(".m-page").eq(i);
            if (node.length == 0) break;
            if (node.find('.lazy-bk').length != 0) {
                lazy_change(node);
            } else continue;
        }
    }, 200)

    // 图片延迟替换函数
    function lazy_change(node) {
        var lazy = node.find('.lazy-bk');
        lazy.each(function() {
            var self = $(this),
                srcImg = self.attr('data-bk');

            $('<img />')
                .on('load', function() {
                    if (self.is('img')) {
                        self.attr('src', srcImg)
                    } else {
                        self.css({
                            'background-image': 'url(' + srcImg + ')',
                            'background-repeat': 'no-repeat',
                            // 'background-size': 'cover',
                            'background-position': 'center top'
                        })
                    }

                    // 判断下面页面进行加载
                    for (var i = 0; i < $(".m-page").size(); i++) {
                        var page = $(".m-page").eq(i);
                        if ($(".m-page").find('.lazy-bk').length == 0) continue
                        else {
                            lazy_change(page);
                        }
                    }
                })
                .attr("src", srcImg);

            self.removeClass('lazy-bk');
        })
    }

    /*
     **模版切换页面的效果
     */
    //绑定事件
    function changeOpen(e) {
        $(".m-page").on('mousedown touchstart', page_touchstart);
        $(".m-page").on('mousemove touchmove', page_touchmove);
        $(".m-page").on('mouseup touchend mouseout', page_touchend);
    };

    //开启事件绑定滑动
    changeOpen();

    //触摸（鼠标按下）开始函数
    function page_touchstart(e) {
        if (e.type == "touchstart") {
            initP = window.event.touches[0].pageY;
        } else {
            initP = e.y || e.pageY;
            mousedown = true;
        }
        firstP = initP;
    };

    //触摸移动（鼠标移动）开始函数
    function page_touchmove(e) {

        e.preventDefault();
        //e.stopPropagation();

        if ($(e.target).closest('#tpllist').length == 0 && $(e.target).closest('#textbox2-2').length == 0 && $(e.target).closest('#textbox3-2').length == 0 && $(e.target).closest('#textbox1-3').length == 0) {
            //判断是否开始或者在移动中获取值
            if (start || startM) {
                startM = true;
                if (e.type == "touchmove") {
                    moveP = window.event.touches[0].pageY;
                } else {
                    if (mousedown) moveP = e.y || e.pageY;
                }
                page_n == 1 ? indexP = false : indexP = true; //true 为不是第一页 false为第一页
            }

            //设置一个页面开始移动
            if (moveP && startM) {

                //判断方向并让一个页面出现开始移动
                if (!p_b) {
                    p_b = true;
                    position = moveP - initP > 0 ? true : false; //true 为向下滑动 false 为向上滑动
                    if (position) {
                        //向下移动
                        if (indexP) {
                            newM = page_n - 1;
                            $(".m-page").eq(newM - 1).addClass("active").css("top", -v_h);
                            move = true;
                        } else {
                            if (canmove) {
                                move = true;
                                newM = Msize;
                                $(".m-page").eq(newM - 1).addClass("active").css("top", -v_h);
                            } else {
                                move = false
                            };
                        }

                    } else {
                        //向上移动
                        if (page_n != Msize) {
                            newM = page_n + 1;
                            $(".m-page").eq(newM - 1).addClass("active").css("top", v_h);
                            move = true;
                        } else {
                            move = false;
                        }
                        tpllist();
                    }
                }

                //根据移动设置页面的值
                if (!DNmove) {
                    //滑动带动页面滑动
                    if (move) {

                        //移动中设置页面的值（top）
                        start = false;
                        var topV = parseInt($(".m-page").eq(newM - 1).css("top"));
                        $(".m-page").eq(newM - 1).css({
                            'top': topV + moveP - initP
                        });
                        initP = moveP;
                    } else {
                        moveP = null;
                    }
                } else {
                    console.log('2')
                    moveP = null;
                }
            }
        };
    };

    //触摸结束（鼠标起来或者离开元素）开始函数
    function page_touchend(e) {

        //结束控制页面
        startM = null;
        p_b = false;

        //关闭声音
        // audio_close();

        //判断移动的方向
        var move_p;
        position ? move_p = moveP - firstP > 100 : move_p = firstP - moveP > 100;
        if (move) {
            //切画页面(移动成功)
            if (move_p && Math.abs(moveP) > 5) {
                $(".m-page").eq(newM - 1).animate({
                    'top': 0
                }, 300, "easeOutSine", function() {
                    /*
                     ** 切换成功回调的函数
                     */
                    success();
                })
                //返回页面(移动失败)
            } else if (Math.abs(moveP) >= 5) { //页面退回去
                position ? $(".m-page").eq(newM - 1).animate({
                    'top': -v_h
                }, 100, "easeOutSine") : $(".m-page").eq(newM - 1).animate({
                    'top': v_h
                }, 100, "easeOutSine");
                $(".m-page").eq(newM - 1).removeClass("active");
                start = true;
            }
        }
        /* 初始化值 */
        initP = null, //初值控制值
        moveP = null, //每次获取到的值
        firstP = null, //第一次获取的值
        mousedown = null; //取消鼠标按下的控制值
    };
    /*
     ** 切换成功的函数
     */
    function success() {
        /*
         ** 切换成功回调的函数
         */
        //设置页面的出现
        $(".m-page").eq(page_n - 1).removeClass("show active").addClass("hide").find(".ani");
        $(".m-page").eq(newM - 1).removeClass("active hide").addClass("show").find(".ani").show();

        // 滑动成功加载多面的图片
        lazy_bigP();

        //重新设置页面移动的控制值
        page_n = newM;
        start = true;

        PAGEX[0].gotopageX(1);
        PAGEX[1].gotopageX(1);
        PAGEX[2].gotopageX(1);
    }

    /*
     ** 页面加载初始化
     */

    function initPage() {
        //初始化一个页面
        $(".m-page").addClass("hide").eq(page_n - 1).addClass("show").removeClass("hide");

        //PC端图片点击不产生拖拽
        $(document.body).find("img").on("mousedown", function(e) {
            e.preventDefault();
        })
        //调试图片的尺寸
        if (RegExp("iPhone").test(navigator.userAgent) || RegExp("iPod").test(navigator.userAgent) || RegExp("iPad").test(navigator.userAgent)) $('.m-page').css('height', '100.1%');
    }(initPage());

    /*
     **设备旋转提示
     */
    $(function() {
        var bd = $(document.body);
        window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', _orientationchange, false);

        function _orientationchange() {
            scrollTo(0, 1);
            switch (window.orientation) {
                case 0: //横屏
                    bd.addClass("landscape").removeClass("portrait");
                    init_pageH();
                    break;
                case 180: //横屏
                    bd.addClass("landscape").removeClass("portrait");
                    init_pageH();
                    break;

                case -90: //竖屏

                    init_pageH();
                    bd.addClass("portrait").removeClass("landscape");
                    //if($(".m-video video")[0]!=undefined && $(".m-video video")[0].paused){
                    //alert("请竖屏查看页面，效果更佳");
                    //}else{
                    alert("请竖屏查看页面，效果更佳");
                    //}

                    break;
                case 90: //竖屏
                    init_pageH();
                    bd.addClass("portrait").removeClass("landscape");
                    //if($(".m-video video")[0].paused)
                    alert("请竖屏查看页面，效果更佳");
                    break;
            }
        }
        $(window).on('load', _orientationchange);
    });

    return {
        gotopageY : function(page){
            if (!$(".m-page").eq(page-1).hasClass("show")) {
                $(".m-page").eq(page-1).css("top", v_h).animate({
                    'top': 0
                }, 300, "easeOutSine", function() {
                    newM = page;
                    success();
                })
            };
        }
    }
})();