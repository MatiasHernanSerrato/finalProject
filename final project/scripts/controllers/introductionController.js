appTodo.controller("introductionController",function($scope,$location){
  $scope.go = function ( path ) {
  $location.path( path );
 };
});
