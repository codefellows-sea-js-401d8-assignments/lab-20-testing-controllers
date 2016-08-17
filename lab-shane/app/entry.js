'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');

angular.module('playerApp', []);

require('./controller/game-controller.js');

console.log('hello');
