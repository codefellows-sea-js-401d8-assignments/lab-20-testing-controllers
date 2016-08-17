'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

const Player = require('../model/Player');
const Monster = require('../model/Monster');

gameApp.controller('GameController', ['$scope', function($scope) {
  $scope.gameController = {};
  $scope.gameController.playerExist = false;
  $scope.gameController.monsterExist = false;
  $scope.gameController.factions = ['Alliance', 'Horde'];
  $scope.gameController.races = ['Human', 'Orc', 'Dwarf', 'Undead', 'Night Elf', 'Tauren', 'Gnome', 'Troll', 'Draenei', 'Blood Elf', 'Worgen', 'Goblin', 'Pandaren'];
  $scope.gameController.playerClasses = ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Death Knight', 'Shaman', 'Mage', 'Warlock', 'Monk', 'Druid', 'Demon Hunter'];

  $scope.gameController.createPlayer = function(name, faction, race, playerClass) {
    $scope.gameController.player = new Player(name, faction, race, playerClass);
    $scope.gameController.playerExist = true;
  };

  $scope.gameController.createMonster = function(name, type, hp) {
    $scope.gameController.monster = new Monster(name, type, hp);
    $scope.gameController.monsterExist = true;
  };
}]);
