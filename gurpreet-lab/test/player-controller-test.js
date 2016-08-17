'use strict';

describe('testing player-controller', function() {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('playerController', {$scope: this.scope});
    });
  });

  it('should create a player',() => {
    this.scope.playerCtrl.signUp({name: 'goo'})
    expect(this.scope.playerCtrl.player.name).tobe('goo');
  });
});
