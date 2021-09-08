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
});