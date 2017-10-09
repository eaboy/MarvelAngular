'use strict';

/**
 * @ngdoc function
 * @name marvelAngularApp.services
 * @description
 * # paginationService
 * Service to get data from the API
 */

angular.module('marvelAngularApp')

  .service('paginationService', function () {

    this.getTotalPages = function (total, itemsPerPage) {
      return parseInt(--total / itemsPerPage) + 1;
    };

    this.getPages = function (actual, totalPages) {
      var pagesArray = [];
      var tempPage;
      var i = 0;
      if (totalPages - actual < 2) {
        i = totalPages - actual - 2;
      }
      for (; pagesArray.length < 5; i++) {
        tempPage = actual - 2 + i;
        if (tempPage > 0) {
          pagesArray.push(tempPage);
        }
      }
      return pagesArray;
    };

  });
