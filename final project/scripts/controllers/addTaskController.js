appTodo.controller("addTaskController",function($scope,localStorageService,listTaskService,$location){
  $scope.go = function ( path ) {
  $location.path( path );
 };
  var tasksFile = localStorageService.get("listOfTasks");
  if(tasksFile){
    $scope.listTasks = tasksFile;
  }else{
    $scope.listTasks= [];
  };
  $scope.$watchCollection('listTasks',function(newValue,oldValue){
      localStorageService.set("listOfTasks",$scope.listTasks);
    });
  $scope.options = listTaskService.optionsPriority();
  $scope.optionsStatus = listTaskService.optionsStatusService();
  $scope.addTask = function(){
    $scope.newAct.done = false;
    $scope.listTasks.push($scope.newAct);
    $scope.newAct = {};
  };

 /*  $scope.editorEnabled=false;
  $scope.enableEditor = function(activity){
    $scope.editorEnabled = true;
    $scope.editableDescription= $scope.description;
  };
  $scope.disableEditor=function(){
    $scope.editorEnabled=false;
  }*/
});
