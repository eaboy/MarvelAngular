'use strict';

/**
 * @ngdoc function
 * @name marvelAngularApp
 * @description
 * Constants and a directive of the app
 */

angular.module('marvelAngularApp')
  .constant('baseURL', 'http://gateway.marvel.com/v1/public/') // Base URL of the API
  .constant('publicKey', 'fa7d13426da19df5c883a5bdec615b90') // Marvel API public key
  .constant('privateKey', 'f12058625f9e2bc79d676f823c922c784b274c33') // Marvel API private key

  // Directive to control ui loading and error status 
  .directive('uiLoadingAndError', function () {
    return {
      restrict: 'E',
      template: '<div class="loading-state" ng-if="!loaded && !error">Loading {{text}}... <div class="loader"></div></div>' +
        '<div class="error-state" ng-if="error">There was an error while loading {{text}}, please try again later.</div>',
      scope: {
        loaded: '<', // Loaded variable to control show/hide loading-state div
        error: '<', // Error variable to control show/hide error-state div
        text: '@' // Text variable to set the section/web of the messages
      }
    };
  });
