'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp.controller('GameController', ['$scope', function($scope) {

  $scope.gameCtrl = {};
  $scope.gameCtrl.monsterCreated = false;
  $scope.gameCtrl.playerCreated = false;
  $scope.gameCtrl.monsterTypes = ['Werewolf', 'Vampire', 'Dragon', 'Narwhal'];

  $scope.gameCtrl.createMonster = function(monster) {
    $scope.gameCtrl.monster = monster;
    console.log('monster: ', monster);
    $scope.gameCtrl.monsterCreated = true;
  };

  $scope.gameCtrl.createPlayer = function(player){
    $scope.gameCtrl.player = player;
    console.log('player: ', player);
    $scope.gameCtrl.playerCreated = true;
  };

}]);
