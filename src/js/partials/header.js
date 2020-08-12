var subMenus,
    subMenuTriggers,
    shBurger,
    shBurgerWrap,
    hMainMenu;

function initFullHdHeaderHandlers() {
    $('.js-open-sub-menu').on('mouseenter.fullHdHeader hover.fullHdHeader', function () {
        subMenus.removeClass('hmm-sub-menu--is-open');
        $(this).addClass('hmm-item__a--active').siblings('.hmm-sub-menu').addClass('hmm-sub-menu--is-open');
    });

    $('.hmm-item__a:not(.js-open-sub-menu)').on('mouseenter.fullHdHeader', function () {
        subMenuTriggers.removeClass('hmm-item__a--active');
        subMenus.removeClass('hmm-sub-menu--is-open');
    });
    $(document).on('click.fullHdHeader', function (e) {
        if ($(e.target).closest('.hmm-item--has-sub').length) {
            // клик внутри элемента
            return;
        }
        // клик снаружи элемента
        subMenuTriggers.removeClass('hmm-item__a--active');
        subMenus.removeClass('hmm-sub-menu--is-open');
    });
    $('.header-main, .hmm-sub-menu').on('mouseout.fullHdHeader', function (event) {
        if ($(event.relatedTarget).is('main.main') || $(event.relatedTarget).closest('main.main').length) {
            subMenuTriggers.removeClass('hmm-item__a--active');
            subMenus.removeClass('hmm-sub-menu--is-open');
            return;
        }
    });
}


function disableFullHdHeaderHandlers() {
    $('.js-open-sub-menu').off('.fullHdHeader');
    $('.hmm-item__a:not(.js-open-sub-menu)').off('.fullHdHeader');
    $(document).off('.fullHdHeader');
    $('.header-main, .hmm-sub-menu').off('.fullHdHeader');
}
//////////////
function initLessFullHdHeaderHandlers() {
    $('.sh-burger-wrap').on('click.lessFullHdHeader', function (e) {
        $this = $(this);
        if ($this.is('.sh-burger-wrap--active')) {
            if ($this.is('.sh-burger-wrap--active-sub')) {
                shBurgerWrap.removeClass('sh-burger-wrap--active-sub');
                shBurger.removeClass('sh-burger--back').addClass('sh-burger--cross');
                subMenus.removeClass('hmm-sub-menu--is-open');
                setTimeout(function () {
                    hMainMenu.removeClass('header-main-menu--open-sub');
                    hMainMenu.addClass('header-main-menu--tablet-active');
                }, 150);


            } else {
                shBurgerWrap.removeClass('sh-burger-wrap--active');
                shBurger.removeClass('sh-burger--cross');
                hMainMenu.removeClass('header-main-menu--tablet-active');

            }
        } else {
            $this.addClass('sh-burger-wrap--active')
                .find('.sh-burger').addClass('sh-burger--cross');
            hMainMenu.addClass('header-main-menu--tablet-active');
        }
    });

    $('.js-open-sub-menu').on('click.lessFullHdHeader', function () {
        shBurger.addClass('sh-burger--back');
        shBurgerWrap.addClass('sh-burger-wrap--active-sub');
        subMenus.removeClass('hmm-sub-menu--is-open');
        $(this).addClass('hmm-item__a--active').siblings('.hmm-sub-menu').addClass('hmm-sub-menu--is-open');
        hMainMenu.addClass('header-main-menu--open-sub');
        setTimeout(function () {
            hMainMenu.removeClass('header-main-menu--tablet-active');
        }, 150);
    });
    /*
        $('.hmm-item__a:not(.js-open-sub-menu)').on('mouseenter.lessFullHdHeader', function () {
            subMenuTriggers.removeClass('hmm-item__a--active');
            subMenus.removeClass('hmm-sub-menu--is-open');
        });*/

    /*  $('.js-open-sub-menu').on('mouseenter.fullHdHeader hover.fullHdHeader', function () {
          subMenus.removeClass('hmm-sub-menu--is-open');
          $(this).addClass('hmm-item__a--active').siblings('.hmm-sub-menu').addClass('hmm-sub-menu--is-open');
      });

      $('.hmm-item__a:not(.js-open-sub-menu)').on('mouseenter.fullHdHeader', function () {
          subMenuTriggers.removeClass('hmm-item__a--active');
          subMenus.removeClass('hmm-sub-menu--is-open');
      });
      */
    /*  $(document).on('click.fullHdHeader', function (e) {
          if ($(e.target).closest('.hmm-item--has-sub').length) {
              // клик внутри элемента
              return;
          }
          // клик снаружи элемента
          subMenuTriggers.removeClass('hmm-item__a--active');
          subMenus.removeClass('hmm-sub-menu--is-open');
      });
      $('.header-main, .hmm-sub-menu').on('mouseout.fullHdHeader', function (event) {
          if ($(event.relatedTarget).is('main.main') || $(event.relatedTarget).closest('main.main').length) {
              subMenuTriggers.removeClass('hmm-item__a--active');
              subMenus.removeClass('hmm-sub-menu--is-open');
              return;
          }
      });*/
}



$(document).ready(function () {
    subMenus = $('.hmm-sub-menu');
    subMenuTriggers = $('.js-open-sub-menu');
    shBurger = $('.sh-burger');
    shBurgerWrap = $('.sh-burger-wrap');
    hMainMenu = $('.header-main-menu');
    initLessFullHdHeaderHandlers();

});