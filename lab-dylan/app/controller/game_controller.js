'use strict';
const angular = require('angular');
const gameApp = angular.module('gameApp');


gameApp.controller('GameController', ['$scope', function($scope) {
  $scope.gameCtrl = {};
  $scope.gameCtrl.player = {};
  $scope.gameCtrl.monster = {};
  $scope.gameCtrl.player.isDone = false;
  $scope.gameCtrl.monster.isDone = false;
  $scope.gameCtrl.affinities = ['light', 'dark', 'neutral', 'I HATE EVERYONE'];
  $scope.gameCtrl.classes = ['hobo', 'bum', 'drunk', 'washed out has been'];

  $scope.gameCtrl.createPlayer = function(player) {
    $scope.gameCtrl.player = player;
    $scope.gameCtrl.player.isDone = true;
  };

  $scope.gameCtrl.createMonster = function(monster) {
    $scope.gameCtrl.monster = monster;
    $scope.gameCtrl.monster.isDone = true;
  };
}]);
