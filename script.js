document.addEventListener("DOMContentLoaded", function() {
    var myCarousel = document.getElementById('carousel_img');

    // Pause on hover (desktop)
    myCarousel.addEventListener('mouseenter', function() {
        var carousel = new bootstrap.Carousel(myCarousel);
        carousel.pause();
    });

    myCarousel.addEventListener('mouseleave', function() {
        var carousel = new bootstrap.Carousel(myCarousel);
        carousel.cycle();
    });

    // Pause on touch (mobile)
    myCarousel.addEventListener('touchstart', function() {
        var carousel = new bootstrap.Carousel(myCarousel);
        carousel.pause();
    });

    myCarousel.addEventListener('touchend', function() {
        var carousel = new bootstrap.Carousel(myCarousel);
        carousel.cycle();
    });
});