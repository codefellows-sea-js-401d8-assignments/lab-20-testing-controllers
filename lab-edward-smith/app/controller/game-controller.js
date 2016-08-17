'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp.controller('GameController', ['$scope', function($scope){
  $scope.gameCtrl = {};

  $scope.gameCtrl.weapons = ['Sword', 'Gun', 'Wand', 'Axe'];
  $scope.gameCtrl.playerCreated = false;
  $scope.gameCtrl.createPlayer = function(player) {
    $scope.gameCtrl.player = player;
    $scope.gameCtrl.playerCreated = true;
  };

  $scope.gameCtrl.monsterTypes = ['ghoul', 'goblin', 'zombie'];
  $scope.gameCtrl.monsterCreated = false;
  $scope.gameCtrl.createMonster = function(monster) {
    $scope.gameCtrl.monster = monster;
    $scope.gameCtrl.monsterCreated = true;
  };
}]);
