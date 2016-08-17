'use strict';

describe('testing players and monster', function() {
  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('GameController', {$scope: this.scope});
    });
  });

  it('should create a player', () => {
    this.scope.gameCtrl.createPlayer({name: 'Dumbledore'});
    expect(this.scope.gameCtrl.player.name).toBe('Dumbledore');
  });

  it('should create a monster', () =>{
    this.scope.gameCtrl.createMonster({name: 'Werewolf'});
    expect(this.scope.gameCtrl.monster.name).toBe('Werewolf');
  });

});
