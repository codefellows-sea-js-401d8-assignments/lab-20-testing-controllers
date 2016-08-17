'use strict';

describe('testing player-controller', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    //^creating an instance of demoApp
    angular.mock.inject(($controller, $rootScope) => {
      //$controller creates instances of player controller
      this.scope = $rootScope.$new();
      //this.scope references the whole describe block because of arrow functions
      new $controller('PlayerController', {$scope: this.scope});
    });
  });

  it('should create a player', () => {
    console.log('this.scope', this.scope);
    this.scope.playerCtrl.createPlayer({name: 'goo'});
    expect(this.scope.playerCtrl.player.name).toBe('goo');
  });
});
