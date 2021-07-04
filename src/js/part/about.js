(function () {
    //swiper
    const swiperAbout = new Swiper('.js-swiper-about', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 50,
        speed: 1000,
        loopAdditionalSlides: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

})();