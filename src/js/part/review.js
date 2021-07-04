(function () {
    //swiper
    const swiperReview = new Swiper('.js-swiper-review', {
        speed: 1000,
        loop: true,
        loopAdditionalSlides: 10,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

})();