'use strict';

/**
 * @ngdoc function
 * @name marvelAngularApp.services
 * @description
 * # apiService
 * Service to get data from the API
 */

angular.module('marvelAngularApp')

  .service('apiService', ['$resource', 'baseURL', 'publicKey', 'privateKey', 'md5', function ($resource, baseURL, publicKey, privateKey, md5) {

    function getHash(timeStamp) {
      return md5.createHash(timeStamp + privateKey + publicKey);
    }

    // Function to retrieve data from API. Receives the resource as a parameter
    this.getData = function (resource, offset) {
      var ts = new Date().getTime();
      return $resource(baseURL + resource, null, {
        'get': {
          method: 'GET',
          params: {
            ts: ts,
            apikey: publicKey,
            hash: getHash(ts),
            offset: offset
          }
        }
      });
    };

  }]);
