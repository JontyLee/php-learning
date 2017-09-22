'use strict';

requirejs.config({
    paths: {
        jquery: 'jquery.min',
        semanticUI: '../semantic/dist/semantic.min'
    },
    shim: {
        semanticUI: {
            deps: ['jquery']
        }
    },
    map: {
        '*': {
            'css': 'css.min'
        }
    }
});
requirejs(['jquery', 'semanticUI'], ($, semanticUI) => {
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
});