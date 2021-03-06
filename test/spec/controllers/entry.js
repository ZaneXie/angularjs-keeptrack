'use strict';

describe('Controller: EntryCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsKeeptrackApp'));

  var EntryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntryCtrl = $controller('EntryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
