'use strict';

requirejs.config({
    paths: {
        jquery: 'jquery.min',
        semanticUI: '../semantic/dist/semantic.min',
        slick:'../slick/slick.min'
    },
    shim: {
        semanticUI: {
            deps: ['jquery']
        },
        slick:{
            deps:['jquery']
        }
    },
    map: {
        '*': {
            'css': 'css.min'
        }
    }
});