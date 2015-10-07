namespace AngularConf15 {

	/**
	 * a controller for the todo list: we're going to use controllerAs syntax
	 */
	class TodoListController {
		
		todos: ITodoItem[];
		
		static $inject = ["TodoListService"];
		constructor(
			// shortcut for creating a private member on the class
			private todoListService: TodoListService			
		) {
			this.todos = todoListService.todos;
		}
		
		addTodo(task: string): void {
			this.todoListService.addTodo(task);
		}
		
		removeTodo(id: number): void {
			// ask for confirmation
			if (confirm("Do you really want to delete task: " + id + "?")) {
				this.todoListService.removeTodo(id);
			}
		}
	}

	angular.module("app")
		.controller("TodoListController", TodoListController);

}