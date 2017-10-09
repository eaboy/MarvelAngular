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

    // Variables declaration and initilization
    var self = this;
    this.comics = []; // Initialize comic list to empty to get ng-enter animation works
    this.loaded = false;
    this.error = false;
    var itemsPerPage = 20;
    this.actualPage = 1;

    // Receives data of the comics 
    this.updateData = function () {
      apiService.getData('characters/1009351/comics', itemsPerPage * (self.actualPage - 1)).get(
        function (response) {
          self.loaded = true;
          self.totalPages = paginationService.getTotalPages(response.data.total, itemsPerPage); // Receives total of pages calculated by total of comics received and items per page
          self.pages = paginationService.getPages(self.actualPage, self.totalPages); // Receives array of pages to use in the pagination bar
          $timeout(function () { // Use $timeout to load render comic list to DOM at next event loop to make ng-enter animation works
            self.comics = response.data.results;
          }, 0);
        },
        function (error) {
          self.error = true;
          console.log('Error: ' + error);
        }
      );
    };

    // Resets data and ui states, and sets new page before reloads new data
    this.loadPage = function (page) {
      self.actualPage = page;
      self.comics = [];
      self.loaded = false;
      self.updateData();
    };

    // Changes url to load comic details section by comic id
    this.gotoDetails = function (comicId) {
      $location.path('/comic/' + comicId);
    };

    this.updateData(); // Initial load of data 

  }]);
