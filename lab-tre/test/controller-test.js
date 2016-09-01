'use strict';

describe('testing my game-controller', function(){
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

  it('player should be created', () => {
    this.scope.gameCtrl.playerCreator({name: 'spiderman', class: 'youngHero'});
    expect(this.scope.gameCtrl.player.name).toBe('spiderman');
    expect(this.scope.gameCtrl.player.class).toBe('youngHero');
  });

  it('villain should be created', () => {
    this.scope.gameCtrl.createMonster({name: 'dr.evil', class: 'catPerson'});
    expect(this.scope.gameCtrl.monster.name).toBe('dr.evil');
    expect(this.scope.gameCtrl.monster.class).toBe('catPerson');
  });
});
