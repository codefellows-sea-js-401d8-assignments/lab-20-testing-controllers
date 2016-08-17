'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./style/scss/main.scss');

// npm modules
const angular = require('angular');

// create angular module
angular.module('gameApp', []);

// controllers
require('./controller/game-controller');

console.log('hello world');
