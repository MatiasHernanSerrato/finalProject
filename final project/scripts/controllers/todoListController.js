appTodo.controller("todoListController", function($scope, localStorageService, listTaskService) {
    $scope.sortTasks = listTaskService.sortTasksService();
    $scope.filterPriorityItem = listTaskService.filterPriorityService();
    $scope.filterStatusItem = listTaskService.filterStatusItemService();
    $scope.optionsStatus = listTaskService.optionsStatusService();
    var tasksFile = localStorageService.get("listOfTasks");
    if (tasksFile) {
        $scope.listTasks = tasksFile;
    } else {
        $scope.listTasks = [];
    };
    $scope.$watchCollection('listTasks', function(newValue, oldValue) {
        localStorageService.set("listOfTasks", $scope.listTasks);
    });
    $scope.getTotal = function() {
        return $scope.listTasks.length;
    }
    $scope.styleNg = {
        daltonico: false,
        done: false
    }
    $scope.showEditElement = false;
    $scope.edit = function(activity) {
        $scope.showEditElement = true;
        $scope.current = activity;
    }
    $scope.save = function(activity) {
        $scope.showEditElement = false;
        $scope.current = $scope.listTasks;
        localStorageService.set("listOfTasks", $scope.listTasks);
        $scope.newAct = {};
        $scope.current = {};
    }
    $scope.clearCompleted = function() {
        $scope.showEditElement = false;
        var x = $scope.listTasks;
        $scope.listTasks = [];
        angular.forEach(x, function(activity) {
            if (!activity.done) $scope.listTasks.push(activity);
        });
    }

    $scope.remove = function(activity) {
        $scope.showEditElement = false;
        var txt;
        var r = confirm("Do you want to delete this element?");
        if (r == true) {
            $scope.listTasks.splice($scope.listTasks.indexOf(activity), 1)
            txt = "Deleted";
        } else {
            txt = "Canceled";
        }
    }
    $scope.clearAll = function() {
        $scope.showEditElement = false;
        var txt;
        var r = confirm("Do you want to clear all?");
        if (r == true) {
            $scope.listTasks = [];
            txt = "Elements deleted";
        } else {
            txt = "Canceled";
        }
    }
    //  $scope.listPriority= 'medium';
    //  $scope.listTasks =[];
});
