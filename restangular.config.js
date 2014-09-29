'use strict';

angular.module('myApp')

.config(function(RestangularProvider, $httpProvider){
    RestangularProvider.setBaseUrl('http://localhost:3030/restserver');

    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred){
        var extractedData;
        if(operation == 'getList') {
            extractedData = data.items;
        } else {
            extractedData = data;
        }

        return extractedData;
    });

});
