'use strict';

/**
 * @ngdoc function
 * @name marvelAngularApp.services
 * @description
 * # paginationService
 * Service control pagination logic
 */

angular.module('marvelAngularApp')

  .service('paginationService', function () {

    // Returns total pages calculated by total items and items per page received
    this.getTotalPages = function (total, itemsPerPage) {
      return parseInt(--total / itemsPerPage) + 1;
    };

    // Returns pages to show at pagination var calculated by current page and total pages received
    this.getPages = function (actual, totalPages) {
      var pagesArray = [];
      var tempPage;
      var i = 0;
      if (totalPages - actual < 2) { // Controls whether the current page is one of the last two
        i = totalPages - actual - 2;
      }
      for (; pagesArray.length < 5; i++) { // Adds five pages numbers to the array to return
        tempPage = actual - 2 + i;
        if (tempPage > 0) {
          pagesArray.push(tempPage);
        }
      }
      return pagesArray;
    };

  });
