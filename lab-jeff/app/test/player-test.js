'use strict';

describe('player controller testing', function() {
  beforeEach(() => {
    angular.mock.module('testingApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('PlayerController', { $scope: this.scope });
    });
  });

  it('should create a new player with a class', () => {
    this.scope.playerCtrl.createPlayer({
      name: 'jeff',
      class: 'wizard',
    });
    expect(this.scope.playerCtrl.player.name).toBe('jeff');
    expect(this.scope.playerCtrl.player.class).toBe('wizard');
  });
});
