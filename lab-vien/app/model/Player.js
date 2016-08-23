'use strict';

module.exports = function Player(name, faction, race, playerClass) {
  this.name = name || '';
  this.faction = faction || '';
  this.race = race || '';
  this.playerClass = playerClass || '';
  this.damage = 5;
};
