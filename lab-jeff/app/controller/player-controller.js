'use strict';

const angular = require('angular');
const testingApp = angular.module('testingApp');

testingApp.controller('PlayerController', ['scope', function($scope){
  $scope.playerCtrl = {};
  $scope.playerCtrl.playerCreated = false;

  $scope.playerCtrl.classes = [
    'wizard',
    'barbarian',
    'hunter',
    'rogue',
  ];

  $scope.createPlayer = function(player){
    $scope.playerCtrl.player = player;
    console.log('player: ', player);
    $scope.playerCtrol.playerCreated = true;
  };

}]);
