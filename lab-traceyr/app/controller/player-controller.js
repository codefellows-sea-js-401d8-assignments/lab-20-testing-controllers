'use strict';

const angular = require('angular');
const lab20 = angular.module('lab-20');

lab20.controller('GameController', ['$scope', function($scope){
  $scope.gameCtrl = {};
  $scope.gameCtrl.classes = ['Elf', 'Hobbit', 'Wizard', 'Human', 'Dwarf', 'Ent'];
  $scope.gameCtrl.monsters = ['Orc', 'Balrog', 'Dragon', 'Goblin', 'Ringwraith', 'Troll'];
  $scope.gameCtrl.playerDone = false;
  $scope.gameCtrl.monsterDone = false;

  $scope.gameCtrl.createPlayer = function(player){
    $scope.gameCtrl.player = player;
    $scope.gameCtrl.playerDone = true;
  };

  $scope.gameCtrl.createMonster = function(monster){
    $scope.gameCtrl.monster = monster;
    $scope.gameCtrl.monsterDone = true;
  };
}]);
