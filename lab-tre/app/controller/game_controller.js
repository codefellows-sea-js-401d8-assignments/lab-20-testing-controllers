'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp.controller('GameController', ['$scope', function($scope){
  $scope.gameCtrl = {};
  $scope.gameCtrl.player = {};
  $scope.gameCtrl.villain = {};
  $scope.gameCtrl.player.isDone = false;
  $scope.gameCtrl.player.classes = ['spiderman', 'superman', 'hulk', 'ironman'];
  $scope.gameCtrl.villain.classes = ['magneto', 'scar', 'bane', 'joker'];
  $scope.gameCtrl.villain.isDone = false;
  $scope.gameCtrl.player.isDone = false;

  $scope.gameCtrl.playerCreator = function(player) {
    $scope.gameCtrl.player = player;
    $scope.gameCtrl.player.isDone = true;
  };

  $scope.gameCtrl.villainCreator = function(villain) {
    $scope.gameCtrl.villain = villain;
    $scope.gameCtrl.villain.isDone = true;
  };
}]);
