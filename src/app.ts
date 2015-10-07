namespace AngularConf15 {

	class ShellController {
		title = "AngularConf2015";
	}

	angular.module("app", ["ngRoute"])
		.controller("ShellController", ShellController)

		.config(["$routeProvider", function($routeProvider: ng.route.IRouteProvider) {
			$routeProvider
				.when("/todolistController", { templateUrl: "todoList/todoListController.html" })
				.when("/todolistDirective", { templateUrl: "todoList/todoListDirective.html" })
				
				.when("/todolistJsController", { templateUrl: "todoList-js/todoListController.html" })
				.when("/todolistJsDirective", { templateUrl: "todoList-js/todoListDirective.html" });
		}]);

}