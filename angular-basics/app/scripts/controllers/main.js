'use strict';

/**
 * @ngdoc function
 * @name angularBasicsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBasicsApp
 */
angular.module('angularBasicsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.items = [
      'First Item',
      'Second Item',
      'Third Item'
    ];
    $scope.items_returns = [
      {
        name: "nitish",
        married: "about to"
      },
      {
        name: "kuldev",
        married: "Yes :)"
      }
    ];
    var main = this;
    main.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
