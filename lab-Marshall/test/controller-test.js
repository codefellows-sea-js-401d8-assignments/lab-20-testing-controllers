'use strict';

describe('testing controller', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('PlayerController', {$scope: this.scope});
    });
  });

  it('should create new player on signup', () => {
    console.log('this.scope', this.scope);
    this.scope.playerCtrl.signUp({name: 'goo'})
    expect(this.scope.playerCtrl.player.name).toBe('goo');
  });
});
