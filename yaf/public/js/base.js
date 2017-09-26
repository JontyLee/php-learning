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