'use strict';

describe('testing game-controller', function() {
  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('GameController', {$scope: this.scope});
    });
  });

  it('should create a player', () => {
    this.scope.gameCtrl.createPlayer({name: 'Chops', weapon: 'Wand'});
    expect(this.scope.gameCtrl.player.name).toBe('Chops');
    expect(this.scope.gameCtrl.player.weapon).toBe('Wand');
  });

  it('should create a monster', () => {
    this.scope.gameCtrl.createMonster({name: 'Dirk', type: 'ghoul'});
    expect(this.scope.gameCtrl.monster.name).toBe('Dirk');
    expect(this.scope.gameCtrl.monster.type).toBe('ghoul');
  });
});
