namespace AngularConf15 {

	class TodoListController {
		
		todos: TodoItem[];
		
		static $inject = ["TodoListService"];
		constructor(
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