(function () {

    let menuBth = document.querySelector('.js-menu-sandwich');
    let menuItems = document.querySelector('.js-menu-items');
    function menuTogglen() {
        slideToggle(menuItems);
    }

    menuBth.addEventListener('click', function (e) {
        menuTogglen()
    })
})();