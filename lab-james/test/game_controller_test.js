'use strict';

describe('test the game controller', function() {
  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('GameController', {$scope: this.scope});
    });
  });

  it('should create a player', () => {
    this.scope.gameControl.createPlayer({name: 'james'});
    expect(this.scope.gameControl.player.name).toBe('james');
  });

  it('should create a monster', () => {
    this.scope.gameControl.createMonster({name: 'lord farqwat'});
    expect(this.scope.gameControl.monster.name).toBe('lord farqwat');
  });
});
