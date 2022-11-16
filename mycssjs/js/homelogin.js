$(function () {
    setTimeout(function () {
        $("#homelogin h1").css("color", "#E03C8A")
        setTimeout(function () {
            $("#homelogin h1").css("color", "rgba(255,255,255,0)")
            setTimeout(function () {
                $("#homelogin h1").text("Click")
                $("#homelogin h1").css("color", "#E03C8A")
                setTimeout(function () {
                    $("#homelogin").click(function () {
                        setTimeout(function () {
                            $("#homelogin h1").css("color", "rgba(255,255,255,0)")
                        }, 100)

                        setTimeout(function () {
                            $("#homelogin").css("background-color", "rgba(0, 0, 0, 0)")
                        }, 1100)

                        setTimeout(function () {
                            $("#homelogin").css("display", "none")
                        }, 3100)
                    })
                })
            }, 1000)
        }, 1300)
    }, 500)
})