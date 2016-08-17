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
    this.scope.gameController.createPlayer('testname');
    expect(this.scope.gameController.player.name).toBe('testname');
    expect(this.scope.gameController.player.damage).toBe(5);
  });

  it('should create a monster', () => {
    this.scope.gameController.createMonster('testname', 'testtype');
    expect(this.scope.gameController.monster.name).toBe('testname');
    expect(this.scope.gameController.monster.type).toBe('testtype');
    expect(this.scope.gameController.monster.hp).toBe(10);
  });
});
