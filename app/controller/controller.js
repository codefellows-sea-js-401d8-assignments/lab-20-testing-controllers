'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('GameController', ['$scope', function($scope) {
  $scope.playerCtrl = {};
  $scope.playerCtrl.isDone = false;
  $scope.playerCtrl.classes = ['stealth', 'friend', 'sneaker', 'jammer'];

  $scope.playerCtrl.signUp = function(player) {
    //creates the player
    $scope.playerCtrl.player = player;
    $scope.playerCtrl.isDone = true;
  } ;
  $scope.monsterCtrl = {};
  $scope.monsterCtrl.isDone = false;
  $scope.monsterCtrl.classes = ['Villian', 'Creeper', 'Clinton', 'Trump'];

  $scope.monsterCtrl.signUp = function(monster) {
    $scope.monsterCtrl.monster = monster;
    $scope.monsterCtrl.isDone = true;
  } ;
}]);
