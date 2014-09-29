angular.module('myApp',['ngRoute', 'restangular'])

.directive('marlon', function(){
   return{
       restrict: 'E',
       templateUrl: '/explorandoangularjs/views/marlon.html'
   }
})

.config(function($routeProvider){
   $routeProvider.when('/', {
        templateUrl:'views/home.html'
   });

   $routeProvider.when('/estoque', {
        templateUrl:'views/estoque.html',
        controller: 'estoqueController'
   });

   $routeProvider.when('/sobre',{
      templateUrl: 'views/sobre.html'
   });

   $routeProvider.when('/vendas',{
      templateUrl: 'views/vendas.html'
   });

   $routeProvider.when('/itens',{
      templateUrl: 'views/itens.html',
      controller: 'itemsController'
   });
})

.factory('RestangularWithCache', ['Restangular', function(Restangular) {
    'use strict';
    return Restangular.withConfig(function(RestangularConfigurer){
        RestangularConfigurer.setDefaultHttpFields({cache: true});
    });

}]);
