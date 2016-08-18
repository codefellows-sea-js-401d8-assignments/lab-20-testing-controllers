'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp.controller('GameController', ['$scope', function($scope) {
  $scope.gameControl = {};

  $scope.gameControl.createPlayer = function(player) {
    console.log('hero created: ' + player);
    $scope.gameControl.player = player;
  };
  $scope.gameControl.playerFaction = ['alliance', 'horde'];
  $scope.gameControl.playerRace = ['human', 'dwarf', 'orc', 'undead'];
  $scope.gameControl.playerClass = ['warrior', 'rogue', 'priest', 'mage', 'warlock'];

  $scope.gameControl.createMonster = function(monster) {
    console.log('monster created: ' + monster);
    $scope.gameControl.monster = monster;
  };
  $scope.gameControl.monsterLevel = ['normal', 'elite', 'rare-elite'];
  $scope.gameControl.monsterType = ['humanoid', 'beast', 'demon'];
}]);
