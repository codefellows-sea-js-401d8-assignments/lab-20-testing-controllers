'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('GameController', ['$log', GameController]);

GameController.player = {};
GameController.player.playerIsDone = false;

GameController.monster = {};
GameController.monster.monsterIsDone = false;
 
// GameController.map = {};
// GameController.map.isDone = false;

function GameController($log){

  this.history = [{ id: 0, text: 'It begins...' }];

  this.directions = ['north', 'south', 'east', 'west'];

  this.playerSignUp = function(player){
    this.player = player;
    this.classes = ['Knight', 'Hacker', 'Pirate', 'Intern'];
    this.playerIsDone = true;
  };

  this.monsterSignUp = function(monster){
    this.monster = monster;
    this.species = ['Baby Seal', 'Taurus Demon', 'Moose', 'Hell Witch', 'Several Chickens'];
    this.monsterIsDone = true;
  };

  this.map = require('../lib/map.js');

  this.moveDirection = function(direction){
    $log.debug('gameCtrl.moveDirection');
    if (this.map[this.player.location]){
      let currentLocation = this.map[this.player.location];
      $log.log('currentLocation', currentLocation);
      let nextRoom = currentLocation[direction];
      $log.log('nextRoom', nextRoom);
      if (nextRoom !== 'wall') {
        this.player.location = nextRoom;
        this.logHistory('You have entered ' + this.player.location);
        return;
      }
      this.logHistory('You hit a wall, dummy.');
    }
  };

  this.logHistory = function(info){
    this.history.push({id: this.history.length, text: `${this.player.name}, ${info}`});
  };
}
