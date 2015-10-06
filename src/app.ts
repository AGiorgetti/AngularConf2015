namespace AngularConf15 {

	class ShellController {
		title = "AngularConf2015";
	}

	angular.module("app", ["ngRoute"])
		.controller("ShellController", ShellController)

		.config(["$routeProvider", function($routeProvider: ng.route.IRouteProvider) {
			$routeProvider
				.when("/todolistController", { templateUrl: "todoList/todoListController.html" })
				.when("/todolistDirective", { templateUrl: "todoList/todoListDirective.html" });
		}]);

}