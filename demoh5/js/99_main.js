var PAGEX=[];
$(".m-page:eq(0),.m-page:eq(1),.m-page:eq(2),.m-page:eq(5)").each(function(__i) {
    PAGEX[__i] = (function(parent) {
        /*
         ** 变量值
         */
        /* 
         ** 页面切换的效果控制
         */
        var Msize = parent.find(".sub-page").size(), //页面的数目
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
        var v_w = null; //记录设备的高度
        function init_pageH() {
            var fn_h = function() {
                if (document.compatMode == "BackCompat")
                    var Node = document.body;
                else
                    var Node = document.documentElement;
                return Math.max(Node.scrollHeight, Node.clientHeight);
            }
            var fn_w = function() {
                if (document.compatMode == "BackCompat")
                    var Node = document.body;
                else
                    var Node = document.documentElement;
                return Math.max(Node.scrollWidth, Node.clientWidth);
            }
            var page_h = fn_h();
            v_w = fn_w();
            var m_h = parent.find(".sub-page").height();
            page_h >= m_h ? v_h = page_h : v_h = m_h;

            //设置各种模块页面的高度，扩展到整个屏幕高度
            parent.find(".sub-page").height(v_h);

        };
        init_pageH();

        /*
         **模版切换页面的效果
         */
        //绑定事件
        function changeOpen(e) {
            parent.find(".sub-page").on('mousedown touchstart', page_touchstart);
            parent.find(".sub-page").on('mousemove touchmove', page_touchmove);
            parent.find(".sub-page").on('mouseup touchend mouseout', page_touchend);
        };

        //开启事件绑定滑动
        changeOpen();

        //触摸（鼠标按下）开始函数
        function page_touchstart(e) {
            if (e.type == "touchstart") {
                initP = window.event.touches[0].pageX;
            } else {
                initP = e.x || e.pageX;
                mousedown = true;
            }
            firstP = initP;
        };

        //触摸移动（鼠标移动）开始函数
        function page_touchmove(e) {
            // if (/*page_n != 1 &&*/ $(e.target).closest('#textbox2-2').length == 0 && $(e.target).closest('#textbox3-2').length == 0) {
            //     e.preventDefault();
            //     e.stopPropagation();
            // };
            //判断是否开始或者在移动中获取值
            if (start || startM) {
                startM = true;
                if (e.type == "touchmove") {
                    moveP = window.event.touches[0].pageX;
                } else {
                    if (mousedown) moveP = e.x || e.pageX;
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
                        //向左移动
                        if (indexP) {
                            newM = page_n - 1;
                            parent.find(".sub-page").eq(newM - 1).addClass("active").css("left", -v_w);
                            move = true;
                        } else {
                            if (canmove) {
                                move = true;
                                newM = Msize;
                                parent.find(".sub-page").eq(newM - 1).addClass("active").css("left", -v_w);
                            } else move = false;
                        }

                    } else {
                        //向右移动
                        if (page_n != Msize) {
                            newM = page_n + 1;
                            parent.find(".sub-page").eq(newM - 1).addClass("active").css("left", v_w);
                            move = true;
                        } else {
                            move = false;
                        }
                        textbox2_2();
                        textbox3_2();
                        textbox1_3();
                    }
                }

                //根据移动设置页面的值
                if (!DNmove) {
                    //滑动带动页面滑动
                    if (move) {

                        //移动中设置页面的值（top）
                        start = false;
                        var topV = parseInt(parent.find(".sub-page").eq(newM - 1).css("left"));
                        parent.find(".sub-page").eq(newM - 1).css({
                            'left': topV + moveP - initP
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
                    parent.find(".sub-page").eq(newM - 1).animate({
                        'left': 0
                    }, 300, "easeOutSine", function() {
                        /*
                         ** 切换成功回调的函数
                         */
                        success();
                    })
                    //返回页面(移动失败)
                } else if (Math.abs(moveP) >= 5) { //页面退回去
                    position ? parent.find(".sub-page").eq(newM - 1).animate({
                        'left': -v_w
                    }, 100, "easeOutSine") : parent.find(".sub-page").eq(newM - 1).animate({
                        'left': v_w
                    }, 100, "easeOutSine");
                    parent.find(".sub-page").eq(newM - 1).removeClass("active");
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
            parent.find(".sub-page").eq(page_n - 1).removeClass("show active").addClass("hide").find(".ani").hide();
            parent.find(".sub-page").eq(newM - 1).removeClass("active hide").addClass("show").find(".ani").show();

            // 滑动成功加载多面的图片
            //lazy_bigP();

            //重新设置页面移动的控制值
            page_n = newM;
            start = true;

        }

        /*
         ** 页面加载初始化
         */

        function initPage() {
            //初始化一个页面
            parent.find(".sub-page").addClass("hide").eq(page_n - 1).addClass("show").removeClass("hide");

            //PC端图片点击不产生拖拽
            $(document.body).find("img").on("mousedown", function(e) {
                e.preventDefault();
            })

            //调试图片的尺寸
            if (RegExp("iPhone").test(navigator.userAgent) || RegExp("iPod").test(navigator.userAgent) || RegExp("iPad").test(navigator.userAgent)) $('.sub-page').css('height', '101%');
        }(initPage());

        return {
            gotopageX : function(page){
                if (!parent.find(".sub-page").eq(page-1).hasClass("show")) {
                    parent.find(".sub-page").eq(page-1).css("left", v_w).animate({
                        'left': 0
                    }, 300, "easeOutSine", function() {
                        newM = page;
                        success();
                    })
                };
            }
        }

    })($(this));
});

$(function() {
    $(".showdetail").on("touchstart click", function() {
        PAGEY.gotopageY(1);
        PAGEX[0].gotopageX(2);
    });
    $(".showhome").on("touchstart click", function() {
        PAGEY.gotopageY(1);
        PAGEX[0].gotopageX(1);
    });
    $(".showpplist").on("touchstart click", function() {
        PAGEY.gotopageY(1);
        PAGEX[0].gotopageX(3);
    });
    $(".showddmenu").on("touchstart",function(){
        $(".menu").css("overflow","visible");
        $(".submenu").show();
    });
    $(".menuact1").on("touchstart click", function() {
        PAGEY.gotopageY(4);
    });
    $(".menuact2").on("touchstart click", function() {
        PAGEY.gotopageY(5);
    });
    $(".menuact3").on("touchstart click", function() {
        PAGEY.gotopageY(6);
    });
});
