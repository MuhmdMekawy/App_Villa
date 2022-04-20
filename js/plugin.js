$(document).ready(function(){
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        var head = $('.header').offset().top
        var feat = $('.feat').offset().top
        var trust = $('.trust').offset().top
        var over = $('.over').offset().top
        var price = $('.price').offset().top
        var team = $('.team').offset().top
        var install = $('.install').offset().top
        var blog = $('.blog').offset().top
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
        if (src >= head - 80){
            $('.navbar .container .navbar-nav .nav-item:nth-child(1) .nav-link').addClass('active').parent().siblings().children().removeClass('active')
            $('.navbar .container .navbar-nav .nav-item:nth-child(1) .nav-lin').addClass('active').parent().siblings().children().removeClass('active')
        }
        if (src >= feat - 100){
            $('.navbar .container .navbar-nav .nav-item:nth-child(2) .nav-link').addClass('active').parent().siblings().children().removeClass('active')
            $('.navbar .container .navbar-nav .nav-item:nth-child(2) .nav-lin').addClass('active').parent().siblings().children().removeClass('active')
        }
        if (src >= over - 80){
            $('.navbar .container .navbar-nav .nav-item:nth-child(3) .nav-link').addClass('active').parent().siblings().children().removeClass('active')
            $('.navbar .container .navbar-nav .nav-item:nth-child(3) .nav-lin').addClass('active').parent().siblings().children().removeClass('active')
        }
        if (src >= price - 80  ){
            $('.navbar .container .navbar-nav .nav-item:nth-child(4) .nav-link').addClass('active').parent().siblings().children().removeClass('active')
            $('.navbar .container .navbar-nav .nav-item:nth-child(4) .nav-lin').addClass('active').parent().siblings().children().removeClass('active')
        }
        if (src >= team - 80  ){
            $('.navbar .container .navbar-nav .nav-item:nth-child(5) .nav-link').addClass('active').parent().siblings().children().removeClass('active')
            $('.navbar .container .navbar-nav .nav-item:nth-child(5) .nav-lin').addClass('active').parent().siblings().children().removeClass('active')
        }
        if (src >= install - 100  ){
            $('.navbar .container .navbar-nav .nav-item .nav-link').removeClass('active').parent().siblings().children().removeClass('active')
            $('.navbar .container .navbar-nav .nav-item .nav-lin').removeClass('active').parent().siblings().children().removeClass('active')
        }
        if (src >= blog - 100  ){
            $('.navbar .container .navbar-nav .nav-item a#navbarDropdown').addClass('active').parent().siblings().children().removeClass('active')
            $('.navbar .container .navbar-nav .nav-item a#navbarDropdown').addClass('active').parent().siblings().children().removeClass('active')
        }
        if (src >= trust -100){
            $('.trust .content .cont h3:first').prop('counter' , 0).animate({
                counter : 100
            } , {
                duration : 4000 ,
                swing : 'linear' ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
            $('.trust .content .cont:nth-child(2) h3').prop('counter' , 0).animate({
                counter : 120
            } , {
                duration : 4000 ,
                swing : 'linear' ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
            $('.trust .content .cont h3:last').prop('counter' , 0).animate({
                counter : 125
            } , {
                duration : 4000 ,
                swing : 'linear' ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
        }
    })
    $('.owl-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.faq .accordion .content .cont').click(function(){
        $(this).find('.top').css({
            "background-color" : "#ff6b81" ,
            "color" : "white"
        }).find('img').toggle().css("filter" , "invert(1)").end().parent().siblings().find('.top').css({
            "background-color" : "white" ,
            "color" : "unset"
        }).find('img').css("filter" , "invert(0)").end().find('.plus').show().siblings().hide()
        $(this).find('.bottom').slideToggle(500).css("display" , "flex").parent().siblings().find('.bottom').slideUp(500)
    })
    $('.faq .accordion .content .cont:first').click()
    $('.supp-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
})