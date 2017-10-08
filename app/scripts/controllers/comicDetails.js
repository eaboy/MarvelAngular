'use strict';

/**
 * @ngdoc function
 * @name marvelAngularApp.controller:ComicDetailsCtrl
 * @description
 * # ComicDetailsCtrl
 * Controller of the comic details page
 */
angular.module('marvelAngularApp')
  .controller('ComicDetailsCtrl', ['apiService', '$routeParams', function (apiService, $routeParams) {
    
    const self = this;
    const comicId = $routeParams.id;
    this.loaded = false;
    this.error = false;

    apiService.getData('comics/'+comicId).get(
        function (response) {
          self.loaded = true;
          self.comic = response.data.results[0];
        },
        function (error) {
          self.error = true;
          console.log('Error: ' + error);
        }
      );
  }]);