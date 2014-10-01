angular.module('myApp')
    .factory('EstoqueRepositorio', ['Restangular', function(Restangular){

        'use strict';

        return{
            get: function(){
                return Restangular.all('estoque').getList();
            },

            add: function(lancamentoEstoque){
                return Restangular.all('estoque').post(lancamentoEstoque);
            },

            update: function(lancamentoEstoque){
                return Restangular.one('estoque', lancamentoEstoque.id).customPUT(lancamentoEstoque);
            },

            remove: function(lancamentoEstoque){
                return Restangular.one('estoque', lancamentoEstoque.id).customDELETE();
            }
        };

    }]);
