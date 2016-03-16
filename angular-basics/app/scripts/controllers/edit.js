'use strict';

/**
 * @ngdoc function
 * @name angularBasicsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularBasicsApp
 */
angular.module('angularBasicsApp')
  .controller('EditCtrl', function () {
    var edit = this;

    edit.title="Name";

    var data = localStorage.getItem('data');
    if (data) {
      edit.data = JSON.parse(data);
    }

    edit.save = function(data) {
      localStorage.setItem('data', JSON.stringify(data));
    };
  });
