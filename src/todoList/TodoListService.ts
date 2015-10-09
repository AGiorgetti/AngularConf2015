namespace AngularConf15 {

	/**
	 * a Service used to manage the todo items
	 */
	export class TodoListService implements ITodoListService { // <- ES6 class
		
		// keeps the todo items list
		todos: ITodoItem[] = [];

		static $inject = ["$http"];
		constructor(
			private $http: ng.IHttpService
		) {
			$http.get("/api/list").then((todos: ITodoItem[]) => { // <- ES6 arrow syntax!
				// do not change the instance! can be dangerous depending on how we do the bindings
				for(let itm of todos) { // <- Es6 for..of
					this.todos.push(itm);
				}				
			});
		}
		
		/**
		 * adds a new task to the list!
		 */
		addTodo(task: string): void {
			this.$http.post("/api/list", { "task": task }).then((newTodoItem: ITodoItem) => {
				// update the local copy
				this.todos.push(newTodoItem);
			});
		}
		
		/**
		 * removes a task from the list
		 */
		removeTodo(id: number): void {
			this.$http.delete("/api/list/" + id).then((deletedItem: ITodoItem) => {
				// update the local list
				for (let i = 0; i < this.todos.length; i++) {
					if (this.todos[i].id === deletedItem.id) {
						this.todos.splice(i, 1);
						return;
					}
				}
			});
		}
	}

	angular.module("app")
		.service("TodoListService", TodoListService);

}