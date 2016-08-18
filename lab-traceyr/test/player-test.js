'use strict';

describe('testing creation of a player and a monster', function(){
  beforeEach(()=>{
    angular.mock.module('lab-20');
    angular.mock.inject(($controller, $rootScope)=>{
      this.scope = $rootScope.$new();
      new $controller('GameController', {$scope: this.scope});
    });
  });

  it('should create a player', ()=>{
    this.scope.gameCtrl.createPlayer({ name: 'name', email: 'email@email', class: 'Elf'});
    expect(this.scope.gameCtrl.player.name).toBe('name');
  });

  it('should create a monster', ()=>{
    this.scope.gameCtrl.createMonster({ name: 'garble', class: 'Orc'});
    expect(this.scope.gameCtrl.monster.name).toBe('garble');
  });
});
