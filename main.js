var app = angular.module('myApp',[]);

app.directive('marlon', function(){
   return{
       restrict: 'E',
       templateUrl: '/views/marlon.html'
   }
});
