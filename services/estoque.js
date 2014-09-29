angular.module('myApp')
    .factory('EstoqueRepositorio', ['Restangular', function(Restangular){

        'use strict';

        return{
            get: function(){
                return Restangular.all('estoque').getList();
            }
        };

    }]);
