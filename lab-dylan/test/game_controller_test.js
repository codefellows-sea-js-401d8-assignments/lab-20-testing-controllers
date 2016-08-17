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
    this.scope.gameCtrl.createPlayer({name:'test', class:'hobo', affinity:'light'});
    expect(this.scope.gameCtrl.player.name).toBe('test')
  });

  it('should create a monster', () => {
    this.scope.gameCtrl.createMonster({name:'ghrrr', race:'troll', affinity: 'dark'});
    expect(this.scope.gameCtrl.monster.race).toBe('troll');
  });
});
