'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
angular.module('testingApp', []);

require('./controller/player-controller.js');

console.log('Danger Will Robinson!');
