var app = angular.module('myApp',['ngRoute']);

app.directive('marlon', function(){
   return{
       restrict: 'E',
       templateUrl: '/explorandoangularjs/views/marlon.html'
   }
});

app.config(function($routeProvider){
   $routeProvider.when('/', {
        templateUrl:'views/lista_itens.tpl.html'
   });

   $routeProvider.when('/novoitem', {
        templateUrl:'views/adiciona_item.tpl.html'
   });

   $routeProvider.when('/listaitens', {
        templateUrl:'views/lista_itens.tpl.html'
   });
});
