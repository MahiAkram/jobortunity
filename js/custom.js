$(function(){
    // banner slider
    $('.mworker-item-slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    // more worker video
    $('.venobox').venobox();

     // counter for milestone
     $('.count-mile').counterUp({
        delay: 10,
        time: 6000
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if (scrolling > 550){
            $('#btp').fadeIn();
        }
        else{
            $('#btp').fadeOut();
        }

        // menu fix
        if (scrolling > 350){
            $('.navbar').addClass('menu-fix');
        }
        else{
            $('.navbar').removeClass('menu-fix');
        }

    });

    // back to top

    $('#btp').click(function(){
        $('html,body').animate({
            scrollTop : 0,
        },1000);
    });
});