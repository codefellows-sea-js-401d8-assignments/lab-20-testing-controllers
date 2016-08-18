'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/main/base.scss');

const angular = require('angular');

angular.module('testingApp', []);

console.log('Danger Will Robinson!');
