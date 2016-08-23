'use strict';

const DEFAULT_HP = 10;

module.exports = function Monster(name, type, hp) {
  this.name = name || '';
  this.type = type || '';
  this.hp = parseInt(hp) || DEFAULT_HP;
};
