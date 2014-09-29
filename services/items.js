angular.module('myApp')
    .factory('ItemsRepositorio', ['Restangular', '$http', function(Restangular, $http){

        'use strict';

        return{
            get: function(){
                return Restangular.all('itens').getList();
            },

            add: function(item){
                return Restangular.all('item').post(item);
            },

            update: function(item){
                return Restangular.one('itens', item.i_item).customPOST(item);
            }
        };

    }]);
