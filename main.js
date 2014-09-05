var app = angular.module('myApp',[]);

app.directive('marlon', function(){
   return{
       restrict: 'E',
       templateUrl: '/explorandoangularjs/views/marlon.html'
   }
});
