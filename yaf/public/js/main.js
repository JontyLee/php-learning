'use strict';
requirejs(['base'], () => {
    require(['index']);
});

define('index', ['jquery', 'semanticUI','slick'], ($, semanticUI) => {
    $('.ui.navbar .search-icon > i').click(function () {
        let icon = $(this);
        if (icon.text() === 'search') {
            icon.text('close').parents('.content').addClass('searching');
        } else {
            icon.text('search').parents('.content').removeClass('searching');
        }
    });
    $('.ui.sidebar')
        .sidebar('setting', 'dimPage', false)
        .sidebar('attach events', '.ui.navbar .menu-icon')
        .sidebar('attach events', '.ui.sidebar .close-icon');
    $('.ui.navbar .menu')
        .clone()
        .appendTo('.ui.sidebar');
    $('.ui.hero.carousel').slick({
        prevArrow: '<button class="ui prev bottom button"><i class="material-icons">chevron_left</i></button>',
        nextArrow: '<button class="ui next bottom button"><i class="material-icons">chevron_right</i></button>',
        responsive:[
            {
                breakpoint:767,
                settings:{
                    dots:true,
                }
            }
        ]
    });
});