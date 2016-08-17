'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp.controller('GameController', ['$scope', function($scope) {
  $scope.gameCtrl = {};
  $scope.gameCtrl.classes = ['Fireman', 'Dentist', 'Chef', 'Catburglar'];
  $scope.gameCtrl.monsterTypes = ['Wolfman', 'Mummy', 'Zombie', 'Frankenstein'];
  $scope.gameCtrl.playerDone = false;
  $scope.gameCtrl.monsterDone = false;

  $scope.gameCtrl.createPlayer = function(player) {
    $scope.gameCtrl.player = player;
    $scope.gameCtrl.playerDone = true;
  };

  $scope.gameCtrl.createMonster = function(monster) {
    $scope.gameCtrl.monster = monster;
    $scope.gameCtrl.monsterDone = true;
  };
}]);
