window.addEventListener('DOMContentLoaded', () => {
    ' use strict ';

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    if (isMobile.any()) {
        document.body.classList.add('_touch');

        let menuArrows = document.querySelectorAll('.menu__arrow');
        if (menuArrows.length > 0) {
            for (let i = 0; i < menuArrows.length; i++) {
                const menuArrow = menuArrows[i];
                menuArrow.addEventListener('click', function () {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }

    } else {
        document.body.classList.add('_pc');
    }

    // Меню бургер

    const headerMenu = document.querySelector('.header__burger');
    const iconMenu = document.querySelector('.header__burger-btn')
    const menuBody = document.querySelector('.menu__body');
    if (iconMenu) {
        headerMenu.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock')
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }

    // Прокрута при клике



    // Swiper

    const swiper = new Swiper('.swiper', {


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        }

    });

    // Tabs

    let tab = document.querySelectorAll('.description-header-tab');
    let info = document.querySelector('.description-header');
    let tabContent = document.querySelectorAll('.description-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);


    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


    info.addEventListener('click', (e) => {
        e.preventDefault()
        let target = e.target;
        if (target && target.classList.contains('description-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Accordeon

    document.querySelectorAll('.accordeon-trigger').forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;

            parent.classList.toggle('accordion-item--active');
        })
    });


});