'use strict';

describe('testing game-controller', function(){
  beforeEach(() => {
    angular.mock.module('gameApp');
    //^creating an instance of gameApp
    angular.mock.inject(($controller, $rootScope) => {
      //$controller creates instances of player controller
      this.scope = $rootScope.$new();
      //this.scope references the whole describe block because of arrow functions
      new $controller('GameController', {$scope: this.scope});
    });
  });

  it('should create a player', () => {
    this.scope.gameCtrl.createPlayer({name: 'grettle', class: 'hipster'});
    expect(this.scope.gameCtrl.player.name).toBe('grettle');
    expect(this.scope.gameCtrl.player.class).toBe('hipster');
  });

  it('should create a monster', () => {
    this.scope.gameCtrl.createMonster({name: 'herbert', class: 'muppet'});
    expect(this.scope.gameCtrl.monster.name).toBe('herbert');
    expect(this.scope.gameCtrl.monster.class).toBe('muppet');
  });
});
