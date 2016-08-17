'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('GameController', ['$scope', function($scope){
  $scope.playerCtrl = {};
  $scope.playerCtrl.isDone = false;
  $scope.playerCtrl.classes = ['Knight', 'Hacker', 'Pirate', 'Intern'];

  $scope.playerCtrl.signUp = function(player){
    console.log('player: ', player);

    $scope.playerCtrl.player = player;
    $scope.playerCtrl.isDone = true;
  };

  $scope.monsterCtrl = {};
  $scope.monsterCtrl.isDone = false;
  $scope.monsterCtrl.species = ['Baby Seal', 'Taurus Demon', 'Moose', 'Hell Witch', 'Several Chickens'];

  $scope.monsterCtrl.submit = function(monster){
    console.log('monster', monster);

    $scope.monsterCtrl.monster = monster;
    $scope.monsterCtrl.isDone = true;
  };
}]);
