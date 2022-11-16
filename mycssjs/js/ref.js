function delay(URL) {
    $(".leave").css("display", "block")
    setTimeout(function(){
        $(".leave").addClass("leavedark")
    }, 1)
    

    setTimeout(function () {
        window.location = URL
    }, 699)
}