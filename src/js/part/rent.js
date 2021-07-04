(function () {
    //swiper
    const swiperRent = new Swiper('.js-swiper-rent', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 60,
        loopAdditionalSlides: 10,
        breakpoints: {
            0: {
                loop: true,
                slidesPerView: 1,
            },
            768: {
                loop: true,
                slidesPerView: 1,
            },
            1200: {
                loop: false,
                slidesPerView: 3,
            }
        }
    });

})();