'use strict';

requirejs.config({
    paths: {
        jquery: 'jquery.min',
        semanticUI: '../semantic/dist/semantic.min'
    },
    shim: {
        semanticUI: {
            deps: ['jquery', 'css!../semantic/dist/semantic.min']
        }
    }
});
requirejs(['jquery'], ($) => {
    var title = $('title');
    console.log(title.html());
});