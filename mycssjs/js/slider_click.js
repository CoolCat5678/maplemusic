
// 圖片點擊
// 亮度
$(function () {
    var len = $("#slider div").length;
    var num = parseInt(len / 2);
    // lockstate 
    // 1 timelock
    // 2 Imagelock
    var lockstate = 0;
    $("#slider div").css({ "left": `${(num - 1) * -520}px` })
    $("#slider div").eq(num).find("img").addClass("bright onlight").removeClass("dark");


    // 重複點 關閉圖片
    $("#slider div img").click(function () {
        if (lockstate == 2) {
            var index = $("#slider div img").index(this);
            if (index == num) {
                lockstate = 3,
                    $("#slider div").each(function () {
                        // 小於中間
                        if ($("#slider div").index(this) < num) {
                            $(this).css("left", "+=500")
                        }
                        // 大於於中間
                        if ($("#slider div").index(this) > num) {
                            $(this).css("left", "-=500")
                        }

                        $("#slider div").eq(index).removeClass("openimg")

                        $("#content").css("display", "none")

                        setTimeout(function () {
                            $("#slider div").each(function () {
                                $(this).removeClass("slowmove")
                            })
                            lockstate = 0;
                        }, 800)
                    });
            }
        }
    })

    // 點擊圖片
    $("#slider div img").click(function () {
        if (lockstate == 0) {
            var index = $("#slider div img").index(this);
            // 點選發亮
            if (index == num) {
                lockstate = 1;
                $("#slider div").each(function () {
                    $(this).addClass("slowmove")

                    // 小於中間
                    if ($("#slider div").index(this) < num) {
                        $(this).css("left", "-=500")
                    }
                    // 大於於中間
                    if ($("#slider div").index(this) > num) {
                        $(this).css("left", "+=500")
                    }
                });

                // 中間圖放大
                $("#slider div").eq(index).addClass("openimg")

                $("#content").css("display", "block")

                setTimeout(function () {
                    lockstate = 2;
                }, 800)
            }




            // 點選不發量
            if (index != num) {
                lockstate = 1
                // 本尊發光
                $("#slider div").eq(index).find("img").addClass("bright onlight");
                $("#slider div").eq(num).find("img").addClass("dark").removeClass("bright onlight");

                // 分身發光

                $("#slider div").eq(num + len / 3).find("img").addClass("dark").removeClass("bright onlight");
                $("#slider div").eq(index + len / 3).find("img").addClass("bright onlight");
                $("#slider div").eq(num - len / 3).find("img").addClass("dark").removeClass("bright onlight");
                $("#slider div").eq(index - len / 3).find("img").addClass("bright onlight");


                // 畫面到另一邊
                if (index < len - len / 3) {
                    index += len / 3
                    num += len / 3
                }

                if (index >= len - len / 3) {
                    index -= len / 3
                    num -= len / 3
                }

                // 跳到分身的位置
                $("#slider div").css("left", `${(num - 1) * -520}px`)
            }

            // 左移
            if (num > index) {
                lockstate = 1
                if (num == index + 1) {
                    $("#slider div").each(function () {
                        $(this).addClass("moveleft")
                    });

                    setTimeout(function () {
                        $("#slider div").each(function () {
                            $(this).removeClass("moveleft")
                        });

                        $("#slider div").css("left", `${(index - 1) * -520}px`)

                        lockstate = 0;
                    }, 800)
                }

                if (num == index + 2) {
                    $("#slider div").each(function () {
                        $(this).addClass("moveleft2")
                    });

                    setTimeout(function () {
                        $("#slider div").each(function () {
                            $(this).removeClass("moveleft2")
                        });

                        $("#slider div").css("left", `${(index - 1) * -520}px`)

                        lockstate = 0;
                    }, 800)
                }

            }

            // 右移
            if (num < index) {
                lockstate = 1
                if (num == index - 1) {
                    // console.log("start");
                    $("#slider div").each(function () {
                        $(this).addClass("moveright")
                    });

                    // console.log("removed")
                    setTimeout(function () {
                        $("#slider div").each(function () {
                            $(this).removeClass("moveright")
                        });
                        $("#slider div").css("left", `${(index - 1) * -520}px`)

                        lockstate = 0;
                    }, 800)
                }

                if (num == index - 2) {
                    // console.log("start");
                    $("#slider div").each(function () {
                        $(this).addClass("moveright2")
                    });

                    // console.log("removed")
                    setTimeout(function () {
                        $("#slider div").each(function () {
                            $(this).removeClass("moveright2")
                        });

                        $("#slider div").css("left", `${(index - 1) * -520}px`)

                        lockstate = 0;
                    }, 800)
                }

            }

            num = index;

        }
    })
})
