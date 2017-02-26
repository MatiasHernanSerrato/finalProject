appTodo.controller("editController",function($scope,$routeParams,localStorageService){
  var objects =localStorageService.get("listOfTasks");
/*  $scope.$watchCollection('listTasks',function(newValue,oldValue){
      localStorageService.set("listOfTasks",$scope.listTasks);
    });
  //console.log(objects);
  var cantidadObjects = objects.length;
  //console.log(cantidadObjects);
  var caca =$routeParams.title;

  for (var i = 0; i < cantidadObjects; i++) {
    console.log(objects[i]);
  }
  $scope.newAct = {
    title: caca
  }

//  var a = objects.indexOf("title");
  //console.log(a);


//  $scope.newAct.title = caca;
  //console.log(objects[caca]);
  //$scope.newAct.title = objects.
/*  console.log($scope.listTasks);
  console.log($routeParams.title);
  console.log($routeParams.description);
  console.log($routeParams.title);
    var title = $routeParams.title;
  var description = $routeParams.title;*/

});
