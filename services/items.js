angular.module('myApp')
    .factory('ItemsRepositorio', ['Restangular', function(Restangular){

        'use strict';

        return{
            get: function(){
                return Restangular.all('itens').getList();
            },

            add: function(item){
                return Restangular.all('item').post(item);
            },

            update: function(item){
                return Restangular.one('item', item.i_item).customPUT(item);
            },

            remove: function(item){
                return Restangular.one('item', item.i_item).customDELETE();
            }
        };

    }]);
