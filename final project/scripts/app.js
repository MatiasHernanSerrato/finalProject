var appTodo = angular.module("todoList", ["LocalStorageModule", "ngRoute"]);
appTodo.config(function($routeProvider) {
    $routeProvider.when("/", {
            controller: "introductionController",
            templateUrl: "view/introduction.html"
        })
        .when("/addTask/", {
            templateUrl: "view/todo-list-component.html"
        })
        .when("/myTasks/", {
            controller: "todoListController",
            templateUrl: "view/myTasks.html"
        })
        .when("/howTo/", {
            controller: "todoListController",
            templateUrl: "view/howTo.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});
