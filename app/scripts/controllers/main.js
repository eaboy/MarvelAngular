'use strict';

/**
 * @ngdoc function
 * @name marvelAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marvelAngularApp
 */
angular.module('marvelAngularApp')
  .controller('MainCtrl', ['apiService', '$timeout', 'paginationService', '$location', function (apiService, $timeout, paginationService, $location) {

    const self = this;
    this.comics = [];
    this.loaded = false;
    this.error = false;
    const itemsPerPage = 20;
    this.actualPage = 1;

    apiService.getData('characters/1009351').get(
      function (response) {
        self.hulk = response.data.results[0];
      },
      function (error) {
        console.log('Error: ' + error);
      }
    );

    this.updateData = function () {
      apiService.getData('characters/1009351/comics', itemsPerPage * (self.actualPage - 1)).get(
        function (response) {
          self.loaded = true;
          self.totalPages = paginationService.getTotalPages(response.data.total, itemsPerPage);
          self.pages = paginationService.getPages(self.actualPage, self.totalPages);
          $timeout(function(){
            self.comics = response.data.results;
          },0);
        },
        function (error) {
          self.error = true;
          console.log('Error: ' + error);
        }
      );
    };

    this.loadPage = function (page) {
      self.actualPage = page;
      self.comics = [];
      self.loaded = false;
      self.updateData();
    };

    this.gotoDetails = function(comicId) {
      $location.path('/comic/'+comicId);
    };

    this.updateData();

  }]);
