'use strict';

describe('testing game controller', function() {
  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('GameController', {$scope: this.scope});
    });
  });

  it('should create a player', () => {
    this.scope.gameCtrl.createPlayer({name:'testName', username:'KatyPerryFan69', class:'Dentist'});
    expect(this.scope.gameCtrl.player.name).toBe('testName');
  });

  it('should create a monster', () => {
    this.scope.gameCtrl.createMonster({type:'Wolfman', name:'Paul'});
    expect(this.scope.gameCtrl.monster.name).toBe('Paul');
  });
});
