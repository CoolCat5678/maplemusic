
// 圖片點擊
// 亮度
$(function () {
    var len = $("#slider div").length;
    var num = parseInt(len / 2);
    var timelock = 1;
    var imglock = 1;
    var clicklock = 0;
    $("#slider div").css({ "left": `${(num - 1) * -520}px` })
    $("#slider div").eq(num).find("img").addClass("bright onlight").removeClass("dark");
    // 縮小圖片
    document.addEventListener("click",function (e) {
        if (timelock) {
            timelock = 0;
            var index = num;
            $(".slider-outdiv").click(function (event) {
                if (clicklock) {
                    clicklock = 0;
                    if (event.target.id !== "onclick") {
                        $("#slider div").each(function () {
                            // 小於中間
                            if ($("#slider div").index(this) < num) {
                                $(this).css("left", "+=500")
                            }
                            // 大於於中間
                            if ($("#slider div").index(this) > num) {
                                $(this).css("left", "-=500")
                            }
                            setTimeout(() => $("#slider div").removeClass("slowmove"), 800)
                        });

                        $("#slider div").eq(index).removeClass("openimg");
                        $("#slider div").eq(index).find("img").removeAttr("id");
                        setTimeout(function () {
                            timelock = 1;
                            clicklock = 0;
                            imglock = 1
                                , 800
                        })
                    }
                }

            })


            // 點擊圖片
            $("#slider div img").click(function () {
                if (imglock)

                    var index = $("#slider div img").index(this);
                // 放大圖片
                if (index == num) {
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
                    setTimeout(function () {
                        timelock = 1;
                        clicklock = 1;
                        imglock = 0;
                    }, 800)
                    $("#slider div").eq(index).addClass("openimg");
                    $("#slider div").eq(index).find("img").attr("id", "onclick");
                }







                // 點選不發量
                if (index != num) {
                    if (imglock) {
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
                        if (num == index + 1) {
                            $("#slider div").each(function () {
                                $(this).addClass("moveleft")
                            });

                            setTimeout(function () {
                                $("#slider div").each(function () {
                                    $(this).removeClass("moveleft")
                                });

                                $("#slider div").css("left", `${(index - 1) * -520}px`)

                                timelock = 1;
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

                                timelock = 1;
                            }, 800)
                        }

                    }

                    // 右移
                    if (num < index) {
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

                                timelock = 1;
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

                                timelock = 1;
                            }, 800)
                        }

                    }

                    num = index;
                }
            }
            )
        }
        return e;
    })
})
