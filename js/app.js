$(document).ready(function(){

    $('.nav__main_social-person').on('click', () => {
        $('body').addClass('noScroll');      
        $('.modal-loginAccount').addClass('active-js');
    });

    $('.modal__checkbox_losePass').on('click', () => {
        $('.modal-recoverPass').addClass('active-js');
    });

    $('.js-btn__header').on('click', () => {
        $('body').addClass('noScroll');
        $('.modal-call').addClass('active-js');
    });

    $('.js-btn__footer').on('click', () => {
        $('body').addClass('noScroll');
        $('.modal-footerCall').addClass('active-js');
    });

    $('.modal__btn-registration').on('click', () => {
        $('.modal-registration').addClass('active-js');
        $('.modal-loginAccount').removeClass('active-js');
    });

    $('.burgeMenu__iconWrapper').on('click', () => {
        $('.burgerMenu__wrapper').addClass('active-js');
    })

    $('.js-close__iconModal').on('click', () => {
        $('body').removeClass('noScroll');
        $('.modal-call').removeClass('active-js');
        $('.modal-registration').removeClass('active-js');
        $('.modal-footerCall').removeClass('active-js');
        $('.burgerMenu__wrapper').removeClass('active-js');
    });

    $('.header__slider__wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            }
        ],
      });

    $('.whatSay__slider_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ],
      });

});


