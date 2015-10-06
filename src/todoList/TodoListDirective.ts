namespace AngularConf15 {
	
	// Version 1 : define the directive using a function
	
	function TodoListDirectiveFactory(): ng.IDirective {
		return <ng.IDirective>{
			restrict: "AE",
			templateUrl: "todoList/todoListDirectiveTemplate.html",
			controller: "TodoListController",
			controllerAs: "vm"
		}
	}
	
	angular.module("app")
		.directive("todoListDirective", TodoListDirectiveFactory);
	
	// Version 2 : with isolated scope as controllerAs (bindToController: true)
	
	function TodoListDirectiveFactory2(): ng.IDirective {
		return <ng.IDirective>{
			templateUrl: "todoList/todoListDirectiveTemplate.html",
			controller: "TodoListController",
			controllerAs: "vm",
			// add an isolated scope!
			scope: {
				test: "="
			},
			bindToController: true // <- don't forget this! or you'll need to inject the $scope to access anything passed 
			// to the directive from the outside (using arguments and binding) 
			// adding bindToController you just need to define new properties on the controller itself and that's it
			// you can verify it injcting the $scope and look: you have a copy of the property on the scope
			// and one on the controller and they both are out of sync!
		}
	}

	angular.module("app")
		.directive("todoListDirectiveIsoScope", TodoListDirectiveFactory2);
		

	// Version 3 :  define the directive using a class (can be useful to support inheritance for the whole directory and not only for the controller)
	
	class TodoListDirective implements ng.IDirective {
		
		constructor(
			private $log: ng.ILogService
		) { }
		
		restrict = "AE";
		templateUrl = "todoList/todoListDirectiveTemplate.html";
		controller = "TodoListController";
		controllerAs = "vm";

		link = (scope: ng.IScope, elem: ng.IAugmentedJQuery) => {
			// use the 'arrow syntax': we need to create an instance member, not a prototype member
			// this is because of how AngularJS uses the directive definition object and how it invokes
			// the compile and linking function (they are not invoked as member of th directive object and
			// 'this' inside those function will always be undefined, we need to capture a proper 'this' to use
			// other class functions)
			this.privateFunc();
		}

		private privateFunc() {
			console.log(this);
		}
	}

	// Angular expects us to register an object, so...
	// we actually need a factory to properly pass in the injected values
	TodoListDirectiveClassFactory.$inject = ["$log"];
	function TodoListDirectiveClassFactory($log: ng.ILogService): ng.IDirective {
		return new TodoListDirective($log);
	}
	
	angular.module("app")
		.directive("todoListDirectiveAsClass", TodoListDirectiveClassFactory);

}