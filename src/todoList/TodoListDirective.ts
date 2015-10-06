namespace AngularConf15 {
	
	// Version 1 : define the directive using a function
	
	function TodoListDirectiveFactory() : ng.IDirective {
		return <ng.IDirective>{
			templateUrl: "todoList/todoListDirectiveTemplate.html",
			controller: "TodoListController",
			controllerAs: "vm"
		}
	}
	
	angular.module("app")
		.directive("todoListDirective1", TodoListDirectiveFactory);
	
}