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

    // Function to get the hash combining timestamp given and private and public API keys
    function getHash(timeStamp) {
      return md5.createHash(timeStamp + privateKey + publicKey);
    }

    // Function to retrieve data from API. Receives the resource and offset as a parameter
    this.getData = function (resource, offset) {
      var ts = new Date().getTime(); // Set timestamp to pass to API and to generate hash
      return $resource(baseURL + resource, null, {
        'get': {
          method: 'GET',
          params: { // Params to pass to API
            ts: ts,
            apikey: publicKey,
            hash: getHash(ts),
            offset: offset
          }
        }
      });
    };

  }]);
