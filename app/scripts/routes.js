'use strict';

/**
 * @ngdoc function
 * @name marvelAngularApp.config
 * @description
 * Routes of the app
 */

angular.module('marvelAngularApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
