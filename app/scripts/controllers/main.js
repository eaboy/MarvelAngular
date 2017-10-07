'use strict';

/**
 * @ngdoc function
 * @name marvelAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelAngularApp
 */
angular.module('marvelAngularApp')
  .controller('MainCtrl', ['apiService', function (apiService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('hola');
    apiService.getData('characters').query(
      function(response){
        console.log(response);
      }, function(error) {
        console.log('Error: '+error);
      }
    );
  }]);
