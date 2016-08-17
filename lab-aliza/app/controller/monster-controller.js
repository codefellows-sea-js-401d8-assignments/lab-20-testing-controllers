'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('MonsterController', ['$scope', function($scope){
  $scope.playerCtrl = {};
  $scope.playerCtrl.isDone = false;

  $scope.playerCtrl.createMonster = function(monster) {
    $scope.playerCtrl.monster = monster;
    $scope.playerCtrl.isDone = true;
  };
}]);
