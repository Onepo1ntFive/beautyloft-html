(function () {

    let menuBth = document.querySelector('.js-menu-sandwich');
    let menuItems = document.querySelector('.js-menu-items');
    let menuItem = document.querySelectorAll('.js-menu-items a');
    function menuToggle() {
        slideToggle(menuItems);
        menuBth.classList.toggle("menu__btn--active");
    }

    menuBth.addEventListener('click', function (e) {
        menuToggle();
    })

    Array.prototype.forEach.call(menuItem, function (el, i) {
        el.addEventListener('click', function (e) {
            let targetId = e.target.getAttribute('href');
            menuToggle();
            if (document.querySelector(targetId)) {
                e.preventDefault();
                scrollIt(document.querySelector(targetId), 1000, 'easeOutQuad');
            }
        })
    });
})();