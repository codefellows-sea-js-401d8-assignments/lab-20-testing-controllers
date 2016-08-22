'Use strict';

describe('testing game-controller', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('GameController', {$scope: this.scope});
    });
  });
  it('should create a player', () => {
    this.scope.playerCtrl.signUp({name: 'Johnny'});
    expect(this.scope.playerCtrl.player.name).toBe('Johnny');
  });
  it('should create a player', () => {
    this.scope.monsterCtrl.signUp({name: 'Mike'});
    expect(this.scope.monsterCtrl.monster.name).toBe('Mike');
  });
});
