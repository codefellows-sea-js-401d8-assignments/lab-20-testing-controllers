'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp('GameController', ['$scope', function($scope) {

  $scope.gameCtrl = {};
  $scope.gameCtrl.monster.created = false;
  $scope.gameCtrl.player.created = false;

  $scope.createMonster = function(monster) {
    $scope.gameCtrl.monster = monster;
    console.log('monster: ', monster);
    $scope.gameCtrl.monster.create = true;
  };

  $scope.createPlayer = function(player){
    $scope.gameCtrl.player = player;
    console.log('player: ', player);
    $scope.gameCtrl.player.created = true;
  };

}]);
