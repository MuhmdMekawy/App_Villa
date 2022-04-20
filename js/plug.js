$(document).ready(function(){
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        if (src === 0){
            $('.navbar').css("background-color" , "#ff6b81")
            $('.navbar .container .navbar-nav .nav-link').css("color" , "white")
            $('.b-logo').css("display" , "none").siblings().css("display" , "inline-block")
            $('.navbar .d-flex button').css({
                "border" : "2px solid #fff" ,
                "background-color" : "transparent"
            })
        }else{
            $('.navbar').css("background-color" , "white")
            $('.navbar .container .navbar-nav .nav-link').css("color" , "black")
            $('.navbar .container .navbar-nav .nav-link.active').css("color" , "#ff6b81")
            $('.b-logo').css("display" , "inline-block").siblings().css("display" , "none")
            $('.navbar .d-flex button').css({
                "border" : "none" ,
                "background-color" : "#ff6b81"
            })
        }
        if (src >= 0  ){
            $('.contact .navbar .container .navbar-nav .nav-item:nth-child(7) .nav-link').addClass('active').parent().siblings().children().removeClass('active')
            $('.contact .container .navbar-nav .nav-item:nth-child(7) .nav-lin').addClass('active').parent().siblings().children().removeClass('active')
        }
    })
})